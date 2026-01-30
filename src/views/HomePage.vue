<script setup>
const buttons = [
  { id: 1, label: 'Hola Lu ❤️', route: '/HelloLu', active: true },
  { id: 2, label: '1 - ?????', route: '/Uganda', active: false },
  { id: 3, label: '2 - ?????', route: '/page3', active: false },
  { id: 4, label: '3 - ?????', route: '/page4', active: false },
  { id: 5, label: '4 - ?????', route: '/page5', active: false }
]
</script>

<template>
  <div class="homepage">
    <div class="overlay" />

    <div class="content">
      <div class="welcome-text">
        <h1>Bienvenida Luci</h1>
        <p>
          Cada botón te llevará a una parte de la sorpresa. 
          Espero que cada una sea bonita. Esta página está ambientada en un atardecer, que sé que te encantan.
          ¿Y qué mejor que este fondo?
        </p>
      </div>

      <template v-for="button in buttons" :key="button.id">
        <router-link
          v-if="button.active"
          :to="button.route"
          class="sunset-btn"
        >
          {{ button.label }}
        </router-link>

        <span
          v-else
          class="sunset-btn inactive"
        >
          {{ button.label }}
        </span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.homepage {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url('/photos/homepage/background.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.40);
}

.content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 1.2s ease;
}

.welcome-text {
  text-align: center;
  color: white;
  margin-bottom: 2.5rem;
  max-width: 420px;
  padding: 0 20px;
}

.welcome-text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.welcome-text p {
  font-size: 1.1rem;
  line-height: 1.2;
  opacity: 0.95;
}

.sunset-btn {
  padding: 14px 32px;
  border-radius: 999px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;

  background: rgba(255, 120, 80, 0.75);
  backdrop-filter: blur(8px);

  box-shadow: 0 8px 25px rgba(0,0,0,0.25);
  transition: all .25s ease;
}

.sunset-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 35px rgba(0,0,0,0.4);
}

.sunset-btn:active {
  transform: scale(0.97);
}

.inactive {
  background: rgba(200, 200, 200, 0.25);
  backdrop-filter: blur(4px);
  cursor: default;
  opacity: 0.7;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
