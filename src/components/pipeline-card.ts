import type { Pipeline } from '../data/pipelines/_types';
import { h } from '../utils/dom';
import { renderCoverArt, type CoverVariant } from './cover-art';

const variantFor = (id: string): CoverVariant => {
  if (id.includes('ppt')) return 'ppt';
  if (id.includes('film')) return 'film';
  if (id.includes('coding')) return 'code';
  if (id.includes('avatar')) return 'avatar';
  if (id.includes('podcast')) return 'podcast';
  return 'generic';
};

const accentFor = (id: string): string => {
  if (id.includes('ppt')) return '#0071e3';
  if (id.includes('film')) return '#ff375f';
  if (id.includes('coding')) return '#30d158';
  if (id.includes('avatar')) return '#bf5af2';
  if (id.includes('podcast')) return '#ff9f0a';
  return '#0071e3';
};

export const renderPipelineCard = (p: Pipeline): HTMLElement => {
  return h(
    'a',
    {
      href: `#/pipelines/${p.id}`,
      class: 'card pipeline-card fade-up',
      'aria-label': `查看 ${p.title}`,
    },
    h(
      'div',
      { class: 'pipeline-card__cover' },
      renderCoverArt({ variant: variantFor(p.id), accent: accentFor(p.id) })
    ),
    h(
      'div',
      { class: 'pipeline-card__body' },
      h(
        'div',
        { class: 'tag-row' },
        ...p.tags.slice(0, 3).map((t) => h('span', { class: 'tag' }, t))
      ),
      h('h3', { class: 'pipeline-card__title' }, p.title),
      h('p', { class: 'pipeline-card__summary' }, p.summary),
      h(
        'div',
        { class: 'pipeline-card__meta' },
        h('span', { class: 'pipeline-card__meta-item' }, `难度 · ${p.difficulty}`),
        h('span', { class: 'pipeline-card__meta-item' }, `耗时 · ${p.duration}`),
        h('span', { class: 'pipeline-card__meta-item' }, `更新 · ${p.updatedAt}`)
      )
    )
  );
};
