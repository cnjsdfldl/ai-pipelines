import type { Pipeline } from './_types';

export const pipeline: Pipeline = {
  id: 'ai-coding',
  title: 'AI 编程流水线（Vibe Coding）',
  summary:
    'Cursor 写代码 + Claude Code 终端 Agent + 规范驱动开发（SDD）。从模糊需求到可上线代码的全栈协作流程。',
  tags: ['编程', '软件工程', 'Cursor', 'Claude Code', 'Spec-Driven'],
  difficulty: '进阶',
  duration: '数小时 – 数周',
  updatedAt: '2026-05-14',

  intro: [
    { type: 'heading', level: 2, text: '什么是 Vibe Coding' },
    {
      type: 'paragraph',
      text:
        'Vibe Coding 是 2026 年最广为流传的开发新范式：开发者不再「逐行写代码」，而是「跟 AI 反复对一个意图，再让 AI 把实现铺出来」。你的角色从「码农」转为「架构师 + 评审 + 验证者」—— 这是 Anthropic 创始人 Andrej Karpathy 在 2025 年首次提出的工作方式，到 2026 年已成为主流。',
    },
    {
      type: 'paragraph',
      text:
        '但「凭感觉撸」并不是真的乱撸 —— 走得快的人都在用一种叫 Spec-Driven Development（SDD，规范驱动开发）的子方法论：先写一份规范（Spec），再让 AI 围绕这份 Spec 编码。GitHub Spec Kit、AWS Kiro、Claude Code、Cursor、OpenSpec、BMAD、Tessl、Google Antigravity 等主流 AI 编程工具到 2026 年都各自推出了 SDD 流程。',
    },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '一个等式来记忆：Vibe Coding 的产出质量 ≈ Spec 的清晰度 × AI 的编码能力。你不会写 Spec，再聪明的 AI 也救不了你。',
    },

    { type: 'heading', level: 2, text: '主流工具的分工' },
    {
      type: 'paragraph',
      text:
        '到 2026 年中期，Vibe Coding 的工具生态稳定在三大角色 —— 你需要的不是单一工具，而是它们的组合：',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Cursor（IDE 内的「速度王」）：VS Code fork，AI 直接在编辑器里改代码、跑测试、看 diff。日常 80% 的小改动用它',
        'Claude Code（终端的「重任 Agent」）：跨整个 codebase 的自主 Agent。新功能、大重构、跨多文件的复杂任务交给它',
        'Codex / Antigravity（深度推理）：模型基准最强，处理算法挑战或棘手的 trade-off 时启用',
      ],
    },
    {
      type: 'quote',
      text: 'Use Cursor for in-editor velocity, Claude Code for planning and complex tasks, and Codex where model depth matters most.',
      cite: 'Vibe Coding Academy（2026 best practice）',
    },

    { type: 'heading', level: 2, text: 'SDD 四阶段：Requirements → Design → Tasks → Implementation' },
    {
      type: 'paragraph',
      text:
        '规范驱动开发把开发拆为 4 个阶段，每个阶段都有验证 checkpoint。这套流程是 GitHub Spec Kit / cc-sdd / 类似工具的标准模板：',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Requirements（需求）：你和 AI 反复对话，沉淀一份 requirements.md —— 用户是谁、要解决什么、边界条件、不做什么',
        'Design（设计）：在 requirements 基础上写 design.md —— 架构选型、关键决策、trade-off、API 与数据模型草案',
        'Tasks（任务）：把 design 切成可执行的 task list —— 每个 task 应可在 1-2 小时内做完且有明确的「完成定义」',
        'Implementation（实施）：在每个 task 上调用 Claude Code 的 plan mode → 阅读相关代码 → 给方案 → 你审 → 写代码 → 测试',
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      text:
        'Bug 修复有一条更短的子流程：Report → Analyze → Fix → Verify。不用走完整 4 阶段。',
    },

    { type: 'heading', level: 2, text: '关键经验' },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '在 Plan 阶段花的时间，是在 Implement 阶段省下的时间的 5-10 倍。永远先 Plan 再写。',
    },
    {
      type: 'callout',
      tone: 'warn',
      text:
        '不要让 AI 「一次做完一切」。把大任务拆成可独立验证的小任务，每完成一个就跑测试 + 提一次 commit。Agent 越是被「放养」越容易跑偏，且回滚成本更高。',
    },
    {
      type: 'paragraph',
      text:
        '你的核心价值不再是「能写出代码」，而是「能判断 AI 输出的代码对不对」。AI 时代的工程师 = 评审能力 + 系统思考 + 调试品味。这三项过去也重要，现在则是唯一壁垒。',
    },
  ],

  tools: [
    {
      name: 'Cursor 3',
      purpose: 'AI-native IDE。2026 年 4 月发布的 Agents Window 支持多 Agent 并行；日常编辑首选',
      link: 'https://cursor.sh',
    },
    {
      name: 'Claude Code',
      purpose: 'Anthropic 出品的终端 Agent。Plan 模式 + 长上下文 + 工具调用，适合跨 codebase 重任务',
      link: 'https://code.claude.com',
    },
    {
      name: 'Codex (OpenAI)',
      purpose: '模型推理最强一档。算法题、性能瓶颈、复杂数据结构时启用',
      link: 'https://openai.com/codex',
    },
    {
      name: 'GitHub Spec Kit',
      purpose: 'GitHub 官方的 SDD 工具链。把规范驱动开发标准化到 git 仓库工作流',
      link: 'https://github.com/github/spec-kit',
    },
    {
      name: 'cc-sdd / Pimzino spec-workflow',
      purpose: 'Claude Code 的开源 SDD 模板。把 Requirements → Design → Tasks → Implementation 模板化',
      link: 'https://github.com/gotalab/cc-sdd',
    },
    {
      name: 'GitHub Actions / CI',
      purpose: '关键防护栏。每次 commit 自动跑测试，挡住 AI 制造的「能跑但不对」的代码',
      link: 'https://docs.github.com/actions',
    },
  ],

  models: [
    { name: 'Claude Opus 4.7', use: 'Plan 阶段、跨多文件重构、复杂调试 —— 长上下文与规划能力最强' },
    { name: 'Claude Sonnet 4.6', use: '日常编辑、单文件改动 —— 性价比最高' },
    { name: 'GPT-5 / Codex', use: '算法、性能、棘手的 trade-off 决策' },
    { name: 'Gemini 2.5 Pro', use: '大型代码库的 grounding 阅读 —— 2M+ token 上下文优势' },
  ],

  steps: [
    {
      title: '01 · 写 Requirements（需求）',
      description:
        '在 specs/feature-x/requirements.md 里描述：用户故事、验收标准、边界、明确不做的事。和 Claude 来回对 3-5 轮直到没有歧义。',
    },
    {
      title: '02 · 写 Design（设计）',
      description:
        '在 design.md 里给出架构选型、关键决策与替代方案、API/数据模型草案。把 trade-off 写明。让 AI 帮你列「我可能漏了什么」。',
    },
    {
      title: '03 · 拆 Tasks（任务）',
      description:
        '把 design 切成 5-15 个 task。每个 task：标题、做什么、做完的定义（DoD）、估时 1-2h。task 太大就再拆。',
    },
    {
      title: '04 · 进入 Plan 模式',
      description:
        '逐个 task 启动 Claude Code 的 plan mode。它读相关代码、问你问题、产出实施计划。你审阅 plan，确认无误后才让它写代码。',
    },
    {
      title: '05 · 实施 + 频繁验证',
      description:
        '让 AI 实现这个 task。完成立即跑 lint / type-check / 单测。出错先看 AI 自己能不能修，给 2 次机会，再次失败由你接手定位根因。',
    },
    {
      title: '06 · 提 Commit + 推 PR',
      description:
        '每个 task 一个 commit（或一组小 commit）。在 PR 描述里链接对应的 spec 文档，让评审者能溯源「为什么这样设计」。',
    },
    {
      title: '07 · 代码评审（Human in the loop）',
      description:
        '人工 review 是必须的。AI 写的代码常见问题：过度抽象、捏造 API、漏掉错误处理。重点看「业务逻辑是否真的对」而非「代码风格」。',
    },
    {
      title: '08 · 部署 + 观测',
      description:
        '部署后跟踪关键指标（错误率、性能、用户行为）。把观测结果回灌到 spec —— 让下次 AI 写的代码受益于真实数据。',
    },
  ],

  cases: [
    {
      title: '个人项目从 0 到上线（一个周末）',
      description:
        '用 Cursor + Claude Code 在周末做出一个完整 SaaS 原型：用户登录、订阅支付、AI 调用、前端面板。Spec 占 4 小时，编码占 8 小时，部署占 2 小时。',
      output:
        '上线后 1 周获 200 用户，验证了 PMF 假设。同样需求传统方式至少 3 周。',
    },
    {
      title: '团队功能开发：跨 3 个微服务的支付流程',
      description:
        '4 人小队用 cc-sdd 规范完整跑通 SDD：需求 1 天、设计 1 天、任务拆解半天、实施 5 天、评审与上线 2 天。',
      output:
        '相比团队过往同等复杂度功能（约 4 周），周期缩短 60%，且代码审核通过率从 60% 升到 92%（spec 让 AI 一次写对）。',
    },
    {
      title: '大型重构：30 万行 Python 单体迁到 TypeScript',
      description:
        'Claude Code 自主 Agent 模式 + 严格的 task 拆分（按业务模块）。每个 task 完成自动跑回归测试。',
      output:
        '6 个月，2 个工程师完成。Bug 回归率 < 0.3%。Karpathy 在 X 上点赞此案例为「SDD 的工业案例」。',
    },
  ],
};
