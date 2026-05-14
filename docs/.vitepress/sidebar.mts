export default [
  { text: '笔记',  items: [
      { text: '项目规范打包CICD', collapsed:true,items:sidebarCICD()}
    ]
  }
]

function sidebarCICD () {
  return [
                { text: '第2章：项目规范',base:'/notes/项目规范打包CICD/第2章：项目规范/',collapsed:true,items:[
                  { text: '01_项目通用配置', link: '01_项目通用配置'},
                  { text: '02_前端规范化', link: '02_前端规范化'},
                  { text: '03_eslint文件解读', link: '03_eslint文件解读'},
                  { text: '04_prettier文件解读', link: '04_prettier文件解读'},
                  { text: '05_stylelint文件解读', link: '05_stylelint文件解读'},
                  { text: '06_commitlint文件解读', link: '06_commitlint文件解读'},
                  { text: '07_antfu综合规范', link: '07_antfu综合规范'},
                ]},
                { text: 'nginx', link: '/nginx/', collapsed:true,items:[]},
              ] 
}