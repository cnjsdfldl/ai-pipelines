import type { Pipeline } from './_types';

const img = (file: string): string =>
  `${import.meta.env.BASE_URL}images/ai-film/${file}`;

export const pipeline: Pipeline = {
  id: 'ai-film',
  title: 'AI 影视剧制作流水线',
  summary:
    '把 AI 工具套进传统影视工业的流程框架里 —— 剧本、分镜、资产、生成、剪辑。资产搭得好，视频生成是水到渠成。',
  tags: ['视听内容', '影视', '工业流程', 'RunningHub', 'ComfyUI'],
  difficulty: '高级',
  duration: '数日 – 一周',
  updatedAt: '2026-05-14',

  intro: [
    { type: 'heading', level: 2, text: '核心思想：用工业流程框 AI，不用模型卷模型' },
    {
      type: 'paragraph',
      text:
        '把 AI 工具套进传统影视工业的流程框架里去用，而不是有什么模型就用什么模型胡乱拼。前期资产准备得越扎实，到了视频生成那一步反而越省力 —— 所谓「然后生成视频就很简单了」。',
    },
    {
      type: 'paragraph',
      text:
        '整个项目在 RunningHub 的画布工作流（ComfyUI 模式）里完成，所有资产、节点、素材连成一张大网：从左到右依次是剧本、分镜脚本、演员资产、角色资产、服化道资产、道具资产、场景资产，最终汇聚到分镜创建和视频生成。',
    },
    {
      type: 'image',
      src: img('frame_120.jpg'),
      caption: '整个项目的画布全景：从剧本一直串到视频生成的资产网',
    },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '本流水线核心方法整理自 B 站 UP 主「YZ_金鱼」的《目前最详细的 AI 影视剧创作专业流程讲解》（BV1YURLBTEwi），实操案例为《赛博精神病诊疗专家》。下方每个步骤都附有视频原帧作为参考。',
    },

    { type: 'heading', level: 3, text: '传统影视的 8 个阶段：方法论锚点' },
    {
      type: 'paragraph',
      text:
        '把传统影视工业的 8 个阶段当作 AI 创作的骨架 —— 演员、化妆、置景的位置由「资产节点」替代，但流程思维必须保留。',
    },
    {
      type: 'image',
      src: img('frame_010.jpg'),
      caption: '中国影视剧工业流程一览：01 立项 / 02 剧本 / 03 筹备 / 04 拍摄 / 05 后期 / 06 审查 / 07 宣发 / 08 上映',
    },

    { type: 'heading', level: 3, text: '关键经验沉淀' },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '工业流程思维 > 工具炫技。模型每月换，流程稳定 —— 先确认你在哪个阶段（剧本？分镜？资产？生成？），再选对应工具。',
    },
    {
      type: 'callout',
      tone: 'warn',
      text:
        '一致性靠资产，不靠运气：人物长相一致 → 三视图资产；声音一致 → 声音资产；场景一致 → 720° 全景图资产；服装一致 → 服化道资产。没有资产的「一致性」是抽卡赌博。',
    },
    {
      type: 'quote',
      text: '好的 AI 写剧本时会主动给你留悬念钩子；分镜文本要工业级：镜号 / 景别 / 运镜 / 情绪 / 台词 / 音效 / 时长七项缺一不可。AI 输入越结构化，输出越稳。',
      cite: 'YZ_金鱼',
    },
  ],

  tools: [
    {
      name: 'RunningHub（画布工作流）',
      purpose: '主工作台。ComfyUI 模式承载所有资产节点与流程编排，是这套流水线的核心容器',
      link: 'https://www.runninghub.cn',
    },
    {
      name: 'Nano Banana',
      purpose: '角色一致性图像生成。三视图、角色派生造型用它效果最稳',
      link: 'https://aistudio.google.com',
    },
    {
      name: 'Seedance 2.0',
      purpose: '本案选用的视频生成模型，支持 720p / 16:9 与音色参考输入',
    },
    {
      name: 'RunningHub 全能图片 G2 / V2 / H Pro',
      purpose: '道具 / 服装 / 场景的图像生成，可在节点上随时切换底层模型',
    },
    {
      name: '豆包 / DeepSeek / Claude',
      purpose: '剧本与分镜文本生成。豆包擅长短剧钩子，Claude 擅长结构化长剧本',
      link: 'https://www.doubao.com',
    },
    {
      name: 'MiniMax / Reecho（声音克隆）',
      purpose: '为每个角色生成稳定的音色参考音频文件，喂给视频模型保持一致',
      link: 'https://www.reecho.ai',
    },
    {
      name: '剪映',
      purpose: '后期剪辑：多视频轨拼接、多音轨混音、字幕、BGM、调色',
      link: 'https://www.capcut.cn',
    },
  ],

  models: [
    { name: 'Nano Banana', use: '演员三视图与角色派生 —— 一致性建立的基石' },
    { name: 'Seedance 2.0', use: '主镜头视频生成（720p / 16:9，6 秒内单镜）' },
    { name: 'RunningHub 全能图片系列（G2 / V2 / H Pro / H V1 / H G1.5）', use: '道具、服装、场景的资产图像，可按需切换' },
    { name: 'Claude Opus 4.7', use: '长剧本结构与人物弧光设计' },
    { name: '豆包 / DeepSeek', use: '短剧节奏与悬念钩子设计' },
  ],

  steps: [
    {
      title: '01 · 剧本开发（短剧工业格式）',
      description:
        '用 LLM 写出严格短剧格式的剧本：场次 / 时间（日·夜·内·外）/ 人物 / 动作（△）/ 台词 / 旁白（OS）。让 AI 主动设计悬念钩子。',
      image: img('frame_015.jpg'),
      imageCaption: '短剧剧本格式：场次 · 时间 · 人物 · 动作 · 台词 · 旁白都有规范',
    },
    {
      title: '02 · 输出分镜脚本（7 字段结构化）',
      description:
        '把剧本拆成 N 个分镜（视频案例 16 个）。每个分镜含 7 项：镜号 / 场景 / 人物 / 素材 / 台词 / 运镜 / 音效 / 时长。',
      image: img('frame_025.jpg'),
      imageCaption: '16 个分镜的结构化文本输出',
    },
    {
      title: '03 · 分镜可视化（手绘风格表格）',
      description:
        '把文本分镜进一步可视化成分镜表（每行一镜，含手绘分镜图）。在这一步检查节奏、信息量、情绪线 —— 这是传统流程里分镜师的工作。',
      image: img('frame_030.jpg'),
      imageCaption: '可视化分镜表：镜号 · 分镜图 · 景别 · 运镜 · 情绪 · 台词 · 音效 · 时长',
    },
    {
      title: '04 · 演员资产（三视图建立）',
      description:
        '每个角色做正脸 / 侧脸 / 背面 + 全身三视图。用 Nano Banana 锁定面部一致性 —— 后续所有镜头的「根」。',
      image: img('frame_040.jpg'),
      imageCaption: '演员三视图（女医生角色）：正 / 侧 / 背 + 全身',
    },
    {
      title: '05 · 角色资产（服化道派生）',
      description:
        '在演员之上叠加妆容、发型、服饰的变体。「一个演员演一身衣服 = 一个角色资产；演十身衣服 = 十个角色资产」。',
      image: img('frame_045.jpg'),
      imageCaption: '同一演员的「落魄」造型派生：妆容 · 发型 · 服饰分项叠加',
    },
    {
      title: '06 · 服装 / 道具 / 场景：分类管理',
      description:
        '不要堆在一起。RunningHub 每类资产创建时提供多个图像模型（全能图片 G2 / V2 / H Pro 等）可切换，选最适合的模型出最稳定的资产。',
      image: img('frame_070.jpg'),
      imageCaption: '服装 / 道具 / 场景资产的分类管理',
    },
    {
      title: '07 · 场景资产进阶：720° 全景图',
      description:
        '讲究的玩法是先生成 720° 全景图，再从任意机位截取参考。一次生成多次复用，每个机位的构图都来自同一空间 —— 后面分镜生成不会「穿帮」。',
      image: img('frame_060.jpg'),
      imageCaption: '720° 全景图：可截取 4 大视角 / 12 大视角 / 自定义视角',
    },
    {
      title: '08 · 单场景多机位静帧',
      description:
        '一个场景内预先生成 2-3 个机位的静帧（不动的「剧照」），作为视频生成阶段的画面起点。',
      image: img('frame_065.jpg'),
      imageCaption: '同一办公室场景的三个机位静帧',
    },
    {
      title: '09 · 声音资产',
      description:
        '每个角色配一段音色参考音频文件。视频生成模型据此让角色「音色一致」，不会一句一变。',
      image: img('frame_055.jpg'),
      imageCaption: '画布上的声音资产节点',
    },
    {
      title: '10 · 分镜创建（资产组合成静帧）',
      description:
        '把角色 + 服装 + 场景 + 道具按分镜表组合成每个分镜头的具体静帧。这一步仍需抽卡 —— 抽到满意的版本作为视频生成输入。',
      image: img('frame_080.jpg'),
      imageCaption: '分镜创建：左静帧 · 右视频成片',
    },
    {
      title: '11 · 视频生成（按分镜逐镜）',
      description:
        '静帧 + 音色 + 音效喂给视频模型（Seedance 2.0）。景别、运镜、情绪写死。台词单独标注。每镜抽 2-5 次卡，约 12-18 RH 币 / 次。',
      image: img('frame_095.jpg'),
      imageCaption: '视频生成节点的完整参数面板',
    },
    {
      title: '12 · 剪辑合成（剪映）',
      description:
        '按分镜顺序拼接视频轨；人声 / 环境音 / BGM / 音效 / 转场分轨；加字幕、调色、过场。',
      image: img('frame_110.jpg'),
      imageCaption: '剪映：V1 视频轨 + A1-A5 多音轨分管',
    },
  ],

  cases: [
    {
      title: '《赛博精神病诊疗专家》— 完整短剧案例',
      description:
        '本流水线方法论的源案例，由 UP 主「YZ_金鱼」演示。16 个分镜、双主角（女医生 / 男患者）、单一主场景（诊室 + 走廊），完整跑通从剧本到剪辑的全流程。',
      output:
        '验证了「资产先行 → 抽卡静帧 → 逐镜生成」的工业化路径，是当前中文 AI 影视圈最具方法论价值的实操样本之一。',
    },
    {
      title: 'B 站作者实践沉淀',
      description:
        '基于此流水线，UP 主在多个短剧项目中复用同一画布工程：换剧本但保留资产节点结构，资产复用率超过 60%。',
      output:
        '后续项目从「想法到成片」平均周期压缩到 3-5 天 / 集；单集成本（API + 平台费）控制在 200-400 元。',
    },
    {
      title: '工业流程 vs. 拼接 demo 的对比',
      description:
        '相同剧本，使用本流水线（资产先行）生成的成片与直接用 Sora / Veo「一句话一镜」拼接的对照组对比：',
      output:
        '角色一致性：流水线版接近商业短剧水平；对照组每镜面孔漂移。场景一致性：流水线版穿帮率 < 5%；对照组超 40%。声音一致性：流水线版无音色跳变；对照组每镜音色不同。',
    },
  ],
};
