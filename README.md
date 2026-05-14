# AI Pipeline

> 一个介绍「如何利用 AI 完成各种工作」的精选流水线网站。

苹果质感的现代静态站，使用 **Vite + TypeScript** 构建，零运行时框架。

## 在本地运行

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # 输出到 dist/
npm run preview      # 预览生产构建
```

## 项目结构

```
src/
├── main.ts                 # 入口
├── router.ts               # hash 路由
├── pages/                  # 页面渲染
├── components/             # UI 组件
├── data/
│   ├── outputs.ts          # 首页「产出物」卡片数据
│   └── pipelines/
│       ├── _types.ts       # Pipeline 类型定义
│       ├── _registry.ts    # 自动聚合所有流水线
│       ├── ppt-creation.ts # 示范：PPT 制作
│       └── ai-film.ts      # 示范：AI 电影
├── render/rich-text.ts     # 富文本块渲染器
├── styles/                 # 设计令牌与样式
└── utils/                  # DOM 与动效工具
```

## 新增一条流水线

**只需添加一个 TypeScript 文件**，无需修改其它任何位置。

1. 在 `src/data/pipelines/` 下新建 `your-id.ts`（文件名不要以下划线开头，否则会被注册表忽略）
2. 按模板写内容：

```ts
import type { Pipeline } from './_types';

export const pipeline: Pipeline = {
  id: 'your-id',                   // 与文件名保持一致，用于 URL
  title: 'AI XX 流水线',
  summary: '一句话描述这条流水线在做什么',
  tags: ['标签1', '标签2'],
  difficulty: '入门',               // '入门' | '进阶' | '高级'
  duration: '1-2 小时',
  updatedAt: '2026-05-14',
  intro: [
    { type: 'heading', level: 2, text: '为什么用 AI 做这件事' },
    { type: 'paragraph', text: '正文……' },
    { type: 'callout', tone: 'tip', text: '提示框内容' },
    { type: 'list', items: ['要点 1', '要点 2'] },
  ],
  tools: [
    { name: 'ChatGPT', purpose: '做什么用', link: 'https://...' },
  ],
  models: [
    { name: 'Claude Opus 4.7', use: '在哪个步骤使用' },
  ],
  steps: [
    { title: '01 · 步骤标题', description: '步骤详细描述' },
  ],
  cases: [
    { title: '案例标题', description: '案例描述', output: '产出物/成果' },
  ],
};
```

3. 想让它出现在首页？在 `src/data/outputs.ts` 末尾追加一条 `OutputShowcase`，把 `pipelineId` 指向你新流水线的 `id`。

4. 推送到 `main` 分支 — GitHub Actions 自动构建并发布。

## 富文本块类型

详情页的「如何开始」字段支持以下块：

| 类型 | 用途 |
|---|---|
| `heading` | h2/h3 小标题 |
| `paragraph` | 段落 |
| `list` | 无序/有序列表（`ordered: true`） |
| `callout` | 提示框，三种语气：`info` / `tip` / `warn` |
| `code` | 代码块（可选 `lang`） |
| `image` | 配图 + 可选说明 |
| `quote` | 引言，含可选 `cite` 出处 |

## 部署到 GitHub Pages

1. 把仓库推到 GitHub
2. Settings → Pages → Source 选择 **GitHub Actions**
3. 推送 `main` 分支会自动触发 `.github/workflows/deploy.yml`

线上地址：`https://<username>.github.io/<repo>/`

由于 `vite.config.ts` 中 `base: './'` + 项目使用 hash 路由，可在任意子路径下工作，无需为 GitHub Pages 做额外配置。

## 设计风格

- **字体**：SF Pro Display / Inter / Noto Sans SC，按平台优雅回退
- **配色**：Apple 经典灰白 `#fbfbfd` / 近黑 `#1d1d1f` / Apple 蓝 `#0071e3`
- **响应式**：手机 / 平板 / 桌面三档适配
- **暗色模式**：自动跟随系统 `prefers-color-scheme`
- **动效**：滚动入场 + Hero 视差，全部遵循 `prefers-reduced-motion`

## 路由

| Hash | 说明 |
|---|---|
| `#/` | 首页 |
| `#/pipelines` | 流水线列表 |
| `#/pipelines/:id` | 流水线详情 |

## License

MIT
