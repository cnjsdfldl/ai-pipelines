import { findPipeline } from '../data/pipelines/_registry';
import type { Pipeline } from '../data/pipelines/_types';
import { renderRichText } from '../render/rich-text';
import { h, clear, setTitle } from '../utils/dom';
import { observeFadeIn } from '../utils/motion';

export const renderPipelineDetail = (root: HTMLElement, id: string): void => {
  const p = findPipeline(id);
  if (!p) {
    renderNotFound(root);
    return;
  }

  setTitle(p.title);
  clear(root);

  const main = h('main', { class: 'main' });
  main.appendChild(renderDetailHero(p));
  main.appendChild(renderDetailBody(p));

  root.appendChild(main);
  observeFadeIn(main);
};

const renderDetailHero = (p: Pipeline): HTMLElement => {
  return h(
    'section',
    { class: 'detail-hero' },
    h(
      'div',
      { class: 'container container--wide' },
      h('a', { href: '#/pipelines', class: 'detail-hero__back' }, '← 所有流水线'),
      h(
        'div',
        { class: 'tag-row', style: 'margin-bottom: var(--space-4);' },
        ...p.tags.map((t) => h('span', { class: 'tag' }, t))
      ),
      h('h1', { class: 'detail-hero__title fade-up' }, p.title),
      h('p', { class: 'detail-hero__summary fade-up' }, p.summary),
      h(
        'div',
        { class: 'detail-hero__meta fade-up' },
        metaItem('难度', p.difficulty),
        metaItem('耗时', p.duration),
        metaItem('更新', p.updatedAt)
      )
    )
  );
};

const metaItem = (label: string, value: string): HTMLElement =>
  h(
    'div',
    { class: 'detail-hero__meta-item' },
    h('span', { class: 'detail-hero__meta-label' }, label),
    h('span', {}, value)
  );

const renderStepItem = (
  s: { title: string; description: string; image?: string; imageCaption?: string },
  i: number
): HTMLElement => {
  const body = h(
    'div',
    { class: 'step-item__body' },
    h('h3', { class: 'step-item__title' }, s.title),
    h('p', { class: 'step-item__desc' }, s.description)
  );

  if (!s.image) {
    return h(
      'div',
      { class: 'step-item' },
      h('div', { class: 'step-item__num' }, String(i + 1).padStart(2, '0')),
      body
    );
  }

  const imgEl = h('img', {
    src: s.image,
    alt: s.imageCaption ?? s.title,
    loading: 'lazy',
    class: 'step-item__img',
  });
  const figure = h(
    'figure',
    { class: 'step-item__figure' },
    imgEl,
    s.imageCaption
      ? h('figcaption', { class: 'step-item__caption' }, s.imageCaption)
      : null
  );

  return h(
    'div',
    { class: 'step-item step-item--with-image' },
    h('div', { class: 'step-item__num' }, String(i + 1).padStart(2, '0')),
    body,
    figure
  );
};

const renderDetailBody = (p: Pipeline): HTMLElement => {
  const body = h('article', { class: 'detail-body' });

  // 如何开始
  body.appendChild(
    h(
      'section',
      { class: 'detail-section fade-up' },
      h('h2', { class: 'detail-section__title' }, '如何开始'),
      renderRichText(p.intro)
    )
  );

  // 推荐工具
  body.appendChild(
    h(
      'section',
      { class: 'detail-section fade-up' },
      h('h2', { class: 'detail-section__title' }, '推荐工具'),
      h(
        'div',
        { class: 'tool-grid' },
        ...p.tools.map((t) =>
          h(
            'div',
            { class: 'tool-item' },
            h(
              'div',
              { class: 'tool-item__name' },
              t.name,
              t.link
                ? h(
                    'a',
                    {
                      href: t.link,
                      class: 'tool-item__link',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    '↗'
                  )
                : null
            ),
            h('p', { class: 'tool-item__purpose' }, t.purpose)
          )
        )
      )
    )
  );

  // 推荐模型
  body.appendChild(
    h(
      'section',
      { class: 'detail-section fade-up' },
      h('h2', { class: 'detail-section__title' }, '推荐模型'),
      h(
        'div',
        { class: 'tool-grid' },
        ...p.models.map((m) =>
          h(
            'div',
            { class: 'tool-item' },
            h('div', { class: 'tool-item__name' }, m.name),
            h('p', { class: 'tool-item__purpose' }, m.use)
          )
        )
      )
    )
  );

  // 步骤
  body.appendChild(
    h(
      'section',
      { class: 'detail-section fade-up' },
      h('h2', { class: 'detail-section__title' }, '步骤'),
      h(
        'div',
        { class: 'step-list' },
        ...p.steps.map((s, i) => renderStepItem(s, i))
      )
    )
  );

  // 案例
  body.appendChild(
    h(
      'section',
      { class: 'detail-section fade-up' },
      h('h2', { class: 'detail-section__title' }, '经典案例 · 真实产出'),
      h(
        'div',
        { class: 'case-list' },
        ...p.cases.map((c) =>
          h(
            'div',
            { class: 'case-item' },
            h('h3', { class: 'case-item__title' }, c.title),
            h('p', { class: 'case-item__desc' }, c.description),
            c.output ? h('div', { class: 'case-item__output' }, c.output) : null
          )
        )
      )
    )
  );

  return body;
};

export const renderNotFound = (root: HTMLElement): void => {
  setTitle('页面未找到');
  clear(root);
  const main = h(
    'main',
    { class: 'main' },
    h(
      'section',
      { class: 'notfound' },
      h(
        'div',
        { class: 'container' },
        h('h1', { class: 'notfound__title' }, '404'),
        h('p', { class: 'notfound__lede' }, '这里没有你要找的流水线。它可能还没被发明出来。'),
        h(
          'a',
          { href: '#/', class: 'btn btn--primary' },
          '回到首页',
          h('span', { class: 'btn__arrow' }, '→')
        )
      )
    )
  );
  root.appendChild(main);
};
