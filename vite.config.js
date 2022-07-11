import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
  plugins: [glsl()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});