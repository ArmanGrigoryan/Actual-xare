import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

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
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "app": path.resolve(__dirname, "./src/app"),
      "comp": path.resolve(__dirname, "./src/components"),
      "media": path.resolve(__dirname, "./src/assets/img"),
      "style": path.resolve(__dirname, "./src/assets/scss"),
      "font": path.resolve(__dirname, "./src/assets/fonts"),
      "pages": path.resolve(__dirname, "./src/pages"),
      "hooks": path.resolve(__dirname, "./src/utils/hooks"),
      "data": path.resolve(__dirname, "./src/sample-data"),
    }
  }
})