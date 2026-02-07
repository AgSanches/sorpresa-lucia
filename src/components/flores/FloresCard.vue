<template>
  <section class="flores-section">
    <div class="flores-card">
        <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'FloresCard'
}
</script>

<style>

.flores-section {
  min-height: 85vh;
  scroll-snap-align: start;   
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
}

.flores-card {
  max-width: 390px;
  width: 85%;
  margin: 2.5rem auto 1.8rem;
  padding: 1rem 1.2rem;

  background: rgba(255, 255, 255, 0.85);
  border-radius: 22px;

  box-shadow:
    0 14px 30px rgba(0,0,0,0.15),
    inset 0 1px 0 rgba(255,255,255,0.85);

  backdrop-filter: blur(6px);

  text-align: center;
  line-height: 1.75;

  animation: floresFadeIn 2s ease both;
}

.flores-card h1,
.flores-card h2,
.flores-card h3 {
  position: relative;
  margin-bottom: 1.4rem;
  letter-spacing: .02em;
}

.flores-card h1::after,
.flores-card h2::after,
.flores-card h3::after {
  content: "❀❀❀";
  display: block;
  margin: .6rem auto 0;
  font-size: 1.1rem;
  opacity: .6;
}

@keyframes floresFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.flores-card p {
  margin-bottom: 1.1rem;
}

</style>
