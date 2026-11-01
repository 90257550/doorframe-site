import { defineConfig } from 'astro/config';

// 部署到 Cloudflare Pages 后，把 site 换成你的正式域名（如 https://www.example.com）
export default defineConfig({
  site: 'https://doorframe.pages.dev',
  trailingSlash: 'never',
});
