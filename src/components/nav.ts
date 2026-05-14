import { h } from '../utils/dom';
import { attachNavScroll } from '../utils/motion';

export const renderNav = (currentPath: string): HTMLElement => {
  const links: { href: string; label: string; match: (p: string) => boolean }[] = [
    { href: '#/', label: '首页', match: (p) => p === '/' || p === '' },
    {
      href: '#/pipelines',
      label: '流水线',
      match: (p) => p.startsWith('/pipelines'),
    },
  ];

  const nav = h(
    'header',
    { class: 'nav', role: 'banner' },
    h(
      'div',
      { class: 'container container--wide nav__inner' },
      h(
        'a',
        { href: '#/', class: 'nav__brand', 'aria-label': 'AI Pipeline 首页' },
        h('span', { class: 'nav__brand-mark' }, 'A'),
        h('span', {}, 'AI Pipeline')
      ),
      h(
        'nav',
        { class: 'nav__menu', 'aria-label': '主导航' },
        ...links.map((l) =>
          h(
            'a',
            {
              href: l.href,
              class: `nav__link${l.match(currentPath) ? ' is-active' : ''}`,
            },
            l.label
          )
        )
      )
    )
  );

  requestAnimationFrame(() => attachNavScroll(nav));
  return nav;
};
