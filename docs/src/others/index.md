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
      link="/vitepress-tutorial"
      title="vitepree教程"
      desc="从github搬运过来的"
      img="/others/vitepress-tutorial-0.png"
    />
  </div>
</div>

