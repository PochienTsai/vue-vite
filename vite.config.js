import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // base: "/your-repo-name/", // Change this to your repository name (只有部署到 GitHub Pages 时需要, 本地开发时注释掉, 否则会导致路由错误,若不需要部署到 GitHub Pages, 请删除base属性)
  base: "/vue-vite/", // Change this to your repository name (只有部署到 GitHub Pages 时需要, 本地开发时注释掉, 否则会导致路由错误,若不需要部署到 GitHub Pages, 请删除base属性)
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
