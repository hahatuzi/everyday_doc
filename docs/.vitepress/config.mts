import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mjs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Everyday",
  description: "日常文档记录",
  base: "/everyday_doc/",
  // GitHub Pages 部署配置
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/notes/" },
    ],
    sidebar: sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/hahatuzi/everyday_doc" },
    ],
    footer: {
      message: "基于 VitePress 构建",
      // copyright: 'Copyright © 2024-present'
    },
  },
});
