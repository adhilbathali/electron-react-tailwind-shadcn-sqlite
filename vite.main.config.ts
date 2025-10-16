import { defineConfig } from 'vite'
import path from 'path'

// ✅ This tells Vite not to bundle better-sqlite3
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['better-sqlite3', 'fs', 'path'],
    },
    commonjsOptions: {
      ignoreDynamicRequires: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
