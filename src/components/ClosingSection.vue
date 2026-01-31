<template>
  <section class="closing-veil">
    <div class="veil-overlay">
      <div class="content">
        <p class="closing-text">
          Ahora solo queda esperar<br/>
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
      rgba(250, 240, 242, 0.85) 0%,
      rgba(245, 230, 235, 0.75) 100%
    );
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.veil-overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.15);
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

.closing-text {
  font-family: serif;
  font-size: 1rem;
  color: #7a4a55;
  opacity: 0.85;
  text-shadow: 0 1px 6px rgba(255,255,255,0.6);
  line-height: 1.6;
}

.closing-veil::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/photos/hello-lu/final.png") center / cover no-repeat;
  opacity: 0.25;
  mask-image: linear-gradient(to top, transparent 0%, black 50%);
}
</style>
