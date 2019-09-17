module.exports = {
  title: 'HTML2CANVAS 中文文档',
  description: '',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/html2canvas-docs-zh-cn/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10,
    sidebarDepth: 0,
    lastUpdated: '文档更新时间', // 文档更新时间：每个文件git最后提交的时间
    serviceWorker: {
      updatePopup: true
    },
    repo: 'AllenChinese/html2canvas-docs-zh-cn',
    nav: [
      {
        text: '文档',
        link: '/docs/html2canvas-about.html'
      }
    ],
    sidebar: [
      ['/docs/html2canvas-about', '关于'],
      ['/docs/html2canvas-getStart.md', '入门'],
      ['/docs/html2canvas-configuration.md', '配置项'],
      ['/docs/html2canvas-features.md', '功能'],
      ['/docs/html2canvas-proxy.md', '代理'],
      ['/docs/html2canvas-faq.md', '答疑']
    ]
  }
}
