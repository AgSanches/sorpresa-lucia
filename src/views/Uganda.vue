<script setup>
import UgandaFlag from '../components/uganda/UgandaFlag.vue'
import Liana from '../components/uganda/Liana.vue'
import SafariRoute from '../components/uganda/SafariRoute.vue'
import OnePageContent from '../components/uganda/UgandaLetter.vue'
import BonVoyage from '../components/uganda/BonVoyage.vue'

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

const firstPageSections = [
  {
    title: 'Uganda',
    subtitle: 'Donde la aventura empieza de verdad',
    paragraphs: [
      'Esta parte no pertenece a la sorpresa, pero como te gustó tanto la primera, he decidido incluirla y así desearte un feliz viaje. También algunos de los fotones que me vayas enviando, los pondré aquí 📷.'
    ]
  },
  {
    paragraphs: [
      'Por buena o mala suerte, no me verás aparecer de repente en el aeropuerto de Entebbe. Ojalá haber sido tu sherpa, fotógrafo personal y cuidador frente a los gorilas de montaña. Pero seguiré tus aventuras con muchas ganas 😌.'
    ]
  },
  {
    paragraphs: [
      'Espero que te saque una sonrisa esta carta ✨.'
    ]
  }
]

const firstPageImages = [
  { src: 'photos/uganda/gorila.png', alt: 'Gorila comiendo una planta', class: 'gorilla' },
  { src: 'photos/uganda/leon.png', alt: 'León comiendo una planta', class: 'leon' }
]

const secondPageSections = [
  {
    paragraphs: [
      'Disfruta muchísimo de Uganda, Luci. Es un viaje inolvidable. Vas a ver un montón de animales increíbles y paisajes preciosos. Ojalá consigas ver montón animales increibles ✨.',
      'Y encima… ¡ver gorilas de cerca! Eso va a ser una auténtica pasada. Eso sí, más les vale portarse bien. Prefiero no tener que viajar a Uganda a rescatarte y acabar peleandome con alguno de ellos 😡.',
      'Vive cada momento, guarda cada recuerdo. Este viaje se queda contigo para siempre. Y espero escuchar cada una de tus anécdotas a la vuelta 💕.'
    ]
  }
]

const secondPageImages = [
  { src: '/photos/uganda/elefante.png', alt: 'Elefante comiendo una planta', class: 'elefante' },
  { src: '/photos/uganda/chimpance.png', alt: 'Chimpancé comiendo una planta', class: 'chimpance' }
]
</script>

<template>
  <section class="animal-background">
    <UgandaFlag />

    <div class="overlay"></div>
    
    <OnePageContent :sections="firstPageSections" :images="firstPageImages">
          <Liana />
      </OnePageContent>

    <OnePageContent :sections="secondPageSections" :images="secondPageImages">
      <SafariRoute />
    </OnePageContent>

    <BonVoyage />
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
}

</style>