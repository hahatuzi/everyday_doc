import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '每日文档',
  description: '我的日常文档记录',
  base: '/everyday_doc/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '每日文档',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '笔记', link: '/notes/' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      },
      {
        text: '笔记',
        items: [
          { text: '笔记列表', link: '/notes/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/everyday_doc' }
    ]
  }
})
