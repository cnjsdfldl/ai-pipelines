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
];
