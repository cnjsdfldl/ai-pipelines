const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let observer: IntersectionObserver | null = null;

const getObserver = (): IntersectionObserver => {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  return observer;
};

export const observeFadeIn = (root: HTMLElement | Document = document): void => {
  if (prefersReducedMotion()) {
    root.querySelectorAll<HTMLElement>('.fade-up').forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const obs = getObserver();
  root.querySelectorAll<HTMLElement>('.fade-up:not(.is-visible)').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 80, 320)}ms`;
    obs.observe(el);
  });
};

export const attachParallax = (
  el: HTMLElement,
  intensity = 0.12,
  maxOffset = 60
): (() => void) => {
  if (prefersReducedMotion()) return () => {};

  let frame = 0;
  const onScroll = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const delta = (center - winH / 2) * intensity * -1;
      const offset = Math.max(-maxOffset, Math.min(maxOffset, delta));
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      frame = 0;
    });
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
};

export const attachNavScroll = (nav: HTMLElement): (() => void) => {
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
};
