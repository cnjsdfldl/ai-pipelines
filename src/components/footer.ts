import { h } from '../utils/dom';

export const renderFooter = (): HTMLElement => {
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
      h('div', {}, 'Eric Liu 制作')
    )
  );
};
