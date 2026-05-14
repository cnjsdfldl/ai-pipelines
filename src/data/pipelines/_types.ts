export type Block =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'callout'; tone: 'info' | 'tip' | 'warn'; text: string }
  | { type: 'code'; lang?: string; text: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'quote'; text: string; cite?: string };

export interface ToolRef {
  name: string;
  purpose: string;
  link?: string;
}

export interface ModelRef {
  name: string;
  use: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface CaseItem {
  title: string;
  description: string;
  output?: string;
  image?: string;
}

export type Difficulty = '入门' | '进阶' | '高级';

export interface Pipeline {
  id: string;
  title: string;
  summary: string;
  cover?: string;
  tags: string[];
  difficulty: Difficulty;
  duration: string;
  intro: Block[];
  tools: ToolRef[];
  models: ModelRef[];
  steps: StepItem[];
  cases: CaseItem[];
  updatedAt: string;
}
