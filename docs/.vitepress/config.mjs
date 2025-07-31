import { defineConfig } from 'vitepress'
import generateSidebar from './generateSidebar.js'

const config = {
  lang: 'zh-CN',
  title: "My Blog",
  description: "A personal blog",

  cleanUrls: true,
  srcDir: './src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],


  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Articles', link: '/articles' },
    ],

    sidebar: {
      '/tutorial/': generateSidebar('src/tutorial', '/tutorial/'),
      '/articles/': generateSidebar('src/articles', '/articles/')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  markdown: {
    math: true
  }
}

export default defineConfig(config)
