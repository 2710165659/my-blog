<template>
  <div class="article-card" @click="handleClick" style="cursor:pointer;">
    <img v-if="img" :src="img" alt="预览图" class="card-img" />
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc" v-html="desc"></p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: String,
  title: String,
  desc: String,
  img: String
})

function handleClick() {
  if (props.link.startsWith('http')) {
    window.open(props.link, '_blank')
  } else {
    window.location.href = props.link
  }
}
</script>

<style scoped>
.article-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin: 16px 0;
  background: #fff;
}

.card-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  background: #f6f6f6;
}

.card-content {
  padding: 16px;
}

.card-title {
  margin: 0 0 8px 0;
  font-size: 1.2em;
  font-weight: bold;
}

.card-desc {
  margin: 0;
  color: #666;
  font-size: 0.95em;
}
</style>