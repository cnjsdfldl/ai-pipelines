import { h } from '../utils/dom';

export type CoverVariant = 'ppt' | 'film' | 'code' | 'avatar' | 'podcast' | 'generic';

interface CoverArtOptions {
  variant: CoverVariant;
  accent?: string;
}

export const renderCoverArt = ({ variant, accent = '#0071e3' }: CoverArtOptions): HTMLElement => {
  switch (variant) {
    case 'ppt': return renderPPTArt(accent);
    case 'film': return renderFilmArt(accent);
    case 'code': return renderCodeArt(accent);
    case 'avatar': return renderAvatarArt(accent);
    case 'podcast': return renderPodcastArt(accent);
    default: return renderGenericArt(accent);
  }
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

const renderCodeArt = (accent: string): HTMLElement => {
  const wrap = h('div', { class: 'output-card__cover-art', style: 'position:relative;width:100%;height:100%;' });
  wrap.innerHTML = `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="code-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0f1419"/>
          <stop offset="1" stop-color="#1a1f2e"/>
        </linearGradient>
        <linearGradient id="code-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.25"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#code-bg)"/>
      <rect width="400" height="120" fill="url(#code-glow)"/>
      <!-- Terminal window -->
      <rect x="40" y="35" width="320" height="180" rx="10" fill="#0a0e14" stroke="${accent}" stroke-opacity="0.3" stroke-width="1"/>
      <!-- Window controls -->
      <circle cx="58" cy="52" r="5" fill="#ff5f57"/>
      <circle cx="76" cy="52" r="5" fill="#febc2e"/>
      <circle cx="94" cy="52" r="5" fill="#28c840"/>
      <rect x="40" y="65" width="320" height="1" fill="${accent}" opacity="0.2"/>
      <!-- Code lines -->
      <g font-family="'SF Mono', monospace" font-size="11" fill="#abb2bf">
        <text x="58" y="92">$ claude <tspan fill="${accent}">/plan</tspan></text>
        <text x="58" y="112">Reading codebase...</text>
        <text x="58" y="132"><tspan fill="${accent}">●</tspan> Found 24 files</text>
        <text x="58" y="152"><tspan fill="${accent}">●</tspan> Detecting patterns</text>
        <text x="58" y="172">Plan: <tspan fill="#56b6c2">implement_feature</tspan></text>
        <text x="58" y="192">  → spec.md ✓</text>
        <text x="266" y="192" fill="${accent}" opacity="0.7">▌</text>
      </g>
    </svg>
  `;
  return wrap;
};

const renderAvatarArt = (accent: string): HTMLElement => {
  const wrap = h('div', { class: 'output-card__cover-art', style: 'position:relative;width:100%;height:100%;' });
  wrap.innerHTML = `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.12"/>
          <stop offset="1" stop-color="#0071e3" stop-opacity="0.10"/>
        </linearGradient>
        <radialGradient id="av-spot" cx="50%" cy="40%" r="40%">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.4"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill="url(#av-bg)"/>
      <rect width="400" height="250" fill="url(#av-spot)"/>
      <!-- Video frame -->
      <rect x="60" y="30" width="280" height="190" rx="14" fill="#fff" stroke="${accent}" stroke-opacity="0.25"/>
      <!-- Avatar silhouette -->
      <g transform="translate(200,125)">
        <circle cy="-22" r="32" fill="${accent}" opacity="0.85"/>
        <path d="M-50 65 Q-50 18 0 18 Q50 18 50 65 L50 95 L-50 95 Z" fill="${accent}" opacity="0.85"/>
        <!-- Subtle face details -->
        <ellipse cy="-22" rx="32" ry="32" fill="none" stroke="#fff" stroke-opacity="0.15"/>
      </g>
      <!-- Talking indicator dots -->
      <g transform="translate(310,200)">
        <circle r="3" fill="${accent}"/>
        <circle cx="12" r="3" fill="${accent}" opacity="0.7"/>
        <circle cx="24" r="3" fill="${accent}" opacity="0.4"/>
      </g>
      <!-- Caption bar -->
      <rect x="100" y="190" width="120" height="6" rx="3" fill="${accent}" opacity="0.6"/>
      <rect x="100" y="200" width="80" height="6" rx="3" fill="${accent}" opacity="0.3"/>
    </svg>
  `;
  return wrap;
};

const renderPodcastArt = (accent: string): HTMLElement => {
  const wrap = h('div', { class: 'output-card__cover-art', style: 'position:relative;width:100%;height:100%;' });
  wrap.innerHTML = `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="pc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#1a0e2e"/>
          <stop offset="1" stop-color="#2e1a0e"/>
        </linearGradient>
        <linearGradient id="pc-mic" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${accent}"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#pc-bg)"/>
      <!-- Sound waves background -->
      <g stroke="${accent}" stroke-opacity="0.18" stroke-width="1.5" fill="none">
        <path d="M0 125 Q50 110 100 125 T200 125 T300 125 T400 125"/>
        <path d="M0 140 Q50 115 100 140 T200 140 T300 140 T400 140" opacity="0.7"/>
        <path d="M0 110 Q50 135 100 110 T200 110 T300 110 T400 110" opacity="0.7"/>
      </g>
      <!-- Microphone -->
      <g transform="translate(200,115)">
        <rect x="-18" y="-50" width="36" height="60" rx="18" fill="url(#pc-mic)"/>
        <path d="M-30 0 Q-30 30 0 30 Q30 30 30 0" stroke="${accent}" stroke-width="3" fill="none"/>
        <line x1="0" y1="30" x2="0" y2="55" stroke="${accent}" stroke-width="3"/>
        <line x1="-15" y1="55" x2="15" y2="55" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
        <!-- mic grille lines -->
        <line x1="-10" y1="-32" x2="10" y2="-32" stroke="#fff" stroke-opacity="0.25" stroke-width="1"/>
        <line x1="-10" y1="-20" x2="10" y2="-20" stroke="#fff" stroke-opacity="0.25" stroke-width="1"/>
        <line x1="-10" y1="-8" x2="10" y2="-8" stroke="#fff" stroke-opacity="0.25" stroke-width="1"/>
      </g>
      <!-- Equalizer bars (right) -->
      <g transform="translate(310,125)" fill="${accent}">
        <rect x="0" y="-12" width="6" height="24" rx="3"/>
        <rect x="12" y="-22" width="6" height="44" rx="3"/>
        <rect x="24" y="-8" width="6" height="16" rx="3"/>
        <rect x="36" y="-28" width="6" height="56" rx="3" opacity="0.7"/>
        <rect x="48" y="-16" width="6" height="32" rx="3" opacity="0.5"/>
      </g>
      <g transform="translate(50,125)" fill="${accent}">
        <rect x="0" y="-16" width="6" height="32" rx="3" opacity="0.5"/>
        <rect x="12" y="-28" width="6" height="56" rx="3" opacity="0.7"/>
        <rect x="24" y="-8" width="6" height="16" rx="3"/>
        <rect x="36" y="-22" width="6" height="44" rx="3"/>
        <rect x="48" y="-12" width="6" height="24" rx="3"/>
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
