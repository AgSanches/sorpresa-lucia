<template>
    <section class="section">
        <div class="card">
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

.section::before {
  content: "❦";
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2.5rem;
  color: #d4a574;
  opacity: 0.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.section::after {
  content: "❦";
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 2.5rem;
  color: #d4a574;
  opacity: 0.4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transform: rotate(180deg);
}

.card {
    border-radius: 16px;
    text-align: center;
    width: 100%;
    max-width: 900px;
    padding: 3.5rem 2.5rem;
    background: linear-gradient(
        160deg,
        rgba(250, 245, 235, 0.95) 0%,
        rgba(255, 248, 240, 0.92) 50%,
        rgba(245, 235, 220, 0.95) 100%
    );
    backdrop-filter: blur(12px);
    border: 3px solid transparent;
    background-clip: padding-box;
    position: relative;
    box-shadow: 
        0 10px 40px rgba(139, 90, 43, 0.25),
        0 20px 60px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.8),
        inset 0 -1px 0 rgba(212, 165, 116, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 16px;
    padding: 3px;
    background: linear-gradient(
        135deg,
        #d4a574 0%,
        #c19a6b 25%,
        #8b5a2b 50%,
        #c19a6b 75%,
        #d4a574 100%
    );
    -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
}

.card::after {
    content: "✦ · ✦ · ✦";
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    color: #c19a6b;
    font-size: 0.9rem;
    letter-spacing: 0.5rem;
    opacity: 0.5;
}

.card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 
        0 15px 50px rgba(139, 90, 43, 0.35),
        0 25px 80px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.9),
        inset 0 -1px 0 rgba(212, 165, 116, 0.3);
}

h1, h2 {
    color: #8b5a2b;
    text-shadow:
        0 2px 4px rgba(139, 90, 43, 0.15),
        0 1px 2px rgba(212, 165, 116, 0.3);
    font-size: clamp(2rem, 4vw, 3rem);
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 2rem;
    position: relative;
    padding-bottom: 1rem;
}

h1::after {
    content: "~";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #d4a574;
    font-size: 1.5rem;
}

.lead {
    color: #5a4a3a;
    font-size: 1.15rem;
    padding: 0 1.5rem;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    font-family: 'Crimson Text', 'Georgia', serif;
    line-height: 1.8;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
    font-weight: 400;
}

p + p {
  margin-top: 1.8rem;
  padding-top: 1.8rem;
  border-top: 1px solid rgba(212, 165, 116, 0.2);
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

@media (max-width: 768px) {
  .card {
    padding: 2.5rem 1.8rem;
    max-width: 95%;
  }
  
  .card::after {
    font-size: 0.75rem;
    letter-spacing: 0.3rem;
  }
  
  .lead {
    font-size: 1.05rem;
    padding: 0 1rem;
  }
}

</style>