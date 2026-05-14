import type { Pipeline } from './_types';

export const pipeline: Pipeline = {
  id: 'ppt-creation',
  title: 'AI PPT 制作流水线',
  summary:
    '从一个模糊的主题，到一份排版精致、叙事流畅的演示文稿。完整的 AI 协作链路，含大纲、视觉、动效与导出。',
  tags: ['演示文稿', '内容创作', '商业沟通'],
  difficulty: '入门',
  duration: '30 分钟 – 2 小时',
  updatedAt: '2026-05-14',

  intro: [
    { type: 'heading', level: 2, text: '为什么用 AI 做 PPT' },
    {
      type: 'paragraph',
      text:
        '传统 PPT 制作的瓶颈不是「写字」，而是「想清楚要说什么」与「让它看起来值得听」。AI 在这两件事上恰好各擅胜场：大模型负责把模糊的主题逼出结构化的叙事，专门的 PPT 工具负责把叙事翻译为视觉。',
    },
    {
      type: 'paragraph',
      text:
        '本流水线分为四个相互衔接的阶段：澄清意图 → 生成大纲 → 视觉化呈现 → 人工精修。每个阶段都明确「谁来做、产出什么、判定通过的标准」。',
    },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '关键心法：把 AI 当作能听懂中文的资深结构师，而不是会画图的实习生。你描述目标越清楚，它的产出越接近可用稿。',
    },
    { type: 'heading', level: 3, text: '适合的场景' },
    {
      type: 'list',
      items: [
        '内部周会 / 月度汇报：偏重信息密度与结论先行',
        '客户提案 / 商业方案：偏重叙事节奏与视觉信任感',
        '技术分享 / 学术演讲：偏重图表与代码片段的清晰度',
        '产品发布 / 主题演讲：偏重氛围、留白与影像质感',
      ],
    },
    {
      type: 'quote',
      text: '好的 PPT 不是「把字搬到屏幕上」，而是「在受众脑中重建一遍你的思考路径」。',
      cite: 'Edward Tufte',
    },
  ],

  tools: [
    {
      name: 'Gamma',
      purpose: '一句话生成完整 PPT 草稿，自动配图与版式，最快达到 70% 可用度',
      link: 'https://gamma.app',
    },
    {
      name: 'Tome',
      purpose: '叙事驱动的 AI 演示工具，单页视觉冲击力强，适合产品故事与品牌叙事',
      link: 'https://tome.app',
    },
    {
      name: 'Beautiful.AI',
      purpose: '智能模板自动排版，移动元素时版式自适应，零设计基础也能交付企业级稿件',
      link: 'https://www.beautiful.ai',
    },
    {
      name: 'ChatGPT / Claude',
      purpose: '在文本侧打磨大纲、句式、台词与转场，是「内容编辑」的角色',
      link: 'https://chat.openai.com',
    },
    {
      name: 'Midjourney / Ideogram',
      purpose: '为关键页生成定制插画或封面，避免千篇一律的素材图',
      link: 'https://www.ideogram.ai',
    },
    {
      name: 'Microsoft PowerPoint (Copilot)',
      purpose: '在最终精修阶段使用 —— 原生格式兼容性最好，Copilot 可帮忙改版式与配色',
      link: 'https://www.microsoft.com/microsoft-365/powerpoint',
    },
  ],

  models: [
    { name: 'Claude Opus 4.7', use: '长大纲规划 / 演讲稿撰写 / 复杂叙事打磨' },
    { name: 'GPT-5 / GPT-4o', use: '快速头脑风暴 / 标题党与金句生成' },
    { name: 'Gemini 2.5 Pro', use: '为图表页生成「图说一句话」的精准描述' },
    { name: 'Midjourney v7', use: '风格统一的封面与插画' },
    { name: 'Ideogram 3.0', use: '需要文字嵌入图像时（图表标注、海报式封面）' },
  ],

  steps: [
    {
      title: '01 · 锁定意图（5 分钟）',
      description:
        '在动笔之前，先对自己回答三件事：受众是谁、他们听完应该「想 / 做 / 信」什么、你愿意花他们多少分钟。把这三句话发给 AI，是后续所有产出质量的天花板。',
    },
    {
      title: '02 · 生成结构化大纲（10 分钟）',
      description:
        '把三句话连同主题一起喂给 Claude，要求输出「N 页 / 每页一句话主张 + 一句话支撑材料」。反复迭代 2-3 轮，直到每一页都通过「为什么需要这一页」的拷问。',
    },
    {
      title: '03 · 在 Gamma 一键生成草稿（5 分钟）',
      description:
        '把打磨后的大纲粘进 Gamma，选择风格、字体、配色，等待生成。这一步不要纠结视觉细节，目标是拿到一份能跑通的「视觉占位稿」。',
    },
    {
      title: '04 · 关键页定制视觉（20-40 分钟）',
      description:
        '识别出 3-5 张「记忆点页」（开场、结论、转折、数字爆点、案例展示），用 Midjourney 或 Ideogram 单独生成图，替换 Gamma 默认素材。',
    },
    {
      title: '05 · 文字精修与节奏校对（15-30 分钟）',
      description:
        '把每页文字拷回 Claude，要求按照「主张句 12 字以内、支撑句 30 字以内、动词强、避免形容词堆叠」改写。然后口头快速过一遍，标记节奏不顺的位置。',
    },
    {
      title: '06 · 导出与现场预演（10 分钟）',
      description:
        '导出为 .pptx 或 PDF，在目标演示设备上预览一遍。验证字体回退、动画兼容、远程演示场景下的对比度。最后做一次完整口播彩排。',
    },
  ],

  cases: [
    {
      title: '某 SaaS 创业团队种子轮 BP',
      description:
        '15 页，从主题「为中小电商提供 AI 客服」起步，3 小时内完成。Gamma 出草稿 5 分钟，Claude 改了 8 轮文字，Midjourney 出了 6 张定制插画。',
      output:
        '最终融资轮次完成，投资人反馈「叙事节奏接近 Apple Keynote 的开场段落」。',
    },
    {
      title: '高校教师课程总结分享',
      description:
        '30 页，原始素材是一学期的零散笔记。先让 Claude 把笔记归类成 6 个主题，再用 Gamma 直接生成。',
      output:
        '一晚上完成往年需要 3 天的工作量。课程评估中 PPT 视觉评分从 7.2 升至 9.1。',
    },
    {
      title: '技术团队架构 RFC 内部评审',
      description:
        '12 页，重点在两张系统架构图与一张时序图。架构图用 Excalidraw 手画，其余文字页全由 Gamma + Claude 完成。',
      output:
        '评审讨论从「我没看懂你想说什么」变成「我们就第 7 页的 trade-off 多聊聊」。',
    },
  ],
};
