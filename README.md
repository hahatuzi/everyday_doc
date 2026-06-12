# Everyday

日常文档记录站点，基于 VitePress 构建。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产构建
npm run docs:preview
```

## 部署

```
方式一:GitHub Actions
  直接通过GitHub Actions 自动部署到 GitHub Pages
  访问地址：https://hahatuzi.github.io/everyday_doc/
方式二：私有服务器发布：Dockerfile + Docker Compose
  - 第一步：文件上传至服务器
  - 第二步：cd /usr/web/everyday_doc
  - 第三步：docker compose up -d --build
```

## 项目结构

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.mts    # VitePress 配置文件
│   ├── guide/            # 指南文档
│   ├── notes/            # 笔记目录
│   └── index.md          # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions 部署配置
└── package.json
```

## License

MIT
