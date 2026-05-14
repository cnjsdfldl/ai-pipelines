import type { Pipeline } from './_types';

const modules = import.meta.glob<Pipeline>(['./*.ts', '!./_*.ts'], {
  eager: true,
  import: 'pipeline',
});

export const pipelines: Pipeline[] = Object.values(modules)
  .filter((p): p is Pipeline => !!p && typeof p === 'object' && 'id' in p)
  .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

export const findPipeline = (id: string): Pipeline | undefined =>
  pipelines.find((p) => p.id === id);

export const allTags = (): string[] => {
  const set = new Set<string>();
  pipelines.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set);
};
