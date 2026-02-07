<template>
  <div class="content">
    <div class="card">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1 v-if="title">{{ title }}</h1>
      
      <slot>
        <p v-for="(paragraph, index) in paragraphs" :key="index" class="text">
          {{ paragraph }}
        </p>
      </slot>

      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    eyebrow: {
      type: String,
      default: 'Para Lucía'
    },
    title: {
      type: String,
      default: null
    },
    paragraphs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.content {
  position: relative;
  z-index: 1;
  height: 100vh;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(20px) scale(0.98);
  filter: blur(4px);
  animation: contentIn 1.6s ease forwards;
  animation-delay: 2.2s;
}

@keyframes contentIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.card {
  max-width: 520px;
  width: 85%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  text-align: center;
}

.eyebrow {
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #c26b85;
  margin-bottom: 12px;
  padding-top: 1rem;
}

.card h1 {
  font-size: 2.2rem;
  margin: 0 0 20px;
  color: #2b2b2b;
}

.card h1::after {
  content: "";
  display: block;
  width: 48px;
  height: 2px;
  background: #d28fa3;
  margin: 16px auto 0;
  border-radius: 2px;
}

.text {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #555;
}
</style>
