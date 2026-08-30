import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Geometry-Quest-3D/',
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
