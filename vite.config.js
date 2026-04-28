import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // Project GitHub Pages: assets under /repo-name/; dev server stays at /
  base:
    command === 'serve'
      ? '/'
      : (process.env.VITE_BASE || '/yam112003-mio-preview/'),
}))
