// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path when served in production
  base: './',
  // Specify server options
  server: {
    open: true, // Auto open browser on start
  },
  // Build options
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
