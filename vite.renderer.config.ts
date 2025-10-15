import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(async () => {
  const tailwindcss = (await import('@tailwindcss/vite')).default
  return {
    plugins: [tailwindcss()],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "src")
        },
      },
  }
})
