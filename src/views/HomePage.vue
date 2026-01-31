<script setup>
import { ref, computed } from 'vue'

const baseButtons = [
  { id: 1, label: 'Hola Lu ❤️', route: '/HelloLu' },
  { id: 2, label: '1 - ?????', route: '/Uganda' },
  { id: 3, label: '2 - ?????', route: '/SanValentin' },
  { id: 4, label: '3 - ?????', route: '/Ramito' },
  { id: 5, label: '4 - ?????', route: '/Experiencia' }
]

const schedule = [
  { id: 2, label: 'Uganda 🇺🇬',  from: '2026-02-01T00:00:00'},
  { id: 3, label: 'San Valentín ❤️', from: '2026-02-14T00:00:00'},
  { id: 4, label: 'Ramito 💐',   from: '2026-02-15T00:00:00'},
  { id: 5, label: 'Experiencia 🎉',    from: '2026-02-27T00:00:00'}
]

function getCanaryDate(date = new Date()) {
  return new Date(
    new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Atlantic/Canary',
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date)
  )
}

const buttons = computed(() => {
  const now = getCanaryDate().getTime()

  return baseButtons.map(b => {
    const match = schedule.find(s =>
      s.id === b.id &&
      now >= new Date(s.from).getTime()
    )

    return {
      ...b,
      active: !!match || b.id === 1,
      label: match?.label ?? b.label
    }
  })
})


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
