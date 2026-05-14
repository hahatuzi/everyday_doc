import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Everyday",
  description: "日常文档记录",
  base: '/everyday_doc/',
  // GitHub Pages 部署配置
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '项目规范打包CICD', collapsed:true,items:[
                { text: '第2章：项目规范',collapsed:true,items:[
                  { text: '01_项目通用配置', link: '/项目规范打包CICD/第2章：项目规范/01_项目通用配置/'},
                  { text: '02_前端规范化', link: '/项目规范打包CICD/第2章：项目规范/02_前端规范化'},
                  { text: '03_eslint文件解读', link: '/项目规范打包CICD/第2章：项目规范/03_eslint文件解读'},
                  { text: '04_prettier文件解读', link: '/项目规范打包CICD/第2章：项目规范/04_prettier文件解读'},
                  { text: '05_stylelint文件解读', link: '/项目规范打包CICD/第2章：项目规范/05_stylelint文件解读'},
                  { text: '06_commitlint文件解读', link: '/项目规范打包CICD/第2章：项目规范/06_commitlint文件解读'},
                  { text: '07_antfu综合规范', link: '/项目规范打包CICD/第2章：项目规范/07_antfu综合规范'},
                ]},
                { text: 'nginx', link: '/nginx/', collapsed:true,items:[]},
              ] 
            },
          ]
        }
      ],
      // '/项目规范打包CICD/': [
      //   {
      //     text: '项目规范打包CICD',
      //     items: [
      //       { text: '介绍', link: '/guide/' },
      //       { text: '快速开始', link: '/guide/getting-started' }
      //     ]
      //   }
      // ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hahatuzi/everyday_doc' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present'
    }
  }
})