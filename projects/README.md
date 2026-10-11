# 项目素材上传说明

网站不会使用虚构案例图片。请把真实、确认可公开的素材按以下结构上传，并在 `app/data/portfolio.ts` 中把对应项目的 `image` 从 `null` 改为图片路径，例如 `/projects/scada-account/cover.webp`。

```text
public/projects/
├── scada-account/
│   ├── cover.webp
│   ├── account-before.webp
│   └── result-dashboard.webp
├── ai-industrial-video/
│   ├── cover.webp
│   ├── storyboard.webp
│   └── video-stills.webp
├── film-documentary/
│   ├── film-still-01.webp
│   ├── film-still-02.webp
│   └── behind-the-scenes.webp
└── independent-photography/
    ├── portfolio-01.webp
    ├── portfolio-02.webp
    └── portfolio-03.webp
```

建议使用 WebP，项目封面推荐比例 4:3 或 3:2，单张图片尽量控制在 500 KB 以内。涉及客户、公司后台或未公开项目时，请先确认授权并遮盖敏感信息。
