import { defineConfig } from 'vitepress'
import generateSidebar from './generateSidebar.js'

const config = {
  base: '/',
  lang: 'zh-CN',
  title: "My Blog",
  description: "xuan_yuan's blog",
  cleanUrls: true,
  srcDir: './src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],


  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '项目', link: '/projects' },
      { text: '文章', link: '/articles' },
      { text: '笔记', link: '/notes' },
      { text: '其他', link: '/others' },
    ],

    sidebar: {
      '/projects/': generateSidebar('src/projects', '/projects/'),
      '/articles/': generateSidebar('src/articles', '/articles/'),
      '/notes/': generateSidebar('src/notes', '/notes/'),
      '/others/': generateSidebar('src/others', '/others/'),
      '/vitepress-tutorial': generateSidebar('src/vitepress-tutorial', '/vitepress-tutorial'),
    },
    search: {
      provider: 'local'
    },

    // 禁用所有文章底部的上一篇文章和下一篇文章链接
    docFooter: {
      prev: false,
      next: false
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2710165659/my-blog' }
    ]
  },

  // 允许使用 Markdown 中的数学公式
  markdown: {
    math: true
  }
}

export default defineConfig(config)
