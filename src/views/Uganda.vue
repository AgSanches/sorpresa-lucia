<script setup>
import UgandaFlag from '../components/uganda/UgandaFlag.vue'
import Liana from '../components/uganda/Liana.vue' 

import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.body.style.overflow = 'hidden'
  
  setTimeout(() => {
    document.body.style.overflow = 'auto'
  }, 2800)
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <section class="animal-background">
    <UgandaFlag />
    <Liana />

    <div class="overlay"></div>
    <div class="content">
      <h1>Uganda</h1>
      <p>
        Ya te vas por fin a Uganda!!!!
      </p>
    </div>
  </section>
</template>

<style scoped>
.animal-background {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url('/photos/uganda/background.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  animation: gradientShift 25s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 25%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 75%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 1rem;
}

.content h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.content p {
  font-size: 1rem;
}
</style>
