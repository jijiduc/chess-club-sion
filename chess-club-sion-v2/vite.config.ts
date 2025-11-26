import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': '/src',
    },
  },
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
          'ui': ['lucide-react'],
          'data-fetching': ['@tanstack/react-query'],
          'date': ['date-fns'],
          'state': ['zustand']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})