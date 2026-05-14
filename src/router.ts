export interface RouteMatch {
  path: string;
  params: Record<string, string>;
}

export type RouteHandler = (match: RouteMatch) => void;

interface Route {
  pattern: RegExp;
  paramKeys: string[];
  handler: RouteHandler;
}

const routes: Route[] = [];
let fallback: RouteHandler | null = null;

const compile = (template: string): { pattern: RegExp; paramKeys: string[] } => {
  const paramKeys: string[] = [];
  const regexBody = template
    .replace(/\/+$/, '')
    .replace(/\//g, '\\/')
    .replace(/:([a-zA-Z_]+)/g, (_, key) => {
      paramKeys.push(key);
      return '([^/]+)';
    });
  return { pattern: new RegExp(`^${regexBody}\\/?$`), paramKeys };
};

export const route = (template: string, handler: RouteHandler): void => {
  const { pattern, paramKeys } = compile(template);
  routes.push({ pattern, paramKeys, handler });
};

export const onNotFound = (handler: RouteHandler): void => {
  fallback = handler;
};

const currentPath = (): string => {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  return raw.split('?')[0] || '/';
};

const dispatch = (): void => {
  const path = currentPath();
  for (const r of routes) {
    const m = path.match(r.pattern);
    if (m) {
      const params: Record<string, string> = {};
      r.paramKeys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1] ?? '')));
      r.handler({ path, params });
      return;
    }
  }
  fallback?.({ path, params: {} });
};

export const start = (): void => {
  window.addEventListener('hashchange', () => {
    dispatch();
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  });
  if (!window.location.hash) {
    window.location.hash = '#/';
  } else {
    dispatch();
  }
};

export const navigate = (to: string): void => {
  if (window.location.hash === `#${to}`) {
    dispatch();
  } else {
    window.location.hash = `#${to}`;
  }
};
