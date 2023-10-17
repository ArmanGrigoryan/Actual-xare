import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js|.jsx?$/,
    exclude: [],
  },
  assetsInclude: ['**/*.gltf'],
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000
  }
})