<script setup>
import Section from './components/Section.vue'
import OpeningFlower from "./components/OpeningFlower.vue";
import ClosingSection from "./components/ClosingSection.vue";

const base = import.meta.env.BASE_URL || '/'
</script>

<template>
  <div class="viewport">
    <OpeningFlower></OpeningFlower>

    <Section
      title="Hola Lu"
      text="Esto es una pequeña sorpresa para ti. Continúa desplazándote para saber mas."
      :image="base + 'photos/page1.jpeg'"
    />

    <Section
      title="Aún queda"
      text="Esto es solo un adelanto, pero tendrás que esperar un poco mas para verlo al completo. Paciencia jeje. Igual que el dia que montamos en moto"
      :image="base + 'photos/page2.jpeg'"
    />

    <Section
      title="Tú sabrás"
      text="En qué momento será y sino ya te lo recordaré. Habrá al menos un día en el que vuelvas aquí… y algo nuevo te estará esperando. Como este café que me espera bien frio."
      :image="base + 'photos/page3.jpeg'"
    />

    <Section
      title="Te conozco"
      text="Y sé que si te lo hubiera dado en mano, lo habrías abierto mucho antes del momento que tenía en mente y hubieras puesto una sonrisa como en la de esta foto al verlo jeje."
      :image="base + 'photos/page4.jpeg'"
    />

    <Section
      title="Espero"
      text="Que te guste, y que no te parezca muy cutre todo esto jajaja. Espero que esten a la altura de las fotos que sacas con la cámara o de lo bella que sales en ellas."
      :image="base + 'photos/page5.jpeg'"
    />

    <Section
      title="Ya sabes"
      text="Mereces todo lo bonito que recibas de la vida y mucho mas. Espero que este pequeño detalle te haya sacado una sonrisa, igual que estos pijamas jiji."
      :image="base + 'photos/page6.jpeg'"
    />

    <Section
      title="Eso si..."
      text="Se algo que no te gusta para nada, esta chaqueta... Pero bueno, no se puede tener todo en esta vida jeje."
      :image="base + 'photos/page7.jpeg'"
    />

    <Section
      title="Para cerrar"
      text="quiero desear que hoy has disfrutado de un gran día, 
      a partir de mañana se te van a ir acumulando muchos momentos bonitos. 
      Febrero te será un mes bonito."
      :image="base + 'photos/page8.jpeg'"
    />

    <ClosingSection></ClosingSection>

  </div>
</template>

<style scoped>
html, body, #app { height:100%; }
:global(body) { margin:0 !important; }
.viewport { height:100vh; width: 100vw;overflow-y:auto; scroll-snap-type:y mandatory; -webkit-overflow-scrolling:touch; }
</style>
