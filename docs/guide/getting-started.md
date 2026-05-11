# 快速开始

## 前提条件

- Node.js 18 及以上版本
- 包管理器 (npm、yarn、pnpm 或 bun)

## 本地开发

1. 克隆项目

```bash
git clone https://github.com/yourusername/everyday_doc.git
cd everyday_doc
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run docs:dev
```

文档站点将在 `http://localhost:5173` 上可用。

## 构建生产版本

```bash
npm run docs:build
```

构建产物将生成在 `docs/.vitepress/dist` 目录中。

## 预览生产构建

```bash
npm run docs:preview
```

`preview` 命令会在本地启动一个静态 Web 服务器，提供 `docs/.vitepress/dist` 目录下的文件服务。