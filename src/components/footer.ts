import { h } from '../utils/dom';

export const renderFooter = (): HTMLElement => {
  const year = new Date().getFullYear();
  return h(
    'footer',
    { class: 'footer', role: 'contentinfo' },
    h(
      'div',
      { class: 'container container--wide footer__inner' },
      h(
        'div',
        { class: 'footer__brand' },
        h('span', { class: 'nav__brand-mark' }, 'A'),
        h('span', {}, 'AI Pipeline')
      ),
      h(
        'div',
        {},
        `© ${year} · 精选 AI 工作流分享 · 以 ❤ 与 ⚙ 制作`
      )
    )
  );
};
