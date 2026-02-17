<template>
    <section class="section">
        <div :class="['card', 'fullscreen']">
        <h1 class="fade-item" style="--delay: 0s">{{ title }}</h1>

        <p 
            v-for="(paragraph, index) in textList"
            :key="index"
            class="lead fade-item"
            :style="{ '--delay': `${0.4 + index * 0.3}s` }"
        >
            {{ paragraph }}
        </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ExperiencieText',
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: [String, Array],
            required: true
        }
    },
    computed: {
        textList() {
            return Array.isArray(this.text) ? this.text : [this.text]
        }
    }
}
</script>

<style scoped>
.section {
    scroll-snap-align: start;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: fadeUp 1.2s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  position: relative;
}

.card {
    border-radius: 14px;
    text-align: center;
    width: 100%;
    background: rgba(15,15,18,0.55);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
}

h1, h2 {
    color: #ff6b8a;
    text-shadow:
        0 4px 20px rgba(255, 80, 120, 0.4),
        0 2px 10px rgba(0,0,0,0.6);
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: 1.5px;
}

.lead {
    color: #f5f5f5;
    font-size: 1.1rem;
    padding: 1rem;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    font-family: 'Lato', sans-serif;
    line-height: 1.3;
}

p + p {
  margin-top: 1.4rem;
}

.fade-item {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(6px);
  animation: reveal 0.8s ease forwards;
  animation-delay: var(--delay);
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.card.fullscreen {
  position: fixed;
  inset: 0;
  height: 100vh;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.9s cubic-bezier(.77,0,.18,1);
  padding: 0;
}

</style>