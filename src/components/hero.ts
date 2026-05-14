import { h } from '../utils/dom';

const heroImage = `${import.meta.env.BASE_URL}images/hero.png`;

export const renderHero = (): HTMLElement => {
  const visualStage = h('div', { class: 'hero__visual-stage' });
  const heroImg = h('img', {
    src: heroImage,
    alt: 'AI 工作流：智能助手与协作者构成的精选生态',
    class: 'hero__visual-image',
    loading: 'eager',
    decoding: 'async',
  });
  visualStage.appendChild(heroImg);

  const hero = h(
    'section',
    { class: 'hero' },
    h('div', { class: 'hero__visual fade-up' }, visualStage),
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
      )
    )
  );

  return hero;
};
