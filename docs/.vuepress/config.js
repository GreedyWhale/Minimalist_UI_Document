module.exports = {
  title: 'Minimalist UI',
  description: '一个基于Vue.js构建的轻量，可靠的UI组件库',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://user-gold-cdn.xitu.io/2019/4/24/16a4ede11385c558?w=900&h=900&f=png&s=111733` }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: 'Guide', link: '/introduction/introduce' },
      { text: 'GitHub', link: 'https://github.com/GreedyWhale/Minimalist_UI/tree/master' }
    ],
    sidebar: [
      '/',
      {
        title: '快速上手',
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
          '/components/collapse',
          '/components/cascader',
          '/components/swiper',
          "/components/menu"
        ]
      },
    ]
  }
}