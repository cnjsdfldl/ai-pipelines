import { h } from '../utils/dom';

interface CoverArtOptions {
  variant: 'ppt' | 'film' | 'generic';
  accent?: string;
}

export const renderCoverArt = ({ variant, accent = '#0071e3' }: CoverArtOptions): HTMLElement => {
  if (variant === 'ppt') return renderPPTArt(accent);
  if (variant === 'film') return renderFilmArt(accent);
  return renderGenericArt(accent);
};

const renderPPTArt = (accent: string): HTMLElement => {
  const wrap = h('div', { class: 'output-card__cover-art', style: 'position:relative;width:100%;height:100%;' });
  wrap.innerHTML = `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="ppt-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.08"/>
          <stop offset="1" stop-color="#bf5af2" stop-opacity="0.10"/>
        </linearGradient>
        <linearGradient id="ppt-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffffff"/>
          <stop offset="1" stop-color="#f5f5f7"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#ppt-bg)"/>
      <!-- Stack of slides -->
      <g transform="translate(70,40)">
        <rect x="20" y="20" width="240" height="150" rx="10" fill="#1d1d1f" opacity="0.06" transform="rotate(-4 140 95)"/>
        <rect x="10" y="10" width="240" height="150" rx="10" fill="${accent}" opacity="0.10" transform="rotate(-2 130 85)"/>
        <rect x="0" y="0" width="240" height="150" rx="10" fill="url(#ppt-card)" stroke="${accent}" stroke-opacity="0.18" stroke-width="1"/>
        <!-- Slide content lines -->
        <rect x="20" y="22" width="120" height="10" rx="3" fill="${accent}"/>
        <rect x="20" y="42" width="180" height="5" rx="2" fill="#d2d2d7"/>
        <rect x="20" y="55" width="160" height="5" rx="2" fill="#d2d2d7"/>
        <rect x="20" y="68" width="140" height="5" rx="2" fill="#d2d2d7"/>
        <!-- chart -->
        <g transform="translate(20,90)">
          <rect width="40" height="40" rx="3" fill="${accent}" opacity="0.3"/>
          <rect x="50" width="40" height="30" rx="3" y="10" fill="${accent}" opacity="0.55"/>
          <rect x="100" width="40" height="20" rx="3" y="20" fill="${accent}" opacity="0.8"/>
          <rect x="150" width="40" height="35" rx="3" y="5" fill="${accent}"/>
        </g>
      </g>
      <!-- Sparkle accent -->
      <g transform="translate(330,55)" opacity="0.5">
        <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="${accent}"/>
      </g>
      <g transform="translate(60,200)" opacity="0.3">
        <path d="M0 -6 L1 -1 L6 0 L1 1 L0 6 L-1 1 L-6 0 L-1 -1 Z" fill="#bf5af2"/>
      </g>
    </svg>
  `;
  return wrap;
};

const renderFilmArt = (accent: string): HTMLElement => {
  const wrap = h('div', { class: 'output-card__cover-art', style: 'position:relative;width:100%;height:100%;' });
  wrap.innerHTML = `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="film-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0a0a0a"/>
          <stop offset="1" stop-color="#2a1020"/>
        </linearGradient>
        <radialGradient id="film-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.4"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill="url(#film-bg)"/>
      <rect width="400" height="250" fill="url(#film-glow)"/>
      <!-- Filmstrip frame -->
      <rect x="40" y="45" width="320" height="160" rx="6" fill="#1a1a1a" stroke="${accent}" stroke-opacity="0.4"/>
      <!-- Sprocket holes -->
      ${[60, 100, 140, 180, 220, 260, 300, 340]
        .map((x) => `<rect x="${x - 6}" y="55" width="12" height="10" rx="2" fill="#0a0a0a"/>`)
        .join('')}
      ${[60, 100, 140, 180, 220, 260, 300, 340]
        .map((x) => `<rect x="${x - 6}" y="185" width="12" height="10" rx="2" fill="#0a0a0a"/>`)
        .join('')}
      <!-- Scene mountains -->
      <g transform="translate(70,75)">
        <path d="M0 100 L60 30 L100 70 L150 20 L220 90 L260 60 L260 110 L0 110 Z" fill="${accent}" opacity="0.5"/>
        <path d="M0 100 L40 50 L80 80 L130 40 L180 90 L260 60 L260 110 L0 110 Z" fill="${accent}" opacity="0.75"/>
        <circle cx="200" cy="35" r="14" fill="#fff" opacity="0.9"/>
      </g>
      <!-- Play triangle -->
      <g transform="translate(190,115)" opacity="0.9">
        <circle r="20" fill="rgba(255,255,255,0.12)" stroke="#fff" stroke-opacity="0.4"/>
        <path d="M-6 -9 L10 0 L-6 9 Z" fill="#fff"/>
      </g>
    </svg>
  `;
  return wrap;
};

const renderGenericArt = (accent: string): HTMLElement => {
  const wrap = h('div', { class: 'output-card__cover-art', style: 'position:relative;width:100%;height:100%;' });
  wrap.innerHTML = `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="gen-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.12"/>
          <stop offset="1" stop-color="#bf5af2" stop-opacity="0.14"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#gen-bg)"/>
      <g transform="translate(200,125)" stroke="${accent}" stroke-width="1.5" fill="none" opacity="0.6">
        <circle r="40"/>
        <circle r="70"/>
        <circle r="100"/>
      </g>
      <circle cx="200" cy="125" r="8" fill="${accent}"/>
    </svg>
  `;
  return wrap;
};
