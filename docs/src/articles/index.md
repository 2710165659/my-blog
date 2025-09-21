---
layout: page
---

<script setup lang="ts">
import ArticleCard from '../components/MyCard.vue'
</script>

<style scoped>
.page-container {
  max-width: 1200px;
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
    <ArticleCard
      link="/articles/crawl4ai"
      title="crawl4ai：异步爬虫"
      desc="支持css选择器、js预处理，适合AI处理和数据提取。"
      img="../images/crawl4ai-0.png"
    />
  </div>
</div>

