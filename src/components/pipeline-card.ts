import type { Pipeline } from '../data/pipelines/_types';
import { h } from '../utils/dom';
import { renderCoverArt } from './cover-art';

const variantFor = (id: string): 'ppt' | 'film' | 'generic' =>
  id.includes('ppt') ? 'ppt' : id.includes('film') ? 'film' : 'generic';

const accentFor = (id: string): string =>
  id.includes('ppt') ? '#0071e3' : id.includes('film') ? '#ff375f' : '#bf5af2';

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
