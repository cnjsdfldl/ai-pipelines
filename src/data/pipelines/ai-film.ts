import type { Pipeline } from './_types';

const img = (file: string) => `./images/ai-film/${file}`;

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
        '本流水线核心方法整理自 B 站 UP 主「YZ_金鱼」的《目前最详细的 AI 影视剧创作专业流程讲解》（BV1YURLBTEwi）。视频通过实操《赛博精神病诊疗专家》一剧拆解了完整工业流程。',
    },

    { type: 'heading', level: 2, text: '中国影视剧工业流程一览：AI 创作的方法论锚点' },
    {
      type: 'paragraph',
      text:
        '把传统影视的 8 个阶段当作 AI 创作的骨架对照 —— 角色都不再需要参与了，但流程思维必须保留。',
    },
    {
      type: 'image',
      src: img('frame_010.jpg'),
      caption: '中国影视剧工业流程一览：01 立项 / 02 剧本 / 03 筹备 / 04 拍摄 / 05 后期 / 06 审查 / 07 宣发 / 08 上映',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '项目策划与立项 → 选题、IP / 题材定位、立意确定',
        '剧本开发与融资 → 写剧本、人物小传、场景概念',
        '前期筹备 → 服化道资产、演员资产、场景资产、声音资产',
        '拍摄制作 → 分镜静帧 → 视频生成（核心环节）',
        '后期制作 → 剪映剪辑、配乐、字幕、调色',
        '审查送审与交付 → 自审、修正',
        '宣传营销与发行 → 平台分发',
        '播出上映与数据复盘 → 数据观察、迭代',
      ],
    },

    { type: 'heading', level: 2, text: '步骤一：剧本与分镜（文本工业级）' },
    { type: 'heading', level: 3, text: '1.1 短剧剧本格式规范' },
    {
      type: 'paragraph',
      text:
        '剧本不是散文，要严格按短剧的格式来：场次标注、时间提示（日/夜，内/外）、人物标识、内容描述（动作「△」、台词「：」、画外音「OS」）。',
    },
    {
      type: 'image',
      src: img('frame_015.jpg'),
      caption: '短剧剧本格式规范示例：场次 / 时间 / 人物 / 动作 / 台词 / 旁白都有规范',
    },
    {
      type: 'quote',
      text: '好的 AI（豆包 / DeepSeek 等）写剧本时会主动给你留悬念钩子，符合短剧节奏。',
      cite: 'YZ_金鱼',
    },

    { type: 'heading', level: 3, text: '1.2 输出分镜脚本（关键产物）' },
    {
      type: 'paragraph',
      text:
        '剧本写完，把它拆成具体多少个分镜头。每个分镜包含 7 个字段：镜号 / 场景 / 人物 / 素材 / 台词 / 运镜 / 音效 / 时长。',
    },
    {
      type: 'image',
      src: img('frame_025.jpg'),
      caption: '16 个分镜头的结构化文本输出',
    },

    { type: 'heading', level: 3, text: '1.3 分镜可视化（手绘风格表格）' },
    {
      type: 'paragraph',
      text:
        '把文本分镜进一步可视化成分镜表，每行一个镜头：镜号 / 分镜图 / 景别 / 运镜 / 情绪·动作 / 台词 / 音效 / 时长。这一步在传统流程里就是分镜师的工作，主要检查节奏对不对、信息量够不够、情绪线连不连贯。',
    },
    {
      type: 'image',
      src: img('frame_030.jpg'),
      caption: '可视化分镜表：每行一个镜头，含手绘分镜图与全套元数据',
    },

    { type: 'heading', level: 2, text: '步骤二：前期筹备（资产搭建，最关键的环节）' },
    {
      type: 'callout',
      tone: 'warn',
      text:
        'AI 影视成败的分水岭就在这一步。资产搭得好，后面生视频水到渠成；资产乱，后面拼命抽卡也救不回来。',
    },
    {
      type: 'paragraph',
      text: '资产分成 6 大类，每一类在画布上有独立节点：演员、角色、服装、道具、场景、声音。',
    },

    { type: 'heading', level: 3, text: '2.1 演员资产：三视图建立' },
    {
      type: 'paragraph',
      text:
        '每个角色先做演员三视图 —— 正脸 + 侧脸 + 背面，外加全身三视图。这是保证后续所有镜头里人物长相一致的根。Nano Banana 这类擅长角色一致性的模型在此发挥主力作用。',
    },
    {
      type: 'image',
      src: img('frame_040.jpg'),
      caption: '演员三视图（女医生角色）：正/侧/背 + 全身',
    },

    { type: 'heading', level: 3, text: '2.2 角色资产：在演员之上派生服化道变体' },
    {
      type: 'paragraph',
      text:
        '同一个演员，要演出不同的造型 / 状态，就在演员资产的基础上派生：「一个演员演一身衣服叫一个角色资产，演十身衣服就是十个角色资产」。',
    },
    {
      type: 'list',
      items: [
        '妆容设定：例如面部和皮肤有少量灰尘',
        '发型设定：例如凌乱的黑色长发',
        '服饰设定：例如老旧且有一些破洞',
      ],
    },
    {
      type: 'image',
      src: img('frame_045.jpg'),
      caption: '同一演员的「落魄」造型派生 —— 妆容、发型、服饰分项叠加',
    },

    { type: 'heading', level: 3, text: '2.3 服装、道具、场景：分门别类管理' },
    {
      type: 'paragraph',
      text: '不要把资产堆在一起。RunningHub 在每类资产创建时提供多个图像模型可切换（全能图片 G2 / V2 / H Pro 等），选最适合的模型出最稳定的资产。',
    },
    {
      type: 'image',
      src: img('frame_070.jpg'),
      caption: '服装 / 道具 / 场景资产的分类管理',
    },
    {
      type: 'image',
      src: img('frame_050.jpg'),
      caption: '道具创建时可切换不同的图像模型',
    },

    { type: 'heading', level: 3, text: '2.4 场景资产进阶：720° 全景图' },
    {
      type: 'paragraph',
      text:
        '讲究的玩法是先生成 720° 全景图，再从任意机位截取参考。一次生成，多次复用，每个机位的构图都来自同一空间 —— 场景一致性直接拉满，后面分镜生成不会「穿帮」。',
    },
    {
      type: 'image',
      src: img('frame_060.jpg'),
      caption: '720° 全景图：可截取 4 大视角 / 12 大视角 / 自定义视角的图',
    },

    { type: 'heading', level: 3, text: '2.5 单场景多机位静帧' },
    {
      type: 'paragraph',
      text: '一个场景内，预先生成多个机位的静帧（不动的「剧照」），一个诊室至少做 2-3 个机位的静帧备用。',
    },
    {
      type: 'image',
      src: img('frame_065.jpg'),
      caption: '同一办公室场景的三个机位静帧',
    },

    { type: 'heading', level: 3, text: '2.6 声音资产' },
    {
      type: 'paragraph',
      text:
        '每个角色配一段声音参考（音频文件），后续视频生成时作为音色参考输入 —— AI 视频生成模型支持音色参考时，事先准备好的人声资产能让每个角色「音色一致」，不会一句一变。',
    },
    {
      type: 'image',
      src: img('frame_055.jpg'),
      caption: '画布上的声音资产节点',
    },

    { type: 'heading', level: 2, text: '步骤三：分镜创建（资产组合成静帧）' },
    {
      type: 'paragraph',
      text:
        '把第二步的所有资产（角色 + 服装 + 场景 + 道具）按分镜表的要求组合成每一个具体分镜头的静帧画面。这一步仍然要抽卡 —— 抽到满意的就保留，作为视频生成的输入。',
    },
    {
      type: 'image',
      src: img('frame_080.jpg'),
      caption: '分镜创建：左边是组合出的静帧，右边是按图生成的视频成片',
    },

    { type: 'heading', level: 2, text: '步骤四：视频生成（按分镜逐镜）' },
    {
      type: 'paragraph',
      text:
        '把分镜静帧 + 角色音色 + 场景音效，喂给视频生成模型（视频里使用 Seedance 2.0）。每个镜头节点的关键参数都要写死：',
    },
    {
      type: 'code',
      lang: 'yaml',
      text: `场次：1-1
地点：中国某三甲医院精神科门诊室
时间：日/内
人物：图片1 女医生（音色参考 音频1）、图片2 男患者（音色参考 音频2）
镜号：13
景别：中景 / 女医生
镜头：固定镜头
情绪/动作：女医生抬起下颚，理所当然地推开患者，语气肯定
台词：女医生：当然是送到精神病院啦！这种病几乎无药可治。
音效：无
时长：6s
模型：Seedance 2.0 / 720p / 16:9`,
    },
    {
      type: 'image',
      src: img('frame_095.jpg'),
      caption: '视频生成节点的完整参数面板',
    },
    {
      type: 'list',
      items: [
        '「全部参考」区放图片资产和音频资产，缺一不可',
        '景别、运镜要写死（固定镜头、推/拉/摇/移），不写 AI 就乱来',
        '情绪/动作描述要具体到肢体动作和神情',
        '台词单独标注，AI 会按音色资产合成对应人声',
        '时长按分镜表严格控制（一般 2-6 秒）',
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      text: '按 16 个分镜挨个生成，每个镜头通常要抽 2-5 次卡才达标。预算上要算这笔账（视频中每次视频生成约 12-18 RH 币）。',
    },

    { type: 'heading', level: 2, text: '步骤五：剪辑合成（剪映）' },
    {
      type: 'paragraph',
      text: '所有镜头生成完，进剪映做后期。常规剪辑活儿：精修剪辑点、调速、调色、加 BGM、加字幕、过场。',
    },
    {
      type: 'image',
      src: img('frame_110.jpg'),
      caption: '剪映剪辑界面：V1 视频轨按分镜顺序拼接 + A1-A5 多音轨分管（人声 / 环境音 / BGM / 音效 / 转场）',
    },

    { type: 'heading', level: 2, text: '关键经验沉淀' },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '工业流程思维 > 工具炫技。不要被新模型牵着走 —— 先确认你在哪个阶段（剧本？分镜？资产？生成？），再选对应工具。模型每月换，流程稳定。',
    },
    {
      type: 'callout',
      tone: 'tip',
      text:
        '资产先行。拍片前所有演员、服化道、场景、声音都准备好。这才是 AI 影视和「拼一段段 demo」的本质区别。',
    },
    {
      type: 'callout',
      tone: 'warn',
      text:
        '一致性靠资产，不靠运气：人物长相一致 → 三视图资产；声音一致 → 声音资产；场景一致 → 全景图资产；服装一致 → 服化道资产。没有资产的「一致性」是抽卡赌博。',
    },
    {
      type: 'paragraph',
      text:
        '分镜文本要工业级：镜号 / 景别 / 运镜 / 情绪 / 台词 / 音效 / 时长 —— 七项缺一不可。AI 输入越结构化，输出越稳。',
    },
    {
      type: 'paragraph',
      text:
        '画布工作流（ComfyUI 模式）让所有资产可见、可复用、可追溯，比「开个聊天窗口让 AI 一次生成一镜」的传统模式高效一个数量级。',
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
      title: '01 · 剧本开发',
      description:
        '用 LLM 写出严格短剧格式的剧本：场次 / 时间 / 人物 / 动作（△） / 台词 / 旁白（OS）。让 AI 主动给你留悬念钩子。',
    },
    {
      title: '02 · 输出分镜脚本',
      description:
        '把剧本拆成 N 个分镜（视频案例是 16 个）。每个分镜含 7 项：镜号 / 场景 / 人物 / 素材 / 台词 / 运镜 / 音效 / 时长。',
    },
    {
      title: '03 · 分镜可视化',
      description:
        '把文本分镜进一步可视化成分镜表（每行一个镜头，含手绘分镜图）。在这一步检查节奏、信息量、情绪线。',
    },
    {
      title: '04 · 演员资产（三视图）',
      description:
        '每个角色做正脸 / 侧脸 / 背面 + 全身三视图。用 Nano Banana 锁定面部一致性，是后续所有镜头的根。',
    },
    {
      title: '05 · 角色资产（服化道派生）',
      description:
        '在演员资产之上叠加妆容、发型、服饰的变体。一个演员演 10 套衣服 = 10 个角色资产。',
    },
    {
      title: '06 · 服装 / 道具 / 场景资产',
      description:
        '分门别类创建。场景资产建议先做 720° 全景图，再截取多机位视角，保证一个场景所有镜头的空间感统一。',
    },
    {
      title: '07 · 单场景多机位静帧',
      description:
        '一个场景预先生成 2-3 个机位的静帧（剧照），作为视频生成阶段的画面起点。',
    },
    {
      title: '08 · 声音资产',
      description:
        '每个角色准备一段音色参考音频。后续视频生成模型据此让角色「音色一致」，不会一句一变。',
    },
    {
      title: '09 · 分镜创建（资产组合静帧）',
      description:
        '把角色 + 服装 + 场景 + 道具按分镜表组合成每个分镜头的具体静帧。抽卡到满意的版本保留。',
    },
    {
      title: '10 · 视频生成（按分镜逐镜）',
      description:
        '静帧 + 音色 + 音效喂给视频模型（如 Seedance 2.0）。景别、运镜、情绪写死。每镜抽 2-5 次卡。',
    },
    {
      title: '11 · 剪辑合成（剪映）',
      description:
        '按分镜顺序拼接视频轨；人声 / 环境音 / BGM / 音效 / 转场分轨；加字幕、调色、过场。',
    },
    {
      title: '12 · 多平台交付',
      description: '按目标平台导出 9:16（短视频竖屏）或 16:9（横屏）多版本。',
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
        '角色一致性：流水线版接近商业短剧水平；对照组每镜面孔漂移。场景一致性：流水线版穿帮率 < 5%；对照组超 40%。声音一致性：流水线版本无音色跳变；对照组每镜音色不同。',
    },
  ],
};
