import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ai-pipelines/' : '/',
  build: {
    outDir: 'dist',
    target: 'es2022',
  },
  server: {
    port: 5173,
    open: false,
  },
}));
