module.exports = {
  base: '/Minimalist_UI_Document/',
  title: 'Minimalist UI',
  description: '一个基于Vue.js构建的轻量，可靠的UI组件库',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: '/icon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/introduction/introduce' },
      { text: 'GitHub', link: 'https://github.com/GreedyWhale/Minimalist_UI/tree/master' }
    ],
    sidebar: [
      '/',
      {
        title: '快速上手',
        collapsable: false,
        children: [
          '/introduction/introduce',
          '/introduction/install',
          '/introduction/usage'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/button-group',
          '/components/icon',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/dialog',
          '/components/collapse',
          '/components/cascader',
          '/components/swiper',
          "/components/menu",
          "/components/pagination",
          "/components/table",
          "/components/upload",
          "/components/sticky",
          "/components/date-picker",
        ]
      },
    ]
  }
}