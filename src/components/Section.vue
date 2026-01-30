<template>
    <section class="section">
    <div class="card">
      <h1>{{ title }}</h1>
      <p class="lead">{{ text }}</p>
      <div class="floral-divider">❀ ❀ ❀</div>
      <img :src="image" alt="Descripción de la imagen" class="photo" loading="lazy">
    </div>
    <div class="scroll-indicator" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 10l5 5 5-5" stroke="#9B4A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    </section>
</template>

<script>
export default {
    name: 'Section',
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>


.section {
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background: linear-gradient(rgba(250, 225, 227, 0.80), rgba(250, 225, 227, 0.80)), url('/photos/background.png');
    background-size: cover;
    padding: 16px;
    position: relative;
    padding-top: calc(16px + env(safe-area-inset-top));
    padding-bottom: calc(16px + env(safe-area-inset-bottom));
}

.section {
  position: relative;
}

.section::before,
.section::after {
  content: "✿";
  position: absolute;
  font-size: 1.4rem;
  color: #9B4A5A;
  opacity: 0.25;
}

.section::before {
  top: 12px;
  left: 16px;
}

.section::after {
  bottom: 12px;
  right: 16px;
}


.floral-divider {
  text-align: center;
  margin: 0,6rem 0;
  color: #9B4A5A;
  opacity: 0.45;
  letter-spacing: 0.5rem;
}

.card {
    border-radius: 14px;
    text-align: center;
    width: 100%;
    max-width: 720px;
    background: rgba(255, 255, 255, 0.35);
    border-radius: 28px;
    border: 1px solid rgba(155, 74, 90, 0.15);
    padding: 2rem 1.5rem;
    backdrop-filter: blur(1.5px);
}

h1, h2 {
    color: #9B4A5A;
    font-size: 2.6rem;
}

.lead {
    color: #5A4A4A;
    font-size: 1.1rem;
    padding: 1rem;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    font-family: 'Lato', sans-serif;
    line-height: 1.3;
}

.photo {
    display: block;
    width: 100%;
    max-width: 80vw;
    height: auto;
    max-height: 60vh;
    object-fit: cover;
    margin: 1rem auto 0;
    transform: rotate(-0.5deg);
    border-radius: 20px;
    border: 4px solid #FAE1E3;
    box-shadow: 0 15px 30px rgba(0,0,0,0.15)
}

/* Scroll hint / indicator */
.scroll-indicator {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(10px + env(safe-area-inset-bottom));
    width: 38px;
    height: 38px;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.92);
    border-radius: 19px;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.scroll-indicator svg {
    display: block;
}

.section:first-of-type .scroll-indicator {
    display: flex;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(8px);
    }
    100% {
        transform: translateX(-50%) translateY(0);
    }
}

/* Mobile-only adjustments */
@media (max-width: 480px) {
    .section {
        padding: 12px;
    }
    .card {
        padding: 18px;
    }
    .photo {
        max-width: 92vw;
        max-height: 50vh;
        border-radius: 8px;
    }
    .scroll-indicator {
        width: 32px;
        height: 32px;
        border-radius: 16px;
    }
}
</style>