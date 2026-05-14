export interface OutputShowcase {
  id: string;
  title: string;
  tagline: string;
  eyebrow: string;
  pipelineId: string;
  accent: string;
  glyph: string;
}

export const outputs: OutputShowcase[] = [
  {
    id: 'ppt',
    title: 'PPT 制作',
    eyebrow: '产出物 · 演示文稿',
    tagline: '从一行主题到一份完整可演示的幻灯片，AI 主导大纲、视觉、叙事节奏。',
    pipelineId: 'ppt-creation',
    accent: '#0071e3',
    glyph: 'PPT',
  },
  {
    id: 'ai-film',
    title: 'AI 电影',
    eyebrow: '产出物 · 视听内容',
    tagline: '剧本、分镜、画面、剪辑、配音、配乐 —— 一个人完成一部短片的全链路。',
    pipelineId: 'ai-film',
    accent: '#ff375f',
    glyph: 'FILM',
  },
  {
    id: 'coding',
    title: 'AI 编程（Vibe Coding）',
    eyebrow: '产出物 · 可上线代码',
    tagline: 'Cursor + Claude Code + 规范驱动开发（SDD），从需求到部署的全栈协作。',
    pipelineId: 'ai-coding',
    accent: '#30d158',
    glyph: 'CODE',
  },
  {
    id: 'avatar',
    title: 'AI 数字人口播',
    eyebrow: '产出物 · 视频',
    tagline: '15 秒建立数字分身，HeyGen / Synthesia 把脚本变成可商用的口播视频。',
    pipelineId: 'ai-avatar-video',
    accent: '#bf5af2',
    glyph: 'AVATAR',
  },
  {
    id: 'podcast',
    title: 'AI 播客',
    eyebrow: '产出物 · 音频',
    tagline: 'NotebookLM 把一堆 PDF 与笔记，5 分钟变成两个主持人的对话式深度播客。',
    pipelineId: 'ai-podcast',
    accent: '#ff9f0a',
    glyph: 'CAST',
  },
];
