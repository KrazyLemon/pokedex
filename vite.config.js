import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import windicss from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(),windicss()],
})
