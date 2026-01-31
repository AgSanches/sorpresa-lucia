<script setup>
import UgandaFlag from '../components/uganda/UgandaFlag.vue'
import Liana from '../components/uganda/Liana.vue'
import SafariRoute from '../components/uganda/SafariRoute.vue'

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
</script>

<template>
  <section class="animal-background">
    <UgandaFlag />
    <Liana />

    <div class="overlay"></div>
    <div class="one-page-content">
      <section class="content">
        <h1>🦍 Uganda 🦍</h1>
        <h2 class="subtitle">Donde la aventura empieza de verdad</h2>
        <p>
          Esta parte no pertenece a la sorpresa,  
          pero como te gustó tanto la primera, he decidido incluirla 
          y así desearte un feliz viaje. 
          También algunas de los fotones que me vayas enviando, los pondré aquí.
        </p>
      </section>

      <section class="content">
        <p>
          Por buena o mala suerte, no me verás aparecer de repente en el aeropuerto de Entebbe.
          Ojalá haber sido tu sherpa, fotógrafo personal y cuidador frente a los gorilas de montaña.
          Pero seguiré tus aventuras con muchas ganas 😌.
        </p>
      </section>

      <section class="content">
        <p>
          Espero que te saque una sonrisa ✨
        </p>
      </section>
    </div>

    <div class="one-page-content">
      <SafariRoute />
      <section class="content">
      <p>
        Disfruta muchísimo de Uganda, Luci. Es un viaje inolvidable.
        Vas a ver un montón de animales increíbles y paisajes preciosos.
        Ojalá consigas ver el Top 5 del safari — ya los tienes localizados también aquí ✨.
      </p>
      <p>
        Y encima… ¡ver gorilas de cerca! Eso va a ser una auténtica pasada.
        Eso sí, más les vale portarse bien 😅
        Prefiero no tener que viajar a Uganda a rescatarte y 
        acabar peleandome con alguno de ellos.
      </p>
      <p>
        Vive cada momento, guarda cada recuerdo.
        Este viaje se queda contigo para siempre. 
        Y espero escuchar cada una de tus anécdotas a la vuelta. 💕
      </p>
    </section>
    </div>
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

.one-page-content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.content {
  position: relative;
  z-index: 2;
  max-width: 640px;
  color: #fff;
  text-align: center;
}

.hero h1 {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0,0,0,0.6);
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

.section-content {
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.section-content h1,
.section-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-weight: bold;
  text-align: center;
}

.section-content p {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 1.5rem;
  text-align: justify;
}

/* Sección Bienvenida - Sabana Dorada */
.welcome-section {
  background: linear-gradient(135deg, #D4A76A 0%, #E5C17E 25%, #F4E4C1 50%, #E5C17E 75%, #D4A76A 100%);
  background-size: 400% 400%;
  animation: gradientMove 15s ease infinite;
}

/* Sección Aventura - Sabana con Acacias */
.savanna-section {
  background: linear-gradient(to bottom, #87CEEB 0%, #FDB462 40%, #E5C17E 70%, #8B6914 100%);
  position: relative;
}

.savanna-section::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 50px,
    rgba(139, 105, 20, 0.1) 50px,
    rgba(139, 105, 20, 0.1) 52px
  );
}

/* Sección Gorilas - Selva Verde */
.jungle-section {
  background: linear-gradient(135deg, #1a5f3f 0%, #2d7a4f 25%, #4a9c68 50%, #2d7a4f 75%, #1a5f3f 100%);
  background-size: 400% 400%;
  animation: gradientMove 20s ease infinite;
}

.jungle-section .section-content {
  background: rgba(255, 255, 255, 0.92);
}

/* Sección Atardecer - Cielo Naranja/Rojo */
.sunset-section {
  background: linear-gradient(to bottom, 
    #FF6B6B 0%, 
    #FF8E53 20%, 
    #FFA04D 40%, 
    #FFB84D 60%, 
    #E5A35C 80%, 
    #8B6914 100%
  );
}

/* Sección Río - Tonos Azul Verdoso */
.river-section {
  background: linear-gradient(135deg, #4A90A4 0%, #5FA9B8 25%, #74C2C9 50%, #5FA9B8 75%, #4A90A4 100%);
  background-size: 400% 400%;
  animation: gradientMove 18s ease infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 2rem 1rem;
  }
  
  .section-content {
    padding: 2rem;
  }
  
  .section-content h1,
  .section-content h2 {
    font-size: 2rem;
  }
  
  .section-content p {
    font-size: 1.1rem;
    text-align: left;
  }
}
</style>
