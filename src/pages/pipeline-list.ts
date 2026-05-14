import { renderPipelineCard } from '../components/pipeline-card';
import { pipelines, allTags } from '../data/pipelines/_registry';
import { h, clear, setTitle } from '../utils/dom';
import { observeFadeIn } from '../utils/motion';

const ALL = '全部';

export const renderPipelineList = (root: HTMLElement): void => {
  setTitle('流水线');
  clear(root);

  const main = h('main', { class: 'main' });

  // Header
  main.appendChild(
    h(
      'section',
      { class: 'list-header' },
      h(
        'div',
        { class: 'container container--wide' },
        h('h1', { class: 'list-header__title fade-up' }, '所有流水线'),
        h(
          'p',
          { class: 'list-header__lede fade-up' },
          `${pipelines.length} 条经过实战验证的 AI 工作流，按更新时间倒序排列。`
        )
      )
    )
  );

  // Filters + grid container
  const gridEl = h('div', { class: 'pipeline-list-grid' });

  const renderGrid = (tag: string) => {
    clear(gridEl);
    const list = tag === ALL ? pipelines : pipelines.filter((p) => p.tags.includes(tag));
    if (list.length === 0) {
      gridEl.appendChild(
        h('p', { style: 'color:var(--color-muted); text-align:center; padding:var(--space-8) 0;' }, '该标签下还没有流水线。')
      );
    } else {
      for (const p of list) gridEl.appendChild(renderPipelineCard(p));
    }
    observeFadeIn(gridEl);
  };

  // Build filter pills
  const tags = [ALL, ...allTags()];
  const filtersEl = h('div', { class: 'list-filters' });
  tags.forEach((t, i) => {
    const pill = h(
      'button',
      {
        class: `filter-pill${i === 0 ? ' is-active' : ''}`,
        type: 'button',
        'data-tag': t,
      },
      t
    );
    pill.addEventListener('click', () => {
      filtersEl.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      renderGrid(t);
    });
    filtersEl.appendChild(pill);
  });

  main.appendChild(
    h(
      'section',
      { class: 'section', style: 'padding-block: var(--space-5);' },
      h('div', { class: 'container container--wide' }, filtersEl, gridEl)
    )
  );

  root.appendChild(main);
  renderGrid(ALL);
};
