import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const apiBase = process.env.VITE_API_BASE_URL || 'http://localhost:8080'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: apiBase,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
