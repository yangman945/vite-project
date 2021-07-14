import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
export default defineConfig({
  plugins: [vue()],
  resolve:{
    // 配置项目路径别名
    alias:{
      '@':path.resolve(__dirname,"src"),
      "apis": path.resolve(__dirname, "src/api"),
      "lays": path.resolve(__dirname, "src/layout"),
      "views": path.resolve(__dirname, "src/views"),
      "utils": path.resolve(__dirname, "src/utils"),
      "plugs": path.resolve(__dirname, "src/plugins"),
      "styles": path.resolve(__dirname, "src/styles"),
      "comps": path.resolve(__dirname, "src/components"),
    }
  }
})
