---
layout: home

hero:
  name: "xuan_yuan's blog"
  # text: "个人博客"
  tagline: 个人博客，随缘更新。
  actions:
    - theme: brand
      text: 文章
      link: /articles
    - theme: alt
      text: 笔记
      link: /notes

features:
  - title: Tip
    details: 记录学习/生活。整理笔记...
---

<div class="ku-kuru-img-container">
  <el-image
    class="ku-kuru-img"
    :src="kukuru"
    alt="くくる"
    fit="contain"
    lazy>
  </el-image>
</div>

<script setup>
import kukuru from './images/くくる.png'
</script>

<style scoped>
  .ku-kuru-img-container{ 
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 50;
    text-align: right;
    pointer-events: none;
    user-select: none;
  }

  .ku-kuru-img{
    display: inline-block;
    height: 70vh;  
    width: auto;
    max-width: 100%; 
  }

  @media screen and (max-width: 767px){
    .ku-kuru-img-container{
      text-align: center;
      position: static;
    }
    .ku-kuru-img{
      height: auto; 
      width: 100%;
      display: inline-block;
      margin: 0 auto; 
    }
  }
</style>