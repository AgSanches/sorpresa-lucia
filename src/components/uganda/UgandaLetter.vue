<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  },
  images: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="one-page-content">
    <img
      v-for="image in images"
      :key="image.src"
      :src="image.src"
      :alt="image.alt"
      :class="['animal', image.class]"
    />

    <section 
      v-for="(section, index) in sections" 
      :key="index"
      class="content"
    >
      <h1 v-if="section.title">{{ section.title }}</h1>
      <h2 v-if="section.subtitle" class="subtitle">{{ section.subtitle }}</h2>
      <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex">
        {{ paragraph }}
      </p>
    </section>

    <slot />
  </div>
</template>

<style scoped>
.one-page-content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.animal {
  position: absolute;
  z-index: 3;
  pointer-events: none;
  -webkit-mask-image: radial-gradient(
    circle,
    rgba(0,0,0,1) 70%,
    rgba(0,0,0,0) 100%
  );
  mask-image: radial-gradient(
    circle,
    rgba(0,0,0,1) 70%,
    rgba(0,0,0,0) 100%
  );
}

.gorilla {
  width: 120px;
  right: 0px;
  top: 25px;
  transform: rotate(-6deg);
}

.leon {
  width: 120px;
  right: 0px;
  bottom: 25px;
}

.elefante {
  width: 140px;
  left: 15px;
  top: 15px;
}

.elefante::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 60%;
  height: 12px;
  background: rgba(0,0,0,0.35);
  border-radius: 50%;
  transform: translateX(-50%);
  filter: blur(8px);
}

.chimpance {
  width: 120px;
  left: 15px;
  bottom: 15px;
}

.content {
  position: relative;
  z-index: 4;
  max-width: 640px;
  color: #fff;
  text-align: center;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  font-style: italic;
}

@media (max-width: 768px) {
  .content {
    max-width: 85%;
  }

  .content h1 {
    font-size: 2rem;
  }
  
  .content p {
    font-size: 1.1rem;
  }
}
</style>
