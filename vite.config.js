import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3D-Quest/',
  server: {
    port: 5173,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
