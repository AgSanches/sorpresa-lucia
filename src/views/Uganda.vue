<script setup>
import Section from '../components/Section.vue'

const base = import.meta.env.BASE_URL || '/'
</script>

<template>
  <div class="viewport">
    <Section
      title="Página 2"
      text="Aquí puedes añadir el contenido de tu segunda página."
      :image="base + 'photos/page1.jpeg'"
    />

    <!-- Añade más secciones según necesites -->
  </div>
</template>

<style scoped>
.viewport { 
  height: 100vh; 
  width: 100vw;
  overflow-y: auto; 
  scroll-snap-type: y mandatory; 
  -webkit-overflow-scrolling: touch; 
}
</style>
