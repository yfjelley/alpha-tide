import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  // 当通过 Django 部署时，构建后的静态资源会放在 /static/landing/ 下
  base: "/static/landing/"
});
