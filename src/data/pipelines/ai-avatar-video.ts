import type { Pipeline } from './_types';

export const pipeline: Pipeline = {
  id: 'ai-avatar-video',
  title: 'AI 数字人口播视频流水线',
  summary:
    '15 秒录制建立数字分身，HeyGen / Synthesia 把脚本翻译为可商用的口播视频。培训、营销、多语言全球版的最快路径。',
  tags: ['数字人', '口播视频', 'HeyGen', 'Synthesia', '营销'],
  difficulty: '入门',
  duration: '半天 – 2 天 / 单条',
  updatedAt: '2026-05-14',

  intro: [
    { type: 'heading', level: 2, text: '为什么 AI 数字人值得做' },
    {
      type: 'paragraph',
      text:
        '数字人口播视频与 AI 电影最大的区别：电影追求叙事与画面的镜头语言，数字人则只解决一件事 —— 让一个「人」对着镜头把话说清楚。在企业培训、产品介绍、营销内容、多语言本地化这些场景里，这种「说话头」视频是最大需求，且 AI 数字人已经把成本压到「写一份脚本」的体量。',
    },
    {
      type: 'paragraph',
      text:
        '2026 年的代表性产品 HeyGen Avatar V 把建模门槛降到「打开摄像头，按提示录 15 秒」就能复刻你本人的外观、声音、神态，并保持后续每段视频的一致性。Synthesia 则在 B 端培训领域占主导，以 200+ 现成虚拟主播 + 严格的脸部一致性著称。',
    },
    {
      type: 'callout',
      tone: 'info',
      text:
        'HeyGen 更适合 C 端创作者与营销人（写实风，自定义分身）；Synthesia 更适合 B 端培训内容（合规、企业级、稳定）。预算 / 用途清晰，工具就不会选错。',
    },

    { type: 'heading', level: 2, text: '关键认知：脚本不是给人写的' },
    {
      type: 'paragraph',
      text:
        '为 AI 朗读写脚本，与为真人主播写台词，是两种工种。AI 主持人不会即兴改语速、不会在敏感词处自然停顿、不会按情绪重读关键词 —— 这些都要在脚本里显式标注或用工具控制。',
    },
    {
      type: 'list',
      items: [
        '一句话不超过 25 个字（避免 AI 在长句中漏气）',
        '用「，」「。」严格分段，AI 把它们作为停顿信号',
        '专有名词、英文术语、数字，全部检查发音 —— HeyGen / Synthesia 都支持自定义发音表',
        '情绪关键句用 SSML 标记或多 take 抽卡',
        '总长 2-3 分钟最佳；超过 5 分钟观众基本不看完',
      ],
    },
    {
      type: 'quote',
      text: '好的 AI 口播脚本，读出来「像写出来的」反而是错的。它应该像随口讲出来 —— 短句、口语、留白。',
      cite: 'HeyGen 官方 best practice（2026）',
    },

    { type: 'heading', level: 2, text: '完整时间线（HeyGen 官方推荐）' },
    {
      type: 'paragraph',
      text:
        'HeyGen 在 2026 年初公布的「专业内容生产周期表」给了一个参考节奏 —— 不是说一定要这么久，但能让你知道每个环节的「应当占多少」：',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '脚本规划：1 天',
        '脚本撰写：2-3 天',
        '审稿与修订：1 天',
        '数字分身生成：1 天（首次；之后复用）',
        '编辑增强（B-Roll、字幕、节奏）：2-3 天',
        'QA 与最终评审：1 天',
        '发布与数据观测：1 天',
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '熟练后，单条 2 分钟视频的「想法到发布」可压到 2-4 小时。但「能压缩」≠「应该压缩」—— 商业用途请留够审稿与 QA。',
    },

    { type: 'heading', level: 2, text: '关键经验' },
    {
      type: 'callout',
      tone: 'warn',
      text:
        '数字分身的「恐怖谷」陷阱：太像真人但表情有 1% 不对，观众会本能反感。如果你的分身效果不稳，宁可选稍微卡通化的风格，也别强行追求「以假乱真」。',
    },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '多语言版本是 AI 数字人最大杠杆。一份中文脚本 → HeyGen / Synthesia 一键生成英、日、西、法版本，分身嘴型自动对齐目标语言。一条视频可以等同 5 个市场的内容。',
    },
  ],

  tools: [
    {
      name: 'HeyGen Avatar V',
      purpose: '当下最强的写实数字分身。15 秒建模 + Video Agent 2.0 自动剧本到成片',
      link: 'https://www.heygen.com',
    },
    {
      name: 'Synthesia',
      purpose: '企业级培训内容首选。230+ 内置主播、140+ 语言、SOC 2 合规',
      link: 'https://www.synthesia.io',
    },
    {
      name: 'Colossyan / 创聚',
      purpose: '价格最友好的替代选择，中文场景可用，适合预算敏感的创作者',
      link: 'https://www.colossyan.com',
    },
    {
      name: 'ChatGPT / Claude',
      purpose: '脚本撰写与多 take 改写。把演讲稿转成「短句口语化」的 AI 友好版本',
      link: 'https://claude.ai',
    },
    {
      name: 'ElevenLabs',
      purpose: '独立的声音克隆。如果你希望分身用你自己更细腻的音色（HeyGen 自带音色不够时）',
      link: 'https://elevenlabs.io',
    },
    {
      name: '剪映 / Descript',
      purpose: '后期：B-Roll 叠加、字幕、品牌包装、片头片尾',
      link: 'https://www.capcut.cn',
    },
  ],

  models: [
    { name: 'HeyGen Avatar V', use: '主分身模型 —— 写实，支持电影感运镜与单镜多分身' },
    { name: 'Synthesia EXPRESS-2', use: '稳定型主播模型，适合长视频、合规场景' },
    { name: 'Seedance 2.0（HeyGen 集成）', use: '生成与分身配合的运镜与背景' },
    { name: 'ElevenLabs Multilingual v3', use: '自定义音色与多语言情感语调' },
    { name: 'Claude Opus 4.7', use: '脚本结构与口语化改写' },
  ],

  steps: [
    {
      title: '01 · 明确视频目的',
      description:
        '一句话说清「这个视频要让谁，在听完后做什么」。培训？转化？引流？不同目的对应不同时长、节奏、CTA 设计。',
    },
    {
      title: '02 · 数字分身建模（一次性）',
      description:
        'HeyGen：开摄像头录 15 秒；Synthesia：选预制或定制录制。完成后分身就是你的可复用资产，后续所有视频都用它。',
    },
    {
      title: '03 · 脚本撰写（AI 友好版）',
      description:
        '把要讲的内容给 Claude / ChatGPT，提示「请改写为 AI 主播朗读：每句 ≤25 字，口语化，含明显停顿与情绪标记」。改 2-3 轮。',
    },
    {
      title: '04 · 选择场景与配音参数',
      description:
        '虚拟场景（办公室？工作室？品牌定制背景？）；语速（默认 / +10% / -10%）；语言（中 / 英 / 日 / 西…）；情绪标签。',
    },
    {
      title: '05 · Video Agent 生成预览',
      description:
        '把脚本喂给 HeyGen Video Agent 2.0 / Synthesia。它先返回「创作蓝图」（每一句对应的镜头、动作、视觉），你审阅修改后再触发渲染。',
    },
    {
      title: '06 · B-Roll、字幕、品牌包装',
      description:
        '在剪映或 Descript 中：叠加产品截图 / 数据 / 图表作为副画面；加自动字幕（双语可选）；加品牌色 LUT 与片头片尾。',
    },
    {
      title: '07 · QA 检查清单',
      description:
        '过一遍：① 嘴型对得上吗 ② 专有名词发音对吗 ③ 字幕错别字？④ CTA 清晰吗 ⑤ 总长是否在目标平台最佳区间。',
    },
    {
      title: '08 · 一键多语言版本',
      description:
        'HeyGen / Synthesia 直接选目标语言，分身用你的音色 + 翻译稿生成对应版本。嘴型与表情会按新语言重对齐。',
    },
    {
      title: '09 · 多平台导出与发布',
      description:
        'YouTube（16:9 / 4K）、抖音 / 视频号（9:16 / 1080p）、播客 / Vimeo（专业母版）。每个平台的封面、标题、描述也可让 AI 一并生成。',
    },
  ],

  cases: [
    {
      title: '某 SaaS 企业月发 30 条产品功能讲解（HeyGen）',
      description:
        '团队 1 人，CEO 录一次分身后，所有产品新功能更新都由其数字分身在 HeyGen 中输出 1-2 分钟讲解视频。',
      output:
        '相较外包视频公司（3-5 万 / 月），节省成本 95%。视频更新频率从季度变周度，用户对新功能的认知速度显著提升。',
    },
    {
      title: '跨国电商品牌 5 语言营销内容（Synthesia）',
      description:
        '一份中文脚本，Synthesia 输出中 / 英 / 西 / 法 / 阿拉伯语版本，分身嘴型按目标语言重对齐。',
      output:
        '原本需要 5 名各语种主播 + 翻译团队的工作，一人在 1 天内完成。海外市场月度内容产出量翻 5 倍。',
    },
    {
      title: '在线教育公司 200 集课程视频',
      description:
        '将一个明星讲师的形象在 HeyGen 复刻，新课更新只需写脚本即可生成视频。讲师不再需要重新录制。',
      output:
        '课程更新周期从「拍摄档期」改为「写完脚本」，新内容上线速度提升 10 倍。讲师本人可以专注课程内容设计而非录制。',
    },
  ],
};
