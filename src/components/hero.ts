import { h } from '../utils/dom';
import { attachParallax } from '../utils/motion';
import { renderCoverArt } from './cover-art';

export const renderHero = (): HTMLElement => {
  const visualStage = h('div', { class: 'hero__visual-stage' });

  const cardBack = h(
    'div',
    { class: 'hero__visual-card hero__visual-card--back' },
    renderCoverArt({ variant: 'generic', accent: '#bf5af2' })
  );
  const cardMain = h(
    'div',
    { class: 'hero__visual-card hero__visual-card--main' },
    renderCoverArt({ variant: 'ppt', accent: '#0071e3' })
  );
  const cardFront = h(
    'div',
    { class: 'hero__visual-card hero__visual-card--front' },
    renderCoverArt({ variant: 'film', accent: '#ff375f' })
  );

  visualStage.append(cardBack, cardMain, cardFront);

  const hero = h(
    'section',
    { class: 'hero' },
    h(
      'div',
      { class: 'container container--wide hero__inner' },
      h(
        'div',
        { class: 'hero__copy fade-up' },
        h(
          'span',
          { class: 'hero__eyebrow' },
          h('span', { class: 'hero__eyebrow-dot' }),
          '2026 · AI 工作流精选'
        ),
        h(
          'h1',
          { class: 'hero__title' },
          'AI 改变工作的方式 ',
          h('span', { class: 'hero__title-accent' }, '不止工具'),
          ' 更是方法。'
        ),
        h(
          'p',
          { class: 'hero__lede' },
          '一个介绍「如何利用 AI 完成各种工作」的精选流水线集合。每一条都包含工具、模型、步骤和真实案例 —— 让你少走半年弯路。'
        ),
        h(
          'div',
          { class: 'hero__actions' },
          h(
            'a',
            { href: '#/pipelines', class: 'btn btn--primary' },
            '浏览所有流水线',
            h('span', { class: 'btn__arrow' }, '→')
          )
        )
      ),
      h('div', { class: 'hero__visual fade-up' }, visualStage)
    )
  );

  requestAnimationFrame(() => attachParallax(visualStage, 0.08, 40));
  return hero;
};
