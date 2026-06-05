# ==================== 阶段1: 构建 VitePress ====================
FROM node:20-alpine AS builder

WORKDIR /everyday_doc

RUN apk add --no-cache git
# 复制依赖文件
# COPY package.json ./
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# 安装依赖
RUN npm install --registry=https://registry.npmmirror.com

# 复制全部源码
COPY . .

# 构建 VitePress 静态站点
RUN npm run docs:build

# ==================== 阶段2: Nginx 托管 ====================
FROM nginx:alpine

# 从构建阶段复制产物
# VitePress 默认输出到 .vitepress/dist
COPY --from=builder /everyday_doc/docs/.vitepress/dist /usr/share/nginx/html/everyday_doc

# 复制 Nginx 配置
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



