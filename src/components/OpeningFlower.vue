<template>
  <div v-if="visible" class="opening">
    <svg class="flower" viewBox="0 0 100 100">
      <g fill="none" stroke="#9B4A5A" stroke-width="2">
        <circle cx="50" cy="20" r="10"/>
        <circle cx="80" cy="50" r="10"/>
        <circle cx="50" cy="80" r="10"/>
        <circle cx="20" cy="50" r="10"/>
        <circle cx="50" cy="50" r="6" fill="#9B4A5A"/>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 2200);
});
</script>

<style scoped>
.opening {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #FAE1E3, #F6F1F1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.flower {
  width: 80px;
  height: 80px;
  animation: spinFade 2.2ms ease-in-out forwards;
}

@keyframes spinFade {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(0deg);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.95) rotate(420deg);
  }
}
</style>
