<template>
  <section class="hero">
    <div
      class="hero-image"
      :style="{ backgroundImage: `url(${imageSrc})` }"
    ></div>

    <div class="hero-content">
      <h1 class="title">
        {{ title }}
      </h1>

      <p v-for="(paragraph, index) in textList" :key="index" class="subtitle">
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f4f6;
  overflow: hidden;
  height: 100vh;
}

.hero-image {
  width: 100%;
  max-width: 650px;
  height: 380px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-bottom-left-radius: 50% 10%;
  border-bottom-right-radius: 50% 10%;
}

.hero-content {
  text-align: center;
  max-width: 680px;
  padding: 2.5rem 1.5rem 4rem;
}

.title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.05rem;
  color: #6b7280;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .hero-image {
    height: 420px;
    max-width: 720px;
  }

  .title {
    font-size: 2.6rem;
  }
}
</style>
