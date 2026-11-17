import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` uses relative asset paths, so the same build works on
// Vercel (served from the root) and on GitHub Pages (served from /repo-name/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
