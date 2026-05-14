import type { Pipeline } from './_types';

export const pipeline: Pipeline = {
  id: 'ai-film',
  title: 'AI 电影制作流水线',
  summary:
    '一个人，从一句故事概念，到一部带配音、配乐、字幕、调色的短片。完整工业流程的 AI 化重构。',
  tags: ['视听内容', '影视', '创意'],
  difficulty: '高级',
  duration: '8 小时 – 数周',
  updatedAt: '2026-05-14',

  intro: [
    { type: 'heading', level: 2, text: '一个人能拍一部电影了' },
    {
      type: 'paragraph',
      text:
        '在 2024 年之前，拍一部 3 分钟的视效短片需要至少 5 人 × 4 周 × 数十万预算。到了 2026 年，一个掌握流水线的独立创作者，可以在一个周末用 0 元成本完成同等质量的成品。',
    },
    {
      type: 'paragraph',
      text:
        '关键不是某一个「魔法工具」，而是整条流水线的衔接：每一段 AI 视频都是「3 秒 - 8 秒」的不连续片段，需要剧本、分镜、声音、剪辑共同作用才能形成一部「电影」。本流水线讲清楚每一段如何衔接。',
    },
    {
      type: 'callout',
      tone: 'warn',
      text:
        'AI 视频目前的硬伤是「角色一致性」与「物理真实感」。请把它当作「实验影像」而非「写实影像」来定位项目类型 —— 寓言、科幻、动画风、MV 是当下最适配的体裁。',
    },
    { type: 'heading', level: 3, text: '工业流程在 AI 化后的对应' },
    {
      type: 'list',
      ordered: true,
      items: [
        '编剧 → Claude / GPT 协作的剧本驾驶舱',
        '分镜师 → Midjourney + 文字脚本生成连贯故事板',
        '摄影 + 灯光 → Sora / Veo / Runway 生成画面',
        '美术 + 道具 → 提示词工程 + 风格参考图',
        '演员 → AI 角色生成（注意一致性方案）',
        '配音 → ElevenLabs / Suno 配乐',
        '剪辑 + 调色 → CapCut / DaVinci Resolve（AI 辅助）',
        '字幕 → Whisper + AI 翻译',
      ],
    },
    {
      type: 'quote',
      text:
        'AI 视频的瓶颈不在模型，而在「人类导演的品味与剪辑」。模型只是给你更多 take，会不会用它们，仍然是导演功底。',
      cite: '某独立 AI 短片导演',
    },
  ],

  tools: [
    {
      name: 'Sora 2 / Veo 3',
      purpose: '当前画质与物理一致性最强的视频生成模型，适合写实风格主镜头',
      link: 'https://openai.com/sora',
    },
    {
      name: 'Runway Gen-4',
      purpose: '影视感最足，支持 Motion Brush 与图生视频，剪辑师友好',
      link: 'https://runwayml.com',
    },
    {
      name: 'Kling 2.5 / Hailuo',
      purpose: '中文场景下角色与口型表现力突出，国内可直接使用',
      link: 'https://kling.kuaishou.com',
    },
    {
      name: 'Pika 2.0',
      purpose: '风格化与转场效果丰富，适合 MV 与短视频形态',
      link: 'https://pika.art',
    },
    {
      name: 'Midjourney v7',
      purpose: '故事板与角色定型 —— 视频流水线的起点，决定整片视觉调性',
      link: 'https://www.midjourney.com',
    },
    {
      name: 'ElevenLabs',
      purpose: '配音、画外音、声音克隆，支持中文情感语调控制',
      link: 'https://elevenlabs.io',
    },
    {
      name: 'Suno v4',
      purpose: '一键生成包含人声的完整歌曲，适合主题曲与情感转场配乐',
      link: 'https://suno.com',
    },
    {
      name: 'CapCut / DaVinci Resolve',
      purpose: '剪辑、调色、字幕、混音的最终落地工具',
      link: 'https://www.capcut.com',
    },
  ],

  models: [
    { name: 'Claude Opus 4.7', use: '剧本结构与人物弧光，长上下文优势明显' },
    { name: 'GPT-5', use: '镜头描述提示词工程，把剧本翻译为视频模型的精确指令' },
    { name: 'Sora 2', use: '主镜头视频生成，10 秒内的复杂运镜与物理表现' },
    { name: 'Runway Gen-4', use: '需要起始 + 结尾帧精确控制的过渡镜头' },
    { name: 'Midjourney v7', use: '故事板帧、概念图、参考图，统一全片视觉语言' },
    { name: 'ElevenLabs Multilingual v3', use: '中文情感配音，长篇旁白可保持音色稳定' },
    { name: 'Suno v4', use: '主题曲、片尾曲、节奏明确的情绪配乐' },
  ],

  steps: [
    {
      title: '01 · 概念定型（30 分钟）',
      description:
        '用一句话写清楚「故事是谁的、发生了什么、为什么观众会在乎」。和 Claude 反复打磨这一句，直到能让一个陌生人在听完后说出「我想看这个」。',
    },
    {
      title: '02 · 剧本与分镜（2-4 小时）',
      description:
        '写出 3 幕结构剧本，然后逐场拆解为镜头表：每个镜头包含「景别、视角、人物动作、环境、镜头时长、提示词草稿」。用 Midjourney 出每个关键镜头的故事板帧，统一视觉调性。',
    },
    {
      title: '03 · 角色与场景一致性方案（1-2 小时）',
      description:
        '在动手生成视频之前，先用 Midjourney 锁定主角 3-5 张定型图（正面、侧面、远景）。所有视频镜头的提示词都引用这套定型图作为风格锚点（image prompt）。',
    },
    {
      title: '04 · 镜头逐条生成（占总时长 50-70%）',
      description:
        '按分镜表逐条生成视频。每个镜头通常需要 3-8 次抽卡才能拿到可用 take。养成习惯：用电子表格记录每条提示词与对应输出的成败，沉淀属于自己的「咒语库」。',
    },
    {
      title: '05 · 声音设计（2-3 小时）',
      description:
        'ElevenLabs 配人物对白与旁白，Suno 出主题音乐，免费音效库（Pixabay / Freesound）补环境音。声音是 AI 视频「真实感」的最大杠杆 —— 比画面还重要。',
    },
    {
      title: '06 · 剪辑 / 调色 / 字幕（3-6 小时）',
      description:
        '在 DaVinci Resolve 里串接全部素材。用统一的 LUT 把不同模型生成的镜头拉到同一色调。Whisper 自动出字幕，人工校对。导出 1080p / 4K 母版与社交媒体竖屏版。',
    },
    {
      title: '07 · 发布与迭代（持续）',
      description:
        '发到 YouTube / B 站 / X / Vimeo，收集真实反馈。把「弹幕在哪一秒密集 / 在哪一秒退出」当作下一部片子的导演笔记。',
    },
  ],

  cases: [
    {
      title: 'Aether — 太空科幻短片',
      description:
        '一位独立创作者用 Sora + Runway，3 周完成 4 分钟太空科幻短片。Midjourney 出了 200 张概念图作为提示词锚点。',
      output:
        'YouTube 上线一周播放破百万，被 OpenAI 官方账号转推。证明「单人科幻短片」的可行性。',
    },
    {
      title: '《家·影像志》— 城市纪录短片',
      description:
        '使用 Veo 与 Kling 生成不同年代的城市画面，旁白由 ElevenLabs 用奶奶真实音色克隆完成。',
      output:
        'B 站 8 万收藏，评论区高赞「比纪录片更纪录」。展示 AI 在情感纪实题材的潜力。',
    },
    {
      title: '某品牌 30 秒广告',
      description:
        '客户预算 8000 元，全流程使用 Runway + Suno，3 天交付。',
      output:
        '相较传统外包报价（约 15 万）节省 95% 成本，客户后续追加 2 部续作合同。',
    },
  ],
};
