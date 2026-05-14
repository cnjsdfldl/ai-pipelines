import { renderHero } from '../components/hero';
import { renderOutputCard } from '../components/output-card';
import { outputs } from '../data/outputs';
import { pipelines } from '../data/pipelines/_registry';
import { h, clear, setTitle } from '../utils/dom';
import { observeFadeIn } from '../utils/motion';

export const renderHome = (root: HTMLElement): void => {
  setTitle('');
  clear(root);

  const main = h('main', { class: 'main', id: 'main' });

  // Hero
  main.appendChild(renderHero());

  // Outputs section
  const grid = h(
    'div',
    { class: 'output-grid' },
    ...outputs.map((o) => renderOutputCard(o))
  );

  const outputsSection = h(
    'section',
    { class: 'section', id: 'home-outputs' },
    h(
      'div',
      { class: 'container container--wide' },
      h(
        'div',
        { class: 'section__head fade-up' },
        h('span', { class: 'section__eyebrow' }, '当下，AI 能做什么'),
        h('h2', { class: 'section__title' }, '以「产出物」为坐标轴的精选工作流'),
        h(
          'p',
          { class: 'section__lede' },
          '我们不罗列工具，而是回答一个更具体的问题：AI 现在能帮我做出什么样的成品？每一类产出物背后，都是一整条经过验证的流水线。'
        )
      ),
      grid
    )
  );
  main.appendChild(outputsSection);

  // Stats / band
  const ctaBand = h(
    'section',
    { class: 'section' },
    h(
      'div',
      { class: 'container container--wide' },
      h(
        'div',
        { class: 'cta-band fade-up' },
        h('h2', { class: 'cta-band__title' }, `已收录 ${pipelines.length} 条流水线，持续更新`),
        h(
          'p',
          { class: 'cta-band__lede' },
          '每条流水线都拆解到「工具、模型、步骤、案例」四个维度，可直接落地。'
        ),
        h(
          'a',
          { href: '#/pipelines', class: 'btn btn--primary' },
          '查看完整目录',
          h('span', { class: 'btn__arrow' }, '→')
        )
      )
    )
  );
  main.appendChild(ctaBand);

  root.appendChild(main);
  observeFadeIn(main);
};
