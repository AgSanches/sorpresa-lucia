<template>
  <section class="closing-veil">
    <div class="veil-overlay">
      <div class="content">
        <div class="floating-dot"/>
        <p class="closing-text">
          Todo está en marcha<br/>
          -- 2026 --<br/>
            Con mucho cariño, Adrián.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sección final contemplativa
</script>

<style scoped>
.closing-veil {
  scroll-snap-align: start;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(250, 240, 242, 1) 0%,
    rgba(245, 230, 235, 1) 100%
  );
  position: relative;
  overflow: hidden;
}

.veil-overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.floating-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #b86b7b;
  opacity: 0.8;
  animation: breathe 4s ease-in-out infinite;
}

.closing-text {
  font-family: serif;
  font-size: 1rem;
  color: #7a4a55;
  opacity: 0.85;
  line-height: 1.6;
}

@keyframes breathe {
  0% {
    transform: scale(1.4);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.70);
    opacity: 1;
  }
  100% {
    transform: scale(1.4);
    opacity: 0.6;
  }
}
</style>
