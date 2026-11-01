# 汇恒门控 · 门框加工网站

基于 Astro 5 构建的门框加工企业官网，纯静态输出，专为 Cloudflare Pages 部署设计。

## 技术栈

- **框架**：Astro 5（零客户端 JS 依赖，纯静态输出）
- **样式**：原生 CSS 自定义属性（无 Tailwind，构建更快、依赖更少）
- **字体**：Inter + Noto Sans SC（Google Fonts，系统字体回退）
- **托管**：Cloudflare Pages（免费版无限带宽）

## 页面结构

| 页面 | 路径 | 内容 |
|------|------|------|
| 首页 | `/` | Hero + 产品速览 + 加工流程 + 优势 + FAQ + CTA |
| 产品列表 | `/products/` | 六款产品卡片 |
| 产品详情 | `/products/[slug]/` | 规格表 + 特性列表 + JSON-LD + 上下款导航 |

## 快速开始

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 输出到 dist/
npm run preview    # 本地预览构建产物
```

## 部署到 Cloudflare Pages

### 方式 A：Git 集成（推荐）

1. 将此文件夹推送到 GitHub / GitLab 仓库
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. 选择仓库，配置：
   - **框架预设**：Astro
   - **构建命令**：`npm run build`
   - **输出目录**：`dist`
4. 部署完成后获得 `xxx.pages.dev` 域名
5. 绑定自定义域名：项目 → **Custom domains** → 添加域名并按提示解析 CNAME

### 方式 B：Direct Upload

```bash
npm run build
npx wrangler pages deploy dist --project-name=doorframe-site
```

## 修改内容

### 品牌信息 / 联系方式

编辑 `src/config/site.ts`：

```ts
export const site = {
  name: '汇恒门控',          // 公司名
  slogan: '精密门框加工与型材解决方案',
  phone: '138-0000-0000',   // 电话
  email: 'hello@doorframe.example.com',
  address: '广东省佛山市南海区工业大道 88 号',
  hours: '周一至周六 8:30 – 18:00',
};
```

### 产品

编辑 `src/data/products.ts`，每款产品是一个对象：

```ts
{
  slug: 'aluminum-thermal-break',        // URL 路径，改后自动生成详情页
  name: '断桥铝合金门框',
  tag: '铝合金',                          // 分类标签，控制卡片图标
  desc: '6063-T5 断桥铝型材...',
  material: '6063-T5 铝合金（断桥）',
  finish: '氟碳喷涂 / 电泳香槟',
  profile: '型材宽 60mm · 壁厚 1.8mm',
  application: '住宅入户门 · 商铺门 · 写字楼入口',
  features: ['K 值低至 2.2 W/(㎡·K)', '...'],
}
```

新增产品直接往数组里加对象，构建后自动生成对应详情页，无需手动建文件。

### 配色 / 字体

编辑 `src/styles/global.css` 顶部的 `:root` 变量：

```css
:root {
  --accent: #2e5aac;   /* 强调色 */
  --dark: #17181a;     /* 深色区背景 */
  --bg: #f6f6f4;       /* 页面背景 */
  --font-sans: "Inter", "Noto Sans SC", ...;
}
```

### 加工流程 / FAQ

编辑 `src/pages/index.astro` 顶部的 `processSteps` 和 `faqs` 数组。

## 目录结构

```
work/
├── public/
│   └── _headers            # Cloudflare Pages 缓存与安全头
├── src/
│   ├── config/site.ts      # 品牌与联系方式
│   ├── data/products.ts    # 产品数据（增删改产品改这里）
│   ├── layouts/Base.astro  # HTML 骨架 + SEO + 滚动淡入脚本
│   ├── components/
│   │   ├── Header.astro    # 顶部导航
│   │   ├── Footer.astro    # 页脚
│   │   └── ProductCard.astro
│   ├── pages/
│   │   ├── index.astro     # 首页
│   │   └── products/
│   │       ├── index.astro       # 产品列表
│   │       └── [slug].astro      # 产品详情（动态路由）
│   └── styles/global.css   # 设计令牌 + 全局样式
├── astro.config.mjs        # site 域名（部署后改成你的正式域名）
│   trailingSlash: 'never'
├── package.json
└── tsconfig.json
```

## 上线后建议

1. **换正式域名**：修改 `astro.config.mjs` 里的 `site` 字段，重新部署（影响 canonical URL 和 sitemap）
2. **换真实图片**：目前产品卡片用抽象 SVG 示意，建议拍摄实物照片后放入 `public/` 并在 `ProductCard.astro` 中替换 SVG
3. **添加 Google Analytics / Cloudflare Analytics**：在 `Base.astro` 的 `</body>` 前插入统计代码
4. **备案**（大陆用户访问）：如需备案，绑定已备案域名并开启 Cloudflare 中国网络
