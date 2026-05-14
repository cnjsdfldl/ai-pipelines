# AI 流水线介绍网站 — 实施计划

## Context

构建一个介绍「如何利用 AI 完成各种工作」的内容型网站，定位为 AI 工作流（pipeline）的精选展示站。

**核心诉求**：
1. **首页**：以「产出物」为维度展示 AI 当下能做什么 —— 不罗列工具品牌，而是回答「AI 现在能帮我做出什么样的成品」。每张产出卡片都是通往对应流水线详情的入口。**初始收录 2 类产出：「PPT 制作」「AI 电影」**，后续可顺势扩展。
2. **流水线**：列表 + 详情页。详情页以富文本呈现每条流水线的「如何开始 / 推荐工具 / 推荐模型 / 步骤 / 经典案例产出」

**关键约束**：
- UI 风格前卫现代、苹果质感、字体讲究
- 新增流水线必须能「静态地」加入（仅添加一个 TS 模块即可，无需修改其它文件）
- 最终通过 GitHub Pages 直接发布

**确认的技术选型**（已通过提问与用户对齐）：
- Vite + TypeScript（vanilla TS，不引入 React/Vue 等运行时框架，保持极简）
- 流水线内容采用 TypeScript 模块（结构化数据 + 富文本片段）
- 首页「产出物」卡片为手工维护的静态列表，与流水线一一对应
- 当前界面纯中文，但数据结构预留 i18n 友好的字段命名
- 首页 Hero 采用「大型产品截图 + 滚动视差」苹果式构图

---

## 架构总览

### 技术决策
| 维度 | 选择 | 理由 |
|---|---|---|
| 构建工具 | Vite | 极速 HMR，构建产物纯静态，天然适配 GitHub Pages |
| 语言 | TypeScript | 类型安全，强约束流水线数据结构，避免新增内容时字段拼错 |
| UI 框架 | 不使用（vanilla TS） | 站点页面仅 2~3 个，避免引入运行时依赖，最大化加载性能与「纯静态」气质 |
| 路由 | 自实现 hash router | GitHub Pages 子路径友好，无需 404.html fallback，无需 base 路径折腾 |
| 样式 | 原生 CSS + CSS 变量 | 苹果风的关键是字体与留白，原生 CSS 足以胜任，无需 Tailwind/PostCSS |
| 富文本渲染 | 自实现块级渲染器 | 流水线内容用结构化「块」描述（heading/paragraph/list/callout/code/image），渲染函数把块转 DOM。安全（无 dangerouslySetInnerHTML）、可控、可主题化 |
| 流水线发现 | `import.meta.glob('./pipelines/*.ts', { eager: true })` | 新增一个 .ts 文件即自动注册，无需手动改注册表（满足核心约束） |
| 部署 | GitHub Actions → gh-pages | 推送 main 自动构建发布 |

### 目录结构

```
ai-pipline/
├── index.html                       # 单一入口（SPA）
├── vite.config.ts                   # base: './'，便于 GitHub Pages
├── tsconfig.json
├── package.json
├── .github/workflows/deploy.yml     # 自动部署到 gh-pages
├── public/
│   ├── favicon.svg
│   └── images/                      # AI 应用图标、案例配图
├── src/
│   ├── main.ts                      # 入口：挂载路由
│   ├── router.ts                    # hash router（#/  #/pipelines  #/pipelines/:id）
│   ├── pages/
│   │   ├── home.ts                  # 首页渲染
│   │   ├── pipeline-list.ts         # 流水线列表
│   │   └── pipeline-detail.ts       # 流水线详情
│   ├── components/
│   │   ├── nav.ts                   # 顶部胶囊毛玻璃导航
│   │   ├── hero.ts                  # 首页 Hero（大截图 + 视差）
│   │   ├── output-card.ts           # 首页产出物卡片（PPT / AI 电影 等）
│   │   ├── pipeline-card.ts         # 流水线列表卡片
│   │   └── footer.ts
│   ├── data/
│   │   ├── outputs.ts               # 首页「产出物」展示列表（含 pipelineId 关联）
│   │   └── pipelines/
│   │       ├── _types.ts            # Pipeline 类型与块类型定义
│   │       ├── _registry.ts         # 用 import.meta.glob 自动聚合
│   │       ├── ppt-creation.ts      # 初始示范：PPT 制作流水线
│   │       └── ai-film.ts           # 初始示范：AI 电影流水线
│   ├── render/
│   │   └── rich-text.ts             # 块 → DOM 的渲染器
│   ├── styles/
│   │   ├── tokens.css               # 设计变量（色 / 字 / 间距 / 圆角 / 阴影 / 动效曲线）
│   │   ├── base.css                 # reset + body + 排版
│   │   ├── components.css           # nav / card / button 等
│   │   └── pages.css                # 页面级布局
│   └── utils/
│       └── motion.ts                # IntersectionObserver 触发的入场动画
└── README.md
```

---

## 关键数据模型（`src/data/pipelines/_types.ts`）

```ts
export type Block =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'callout'; tone: 'info' | 'tip' | 'warn'; text: string }
  | { type: 'code'; lang?: string; text: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'quote'; text: string; cite?: string };

export interface ToolRef    { name: string; purpose: string; link?: string }
export interface ModelRef   { name: string; use: string }
export interface StepItem   { title: string; description: string }
export interface CaseItem   { title: string; description: string; output?: string; image?: string }

export interface Pipeline {
  id: string;                       // 用于 URL，如 'ai-content-creation'
  title: string;
  summary: string;                  // 一句话摘要（列表卡片用）
  cover?: string;                   // 列表/详情头图
  tags: string[];
  difficulty: '入门' | '进阶' | '高级';
  duration: string;                 // 如 '1-2 小时'
  intro: Block[];                   // 「如何开始」富文本
  tools: ToolRef[];                 // 推荐工具
  models: ModelRef[];               // 推荐模型
  steps: StepItem[];                // 步骤
  cases: CaseItem[];                // 经典案例与产出物
  updatedAt: string;                // ISO 日期
}
```

### 首页产出物数据模型（`src/data/outputs.ts`）

```ts
export interface OutputShowcase {
  id: string;                 // 'ppt' | 'ai-film' | ...
  title: string;              // 'PPT 制作' / 'AI 电影'
  tagline: string;            // 一句话副标题（产出形态描述）
  cover: string;              // 大封面图（16:10）
  pipelineId: string;         // 指向 src/data/pipelines/<id>.ts 的 id
  accent?: string;            // 可选的卡片强调色（hover 时辉光）
}

export const outputs: OutputShowcase[] = [
  {
    id: 'ppt',
    title: 'PPT 制作',
    tagline: '从空白大纲到可演示的成品幻灯片',
    cover: '/images/output-ppt.jpg',
    pipelineId: 'ppt-creation',
  },
  {
    id: 'ai-film',
    title: 'AI 电影',
    tagline: '剧本 · 分镜 · 生成 · 剪辑 · 配音配乐 一站式产出',
    cover: '/images/output-ai-film.jpg',
    pipelineId: 'ai-film',
  },
];
```

> 新增一个首页产出物 = 在 `outputs.ts` 末尾追加一条 + 确保对应的 `pipelineId` 在 `src/data/pipelines/` 下存在。

### 注册表自动聚合（`_registry.ts`）

```ts
import type { Pipeline } from './_types';

const modules = import.meta.glob<{ pipeline: Pipeline }>(
  './*.ts',
  { eager: true, import: 'pipeline' }
);

// 过滤掉 _types.ts / _registry.ts（以下划线开头的为内部文件）
export const pipelines: Pipeline[] = Object.entries(modules)
  .filter(([path]) => !path.includes('/_'))
  .map(([, mod]) => mod as unknown as Pipeline)
  .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

export const findPipeline = (id: string) =>
  pipelines.find(p => p.id === id);
```

> **「新增流水线 = 添加一个文件」是如何成立的**：Vite 在编译期把 `import.meta.glob` 展开为静态 import 列表，因此新增 `src/data/pipelines/foo.ts` 并 `export const pipeline: Pipeline = {...}` 后，构建即自动收录，无需改任何其它文件。

---

## 苹果风格设计令牌（`src/styles/tokens.css`）

```css
:root {
  /* 色 */
  --color-bg:        #fbfbfd;          /* Apple 经典灰白 */
  --color-surface:   #ffffff;
  --color-ink:       #1d1d1f;          /* 苹果近黑 */
  --color-muted:     #6e6e73;
  --color-line:      rgba(0,0,0,0.08);
  --color-accent:    #0071e3;          /* Apple 蓝 */
  --color-accent-2:  #ff375f;          /* 强调红 */

  /* 字 */
  --font-sans: 'SF Pro Display', -apple-system, BlinkMacSystemFont,
               'Inter', 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei',
               system-ui, sans-serif;
  --font-mono: 'SF Mono', 'JetBrains Mono', Consolas, monospace;

  /* 排版尺度（type scale 1.25） */
  --fs-display: clamp(2.5rem, 6vw, 4.5rem);   /* Hero 大标题 */
  --fs-h1: clamp(2rem, 4vw, 3rem);
  --fs-h2: clamp(1.5rem, 2.5vw, 2rem);
  --fs-h3: 1.25rem;
  --fs-body: 1.0625rem;                       /* 17px，苹果官网正文常用 */
  --fs-small: 0.875rem;

  /* 间距 */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
  --space-4: 16px; --space-5: 24px; --space-6: 32px;
  --space-7: 48px; --space-8: 64px; --space-9: 96px;

  /* 圆角与阴影 */
  --radius-sm: 8px; --radius-md: 14px; --radius-lg: 20px; --radius-xl: 28px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.06);
  --shadow-lg: 0 24px 60px rgba(0,0,0,0.10);

  /* 动效 */
  --ease-apple: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 180ms; --dur-mid: 320ms; --dur-slow: 600ms;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:      #000000;
    --color-surface: #1d1d1f;
    --color-ink:     #f5f5f7;
    --color-muted:   #a1a1a6;
    --color-line:    rgba(255,255,255,0.10);
  }
}
```

**视觉风格要点**：
- 顶部导航：胶囊毛玻璃 `backdrop-filter: blur(20px) saturate(180%)`，半透明，滚动时阴影渐显
- **Hero（大截图 + 视差）**：左侧大号 display 文字标题与副标题 + CTA 按钮，右侧（桌面）/ 下方（移动）放置一张代表性产品截图（首张选 PPT 制作流水线的成品 PPT 截图），通过 `transform: translateY(scrollY * -0.15)` 实现轻量视差，仅在 `prefers-reduced-motion: no-preference` 下启用
- 产出物卡片（首页）：大尺寸视觉卡，封面图占主视野（16:10），下方标题 + 副标题 + 标签条，悬停封面图轻微放大 `scale(1.04)`，整卡跳转到对应流水线详情
- 流水线卡片（列表页）：横向布局，左封面右元数据（标题/摘要/标签/难度/耗时）
- 滚动入场：IntersectionObserver 触发 `opacity:0→1, translateY(24px→0)`，错位 80ms
- 详情页阅读宽度限制 720px，行高 1.7，遵循苹果文档式排版
- 暗色模式自动跟随系统
- 视差与动画一律遵循 `prefers-reduced-motion`，禁用时全部退化为静态

---

## 路由设计（hash-based）

| Hash | 页面 |
|---|---|
| `#/` 或空 | 首页（Hero + 热门 AI 应用 + 精选流水线入口） |
| `#/pipelines` | 流水线列表（卡片网格 + 标签筛选） |
| `#/pipelines/:id` | 流水线详情 |

hash router 极简实现（`src/router.ts`）：监听 `hashchange` + 初次加载，解析 hash → 调用对应 page 的 `render(root, params)`。

**选 hash 不选 history 的理由**：GitHub Pages 不支持服务端 fallback；history 模式刷新会 404。hash 路由零配置可用。

---

## 关键文件清单（待创建/修改）

- `package.json` — 依赖：仅 `vite`、`typescript`；脚本：`dev` / `build` / `preview`
- `vite.config.ts` — `base: './'`、`build.outDir: 'dist'`
- `tsconfig.json` — `strict: true`、`moduleResolution: 'bundler'`
- `index.html` — `<div id="app">`、字体预加载、主题色 meta
- `src/main.ts` — 启动路由
- `src/router.ts` — hash router
- `src/pages/home.ts` — 首页
- `src/pages/pipeline-list.ts` — 列表（含标签过滤）
- `src/pages/pipeline-detail.ts` — 详情（调用 rich-text 渲染器）
- `src/components/nav.ts` / `hero.ts` / `output-card.ts` / `pipeline-card.ts` / `footer.ts`
- `src/data/outputs.ts` — 首页「产出物」展示列表（初始 2 条：PPT 制作、AI 电影），每条含 `pipelineId` 字段指向详情页
- `src/data/pipelines/_types.ts` / `_registry.ts`
- `src/data/pipelines/ppt-creation.ts` — 示范流水线 1：PPT 制作（推荐 Gamma / Tome / ChatGPT + 模型选型 + 完整步骤 + 真实成品案例）
- `src/data/pipelines/ai-film.ts` — 示范流水线 2：AI 电影（推荐 Runway / Sora / Pika / Suno / ElevenLabs + 分镜→生成→剪辑→配音→配乐 全流程）
- `src/render/rich-text.ts` — 块 → DOM 渲染器
- `src/styles/tokens.css` / `base.css` / `components.css` / `pages.css`
- `src/utils/motion.ts` — 入场动画
- `.github/workflows/deploy.yml` — GitHub Actions 自动部署
- `README.md` — 含「如何新增一条流水线」操作指南

---

## 新增流水线的操作流程（写入 README）

```
1. 在 src/data/pipelines/ 下新建 your-pipeline-id.ts
2. 模板：
   import type { Pipeline } from './_types';
   export const pipeline: Pipeline = {
     id: 'your-pipeline-id',
     title: '...',
     summary: '...',
     tags: ['...'],
     difficulty: '入门',
     duration: '1 小时',
     intro: [
       { type: 'heading', level: 2, text: '如何开始' },
       { type: 'paragraph', text: '...' },
     ],
     tools:  [{ name: 'ChatGPT', purpose: '...', link: '...' }],
     models: [{ name: 'GPT-4o', use: '...' }],
     steps:  [{ title: '...', description: '...' }],
     cases:  [{ title: '...', description: '...', output: '...' }],
     updatedAt: '2026-05-14',
   };
3. git push → GitHub Actions 自动构建并发布
```

---

## 验证方式

### 本地
1. `npm install`
2. `npm run dev` → 浏览器打开 `http://localhost:5173`
3. 路由验证：
   - `#/` 首页加载、Hero 大截图视差正常、产出物卡片（PPT 制作 / AI 电影）可悬停且点击跳转到对应流水线详情
   - `#/pipelines` 列表显示 2 条示范流水线，标签筛选生效
   - `#/pipelines/ppt-creation` 与 `#/pipelines/ai-film` 详情页所有块（heading/paragraph/list/callout/code/image/quote）正确渲染
4. 暗色模式：切换系统外观，验证自动跟随
5. 响应式：DevTools 切到 375px / 768px / 1440px，验证 Hero 在窄屏切换为「文字在上，截图在下」
6. 动效偏好：DevTools → Rendering → Emulate `prefers-reduced-motion: reduce`，验证视差与入场动画被禁用
7. 新增流水线验证：在 `src/data/pipelines/` 下新建一个文件（不以下划线开头），观察列表与（若 outputs.ts 中关联）首页自动出现

### 生产
1. `npm run build` → 检查 `dist/` 产物路径相对化（无以 `/` 开头的资源引用）
2. `npm run preview` → 模拟生产环境跑一次
3. 推送到 GitHub `main` 分支 → 检查 Actions 是否绿；访问 `https://<user>.github.io/<repo>/` 验证线上可用
4. GitHub Pages 子路径下 hash 路由仍生效（这是选 hash 路由的核心收益，无需 404.html）

### 内容质量验证
- 2 条示范流水线（PPT 制作 / AI 电影）均包含完整的 5 个区段（如何开始 / 工具 / 模型 / 步骤 / 案例）
- 富文本至少覆盖 heading / paragraph / list / callout / code / image / quote 全部 7 种块
- 首页产出物卡片 2 张，每张含封面图、标题、一句话副标题、关联 pipelineId、点击可直达详情

---

## 不做的事（明确划界）

- ❌ 不引入 React / Vue / Svelte 等运行时框架
- ❌ 不引入 Tailwind / UnoCSS（原生 CSS 已足够）
- ❌ 不做用户系统、评论、收藏（纯展示站）
- ❌ 不做服务端、数据库、API（纯静态）
- ❌ 当前不实装 i18n，仅在数据结构层面（如字段命名）保持英文 key，便于将来无痛接入
- ❌ 不引入 Markdown 解析（用户选择了 TS 结构化块的方案）
