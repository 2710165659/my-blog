import fs from 'fs'
import path from 'path'

/**
 * 递归生成指定目录的 sidebar 配置
 * @param {string} dir 相对于项目根目录的路径，例如 'src/tutorial'
 * @param {string} basePath 侧边栏路由的基础路径，例如 '/tutorial/'
 * @returns {Array} 侧边栏配置数组
 */
export default function generateSidebar(dir, basePath) {
  const dirPath = path.resolve(process.cwd(), 'docs', dir)
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  // 先过滤，排除隐藏文件，然后排序，目录排前，文件排后
  const filteredSortedEntries = entries
    .filter(e => !e.name.startsWith('.') && (e.isDirectory() || e.name.endsWith('.md')))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1
      if (!a.isDirectory() && b.isDirectory()) return 1
      return a.name.localeCompare(b.name)
    })

  const sidebarItems = filteredSortedEntries.map(e => {
    if (e.isDirectory()) {
      return {
        text: e.name,
        collapsed: true,
        items: generateSidebar(path.join(dir, e.name), path.posix.join(basePath, e.name, '/'))
      }
    } else {
      const name = e.name.replace(/\.md$/, '')
      const link = path.posix.join(basePath, name === 'README' ? '' : name)
      return {
        text: name,
        link
      }
    }
  })

  return sidebarItems
}
