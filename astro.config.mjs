// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  devToolbar: {
    enabled: false
  },
  vite: {
    assetsInclude: ['**/*.webp'],
    ssr: {
      noExternal: ['framer-motion']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'react-vendor': ['react', 'react-dom'],
          }
        }
      }
    }
  }
});
