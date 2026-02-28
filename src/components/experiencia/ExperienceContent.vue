<template>
  <section class="hero">

    <div
      class="hero-image"
      :style="{ backgroundImage: `linear-gradient(rgba(214,162,162,0.18), rgba(214,162,162,0.18)), url(${imageSrc})` }"
    ></div>

    <div class="hero-content">
      <h1 class="title">
        {{ title }}
      </h1>

      <div class="romantic-line"></div>

      <p 
        v-for="(paragraph, index) in text"
        :key="index"
        class="subtitle"
      >
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
    type: Array,
    required: true
  }
})
</script>

<style scoped>

.lock-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 1);
  backdrop-filter: blur(6px);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
}

.lock-content {
  text-align: center;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

.lock-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: pulse 1.5s infinite;
}

.lock-text {
  font-size: 1.3rem;
  letter-spacing: 0.5px;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}


.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F5EDEE; /* rosa arena romántico */
  overflow: hidden;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
}

.hero-image {
  width: 100%;
  max-width: 650px;
  height: 450px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-bottom-left-radius: 50% 10%;
  border-bottom-right-radius: 50% 10%;
}

.hero-content {
  text-align: center;
  max-width: 680px;
  padding: 1.8rem 1rem 1rem;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #2C2A2A;
  margin-bottom: 0.8rem;
  text-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.romantic-line {
  width: 70px;
  height: 3px;
  margin: 0 auto 1.5rem;
  border-radius: 3px;
  background: linear-gradient(to right, #E8B4B8, #D8A7B1);
}

.subtitle {
  font-size: 1.05rem;
  color: #7A6F73;
  line-height: 1.75;
  margin-bottom: 1rem;
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
