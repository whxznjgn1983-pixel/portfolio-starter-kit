# 徐旻睿｜2027 校招内容运营作品集

基于现有 Vercel Next.js Portfolio Starter 改造，使用 Next.js App Router、React、TypeScript 与 Tailwind CSS，保留 Vercel Analytics、Speed Insights、SEO、sitemap 与 robots 配置。

## 最常修改的文件

- `app/data/portfolio.ts`：姓名、学校、项目、数据、经历、邮箱和简历路径都集中在这里。
- `public/projects/README.md`：真实项目图片的目录和文件名说明。
- `public/resume-xu-minrui.pdf`：当前为明确标注的占位 PDF，投递前请用正式简历覆盖同名文件。
- `app/global.css`：颜色、排版和移动端样式。

## 本地运行

```bash
pnpm install
pnpm dev
```

生产构建检查：

```bash
pnpm build
```

## 上传真实图片

把图片放入 `public/projects` 下对应项目目录，并在 `app/data/portfolio.ts` 中把项目的 `image` 从 `null` 改成公开路径，例如：

```ts
image: '/projects/scada-account/cover.webp'
```

未设置图片时，网站会继续展示美观的“图片待补充”占位框，不会生成或冒充真实案例。

## 提交到 GitHub

在项目目录运行：

```bash
git status
git add app public README.md
git commit -m "feat: rebuild portfolio for 2027 campus recruitment"
git push origin main
```

如果默认分支不是 `main`，请把最后一行中的 `main` 换成实际分支名。

## Vercel 部署

仓库已连接 Vercel 时，推送到默认分支会自动触发生产部署。首次部署时：

1. 在 Vercel 选择 **Add New → Project**。
2. 导入 GitHub 仓库 `portfolio-starter-kit`。
3. Framework Preset 保持 **Next.js**，无需数据库或环境变量。
4. 点击 Deploy；之后每次推送都会自动生成新部署。

部署前请务必替换邮箱占位符和 PDF 简历，并确认所有公开图片已获得使用授权。
