import type { Block } from '../data/pipelines/_types';
import { h } from '../utils/dom';

const renderBlock = (b: Block): HTMLElement => {
  switch (b.type) {
    case 'heading':
      return h(b.level === 2 ? 'h2' : 'h3', {}, b.text);
    case 'paragraph':
      return h('p', {}, b.text);
    case 'list': {
      const tag = b.ordered ? 'ol' : 'ul';
      const list = document.createElement(tag);
      for (const item of b.items) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      }
      return list;
    }
    case 'callout': {
      const iconText = b.tone === 'info' ? 'i' : b.tone === 'tip' ? '✓' : '!';
      return h(
        'div',
        { class: `callout callout--${b.tone}` },
        h('span', { class: 'callout__icon' }, iconText),
        h('div', { class: 'callout__body' }, b.text)
      );
    }
    case 'code': {
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      if (b.lang) code.className = `language-${b.lang}`;
      code.textContent = b.text;
      pre.appendChild(code);
      return pre;
    }
    case 'image': {
      const fig = document.createElement('figure');
      const img = document.createElement('img');
      img.src = b.src;
      img.alt = b.caption ?? '';
      img.loading = 'lazy';
      fig.appendChild(img);
      if (b.caption) {
        const cap = document.createElement('figcaption');
        cap.textContent = b.caption;
        fig.appendChild(cap);
      }
      return fig;
    }
    case 'quote': {
      const bq = document.createElement('blockquote');
      const p = document.createElement('p');
      p.textContent = b.text;
      bq.appendChild(p);
      if (b.cite) {
        const cite = document.createElement('cite');
        cite.textContent = b.cite;
        bq.appendChild(cite);
      }
      return bq;
    }
  }
};

export const renderRichText = (blocks: Block[]): HTMLElement => {
  const wrap = h('div', { class: 'rt' });
  for (const b of blocks) wrap.appendChild(renderBlock(b));
  return wrap;
};
