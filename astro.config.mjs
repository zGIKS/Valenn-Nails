// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  adapter: undefined,
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
          manualChunks: (id) => {
            // Core vendor libraries
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }
            // Animation library
            if (id.includes('node_modules/framer-motion')) {
              return 'framer-motion';
            }
            // Component chunks for better caching
            if (id.includes('src/components/Gallery')) {
              return 'gallery';
            }
            if (id.includes('src/components/About')) {
              return 'about';
            }
            if (id.includes('src/components/Contact')) {
              return 'contact';
            }
            // Context and utilities
            if (id.includes('src/contexts') || id.includes('src/utils')) {
              return 'shared';
            }
          }
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          unused: true,
          dead_code: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2
        },
        mangle: {
          safari10: true
        }
      },
      target: 'esnext',
      sourcemap: false,
      cssCodeSplit: true,
      assetsInlineLimit: 4096
    }
  }
});
