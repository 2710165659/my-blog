---
layout: page
sidebar: false
---

<script setup lang="ts">
import MyCard from '../components/MyCard.vue'
</script>

<style scoped>
.page-container {
  max-width: 90vw;
  margin: 0 auto;
  padding: 0 32px;
}
.articles-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 24px;
}
</style>

<div class="page-container">
  <div class="articles-list">
    <MyCard
      link="/projects/osutool"
      title="osu谱面信息获取工具"
      desc="vue3+cloudflare worker"
      img="/osutool-0.png"
    />
    <MyCard
      link="/projects/RougeKiller"
      title="简历上的项目"
      desc="浏览器扩展+前后端+爬虫"
      img="/RougeKiller-0.png"
    />
    <MyCard
      link="/projects/osutool"
      title="一些mfc小游戏"
      desc="mfc(c++)"
      img="/MFCGames-0.png"
    />
  </div>
</div>

