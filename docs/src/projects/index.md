---
layout: page
sidebar: false
---

<script setup lang="ts">
import MyCard from '../components/MyCard.vue'
import osutoolImg from '../images/osutool-0.png'
import rougeKillerImg from '../images/RougeKiller-0.png'
import MFCGamesImg from '../images/MFCGames-0.png'
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
      :img="osutoolImg"
    />
    <MyCard
      link="/projects/RougeKiller"
      title="简历上的项目"
      desc="浏览器扩展+前后端+爬虫"
      :img="rougeKillerImg"
    />
    <MyCard
      link="/projects/MFCGames"
      title="一些mfc小游戏"
      desc="mfc(c++)"
      :img="MFCGamesImg"
    />
  </div>
</div>

