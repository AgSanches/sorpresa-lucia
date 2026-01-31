<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const shouldHide = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  setTimeout(() => {
    shouldHide.value = true
  }, 2000)
})
</script>

<template>
  <div class="flag-container" :class="{ visible: isVisible, hide: shouldHide }">
    <div class="flag">
      <div class="stripe black stripe-1"></div>
      <div class="stripe yellow stripe-2"></div>
      <div class="stripe red stripe-3"></div>
      <div class="stripe black stripe-4"></div>
      <div class="stripe yellow stripe-5"></div>
      <div class="stripe red stripe-6"></div>
    </div>
  </div>
</template>

<style scoped>
.flag-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.8s ease-out;
  z-index: 9999;
  top: 0;
  left: 0;
}

.flag-container.hide {
  opacity: 0;
}

.flag {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.stripe {
  flex: 1;
  width: 0;
  transition: width 0.8s ease-out;
}

.flag-container.visible .stripe {
  width: 100%;
}

.stripe.black {
  background-color: #000000;
}

.stripe.yellow {
  background-color: #FCDC04;
}

.stripe.red {
  background-color: #D90000;
}

.stripe-1 {
  transition-delay: 0s;
}

.stripe-2 {
  transition-delay: 0.15s;
}

.stripe-3 {
  transition-delay: 0.3s;
}

.stripe-4 {
  transition-delay: 0.45s;
}

.stripe-5 {
  transition-delay: 0.6s;
}

.stripe-6 {
  transition-delay: 0.75s;
}
</style>
