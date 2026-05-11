# everyday_doc

每日文档站，基于 VitePress 构建。

## 开始使用

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build
```

## 部署

本项目配置了 GitHub Actions，可自动部署到 GitHub Pages。

推送到 `main` 分支将自动触发部署。

### 手动部署

```bash
npm run docs:build
```

构建产物在 `docs/.vitepress/dist` 目录。
