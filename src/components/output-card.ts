import type { OutputShowcase } from '../data/outputs';
import { h } from '../utils/dom';
import { renderCoverArt, type CoverVariant } from './cover-art';

const variantById = (id: string): CoverVariant => {
  if (id === 'ppt') return 'ppt';
  if (id === 'ai-film') return 'film';
  if (id === 'coding') return 'code';
  if (id === 'avatar') return 'avatar';
  if (id === 'podcast') return 'podcast';
  return 'generic';
};

export const renderOutputCard = (item: OutputShowcase): HTMLElement => {
  const variant = variantById(item.id);

  return h(
    'a',
    {
      href: `#/pipelines/${item.pipelineId}`,
      class: 'card output-card fade-up',
      'aria-label': `查看 ${item.title} 流水线`,
    },
    h('div', { class: 'output-card__cover' }, renderCoverArt({ variant, accent: item.accent })),
    h(
      'div',
      { class: 'output-card__body' },
      h('span', { class: 'output-card__eyebrow' }, item.eyebrow),
      h('h3', { class: 'output-card__title' }, item.title),
      h('p', { class: 'output-card__tagline' }, item.tagline),
      h(
        'span',
        { class: 'output-card__cta' },
        '查看流水线',
        h('span', { class: 'output-card__cta-arrow' }, '→')
      )
    )
  );
};
