import type { Pipeline } from './_types';

export const pipeline: Pipeline = {
  id: 'ai-podcast',
  title: 'AI 播客生成流水线',
  summary:
    'NotebookLM 把一堆 PDF、笔记、网页，5 分钟变成两个主持人对话式深度播客。学习辅助、知识营销、内容复用的最快路径。',
  tags: ['播客', '音频', '学习', '知识管理', 'NotebookLM'],
  difficulty: '入门',
  duration: '5 分钟 – 2 小时',
  updatedAt: '2026-05-14',

  intro: [
    { type: 'heading', level: 2, text: '一个改变知识消费形态的功能' },
    {
      type: 'paragraph',
      text:
        '2024 年 9 月 Google 在 NotebookLM 里悄悄上了「Audio Overview」功能 —— 你上传一堆资料，5 分钟后能下载一段两位主持人聊这些资料的对话式播客。一个看似小小的功能，到 2026 年已经重塑了「内容即音频」的市场：学习者、知识工作者、营销团队都把它作为第一选择，因为「写脚本 + 找配音 + 剪辑」这三步在它面前都不需要了。',
    },
    {
      type: 'paragraph',
      text:
        'Audio Overview 的本质是：把你输入的资料当作「世界事实」，让 AI 生成两位 host 围绕这些事实展开自然对话。它不是简单的「文字转语音」—— 而是先生成对话剧本（含口头禅、互相打断、追问、补充），再用真人质感的 TTS 演出。',
    },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '不要把它当 TTS 工具，它是「AI 主持人」。你给它资料，它给你一档节目。区别在于你不需要写台词、不需要安排嘉宾、不需要剪辑。',
    },

    { type: 'heading', level: 2, text: '四种格式（2026 年最新）' },
    {
      type: 'paragraph',
      text: '截至 2026 年 5 月，NotebookLM 的 Audio Overview 提供 4 种产出形态：',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Deep Dive（深度对谈）：6-15 分钟两位主持人对谈。最经典，最适合学习与内容营销',
        'Brief（简报）：1-2 分钟摘要。适合放在邮件、Twitter、推送通知里',
        'Debate（辩论）：两位主持人围绕争议话题各自立场对辩 —— 2026 年 1 月新加',
        'Cinematic Video（影像版）：自动配画面与运镜的视频版本 —— 2026 年 3 月起 rolling out',
      ],
    },

    { type: 'heading', level: 2, text: '关键约束（先把丑话说前面）' },
    {
      type: 'callout',
      tone: 'warn',
      text:
        '当前限制：① 主流仅英文（中文已小范围测试，效果一般）② 两位主持人，没有圆桌讨论模式 ③ 必须先上传源材料，不能现场抓网页 ④ 单 notebook 最多 300 个 source（2026 年扩容）',
    },
    {
      type: 'paragraph',
      text:
        '如果你的内容是中文且必须中文输出，目前还得用 ElevenLabs / MiniMax 配音 + ChatGPT 写对话脚本的传统路径。本流水线主流程以英文为例，文末有中文替代方案。',
    },

    { type: 'heading', level: 2, text: '关键经验' },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '上传资料越「干净 + 聚焦」，对话越精彩。50 个高质量 PDF > 200 个杂乱网页。NotebookLM 不擅长「淘金」，擅长「冶炼」。',
    },
    {
      type: 'callout',
      tone: 'tip',
      text:
        'Focus Prompt（聚焦指令）是高级玩家的秘密武器。生成前一句「请重点讨论方法论部分，跳过历史背景」，输出质量可以从 60 分跳到 90 分。',
    },
    {
      type: 'quote',
      text: 'Customize 按钮里那个「expertise level」开关（novice → expert）是被低估最严重的功能。新手友好 vs 专家直入主题，听感天差地别。',
      cite: 'NotebookLM 进阶指南（2026）',
    },
  ],

  tools: [
    {
      name: 'NotebookLM',
      purpose: 'Google 出品的核心工具。Audio Overview / Cinematic Video / 多种格式。免费且额度宽松',
      link: 'https://notebooklm.google.com',
    },
    {
      name: 'Recast Studio',
      purpose: '为 NotebookLM 输出做品牌包装：加片头、片尾、章节、字幕的一站式播客后期',
      link: 'https://recast.studio',
    },
    {
      name: 'Descript',
      purpose: '播客后期编辑神器。基于文字的剪辑、自动去口水、Overdub 修补瑕疵',
      link: 'https://www.descript.com',
    },
    {
      name: 'ElevenLabs（中文备选）',
      purpose: '如果你需要中文输出且对人声质感要求高，可用其 Multilingual v3 配合 GPT 脚本',
      link: 'https://elevenlabs.io',
    },
    {
      name: 'MiniMax 海螺（中文备选）',
      purpose: '中文音色最自然的国产 TTS。能克隆指定音色，适合做中文播客',
      link: 'https://www.minimax.io',
    },
    {
      name: 'Spotify for Podcasters / 小宇宙',
      purpose: '发布平台。Spotify 自带数据观测；小宇宙是中文播客主阵地',
      link: 'https://podcasters.spotify.com',
    },
  ],

  models: [
    { name: 'Gemini 2.5 Pro（NotebookLM 底层）', use: 'Audio Overview 的剧本生成与对话编排' },
    { name: 'Google TTS（NotebookLM 内置）', use: '两位主持人的人声合成 —— 接近真人水准' },
    { name: 'ElevenLabs Multilingual v3', use: '需要中文 / 多语种 / 自定义音色时的替代方案' },
    { name: 'Claude Opus 4.7', use: '中文路径下的对话脚本生成（带个性、口头禅、互相打断）' },
  ],

  steps: [
    {
      title: '01 · 明确播客目的与受众',
      description:
        '是给自己复习用？给同事 onboarding？还是营销目的？目的不同，格式（Deep Dive / Brief）和 Focus Prompt 都不同。',
    },
    {
      title: '02 · 收集源材料（关键步骤）',
      description:
        '上传 5-50 个高质量 source：PDF、笔记、Google Docs、YouTube 链接、网页 URL 都行。剔除杂质 —— 一份反例胜过十份正例毁掉效果。',
    },
    {
      title: '03 · 创建 Notebook 并上传',
      description:
        '在 notebooklm.google.com 新建 notebook，把所有 source 拖进去。等待索引完成（通常 1-2 分钟）。',
    },
    {
      title: '04 · 写 Focus Prompt（高级技巧）',
      description:
        '点 "Customize"，填一句聚焦指令。例如「重点聊方法论的步骤 3-5，把基础概念跳过，假设听众是有 2 年经验的从业者」。',
    },
    {
      title: '05 · 选择格式与生成',
      description:
        'Deep Dive（最常用） / Brief / Debate / Cinematic Video。点 Generate，等 3-5 分钟。',
    },
    {
      title: '06 · 试听与决定是否重做',
      description:
        '听一遍。如果方向不对，回 Step 4 改 Focus Prompt 后重新生成（不消耗额度）。如果只是细节问题，进 Step 7 后期处理。',
    },
    {
      title: '07 · 下载 MP3 + 后期包装',
      description:
        '下载原始 MP3。用 Descript 或剪映：加自定义片头片尾、章节标记、品牌 BGM、转写字幕。',
    },
    {
      title: '08 · 中文路径（可选）',
      description:
        '若需中文：用 Claude 让它「以两位主持人对话形式重写为中文播客脚本」，然后 ElevenLabs 或 MiniMax 用 2 个克隆音色分别配音 → 合并。',
    },
    {
      title: '09 · 发布到播客平台',
      description:
        'Spotify、Apple Podcasts、YouTube（音频版）、国内的小宇宙、喜马拉雅。同一份内容上传所有平台，覆盖最大化。',
    },
  ],

  cases: [
    {
      title: '研究生论文复习「神器」',
      description:
        '一位斯坦福 PhD 把一周要读的 30 篇论文上传到 NotebookLM，每篇生成 5 分钟 Brief 播客，通勤路上听完。',
      output:
        '论文消化效率提升 3 倍。该使用法被《Nature》专栏报道为「AI 时代的学习新姿势」。',
    },
    {
      title: '咨询公司白皮书转音频简报',
      description:
        '麦肯锡某产业研究团队把 200 页白皮书上传，生成 12 分钟 Deep Dive 与 90 秒 Brief。',
      output:
        '客户开会前用 Brief「快速对齐」，会后用 Deep Dive 复盘。客户满意度评分 +25%，白皮书的实际打开率 +180%。',
    },
    {
      title: '独立创作者：内容矩阵的「音频派生」',
      description:
        '一位科技博主把自己每周长文章丢进 NotebookLM 生成 Audio Overview 版本，自动发到 Spotify。',
      output:
        '原本只有「读」的渠道，多出「听」的渠道。订阅听众数 3 个月达 1 万，相当于把 1 份内容卖了 2 次。',
    },
  ],
};
