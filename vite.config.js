import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // 127.0.0.1 || 0.0.0.0
    port: 12321
  }
  // base: './'
})
