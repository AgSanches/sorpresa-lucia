<template>
  <div class="viewport">
    <div class="san-valentin-bg"></div>

    <ContentCard 
      title="Hoy comienza"
      :paragraphs="[
        'Después de tanto tiempo esperando y planeando, ha llegado el primer día de tu sorpresa. Y que mejor día, que el día de San Valentín 💕.',
        'Tras dos semanas muy largas, hoy porfin podré volver a verte y darte un gran abrazo. Eso si, hoy no es el gran día, hoy es solo un pequeño adelanto de lo que te espera en este mes. Porque en un día como hoy de carnaval, no podré darte lo que he estado preparando para ti.'
      ]"
    />

    <ContentCard
      title="Sorpresa para ti"
      :paragraphs="[
        'Por eso hoy, no te he preparado nada tan sentimental, pero aunque creas que febrero es un mes muy corto, te aseguro que vas a recibir muchas cosas bonitas, y espero que disfrutes cada una de ellas tanto como yo preparándolas para ti.',
        'Hoy desgraciadamente tu sorpresa va a ser verme a mi, tener que ver mi fea cara y tener que aguantarme. Almenos podrás volver a ver tremendas piernazas jeje.'
      ]"
    />

    <ContentCard
      title="Para un bellezón" 
      :paragraphs="[
        'Eso si, a partir de hoy, comienza tu sorpresa. Lo único que te pido es que no te estreses con ella, no tienes que pensar en que me tienes que dar algo cambio o prepararme algo, ni nada por el estilo, solo quiero que disfrutes de ella.',
        'Aunque pienses que solo hago estas cosas por ti, lo hago por mi también, porque me encanta prepararte cosas bonitas y ver tu cara de felicidad al recibirlas.'
      ]"
    />

    <ContentCard 
      title="Solo queda una última cosa..."
      :paragraphs="['Para que puedas seguir con tu sorpresa 😳']"
    />

    <ContentCard
    eyebrow="Tú eliges"
    title="¿Quieres ser mi San Valentín?"
    :class="{ exit: leaving }"
    >
    <div class="actions">
        <button class="btn primary" @click="accept">💕 Sí, claro</button>
        <button class="btn secondary" @click="accept">🤭 Obvio que sí</button>
    </div>

    <p class="hint">
        Creías que te iba a dejar decir que no 🙂‍↔️
    </p>
    </ContentCard>

    <div class="hearts" v-if="showHearts">
        <span v-for="n in 8" :key="n">💖</span>
    </div>
  </div>
</template>



<script>
import ContentCard from '@/components/sanvalentin/ContentCard.vue'

export default {
  name: 'SanValentin',
  components: {
    ContentCard
  },
  data() {
    return {
      leaving: false,
      showHearts: false
    }
  },
  methods: {
    accept() {
      this.leaving = true
      this.showHearts = true
      localStorage.setItem('sanValentin', 'true')

      setTimeout(() => {
        this.$router.push('/blumen')
      }, 800)
    }
  }
}
</script>

<style scoped>
.san-valentin-bg {
  position: fixed;
  inset: 0;
  background: url("/photos/sanvalentin/background.jpg") center / cover no-repeat;
  animation: bgBlur 3s ease forwards;
  transform: scale(1);
  animation-delay: 1s;
}

.san-valentin-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 182, 193, 0);
  animation: pinkFade 3s ease forwards;
}

@keyframes bgBlur {
  from { filter: blur(0px); transform: scale(1); }
  to   { filter: blur(10px); transform: scale(1.05); }
}

@keyframes pinkFade {
  to { background: rgba(255, 182, 193, 0.25); }
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 32px;
}

.btn {
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,.15);
}

.primary {
  background: #d28fa3;
  color: white;
}

.secondary {
  background: #f3e6ea;
  color: #8b4a5a;
}

.hint {
  margin-top: 24px;
  font-size: .9rem;
  color: #777;
  opacity: .85;
}

.exit {
  animation: acceptOut .5s ease forwards;
}

@keyframes acceptOut {
  0% { opacity: 1; transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { opacity: 0; transform: scale(.95); }
}

.hearts {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 20;
}

.hearts span {
  position: absolute;
  bottom: 45%;
  left: 50%;
  font-size: 2rem;
  animation: floatUp .5s ease forwards;
}

.hearts span:nth-child(1) { margin-left: -40px; }
.hearts span:nth-child(2) { margin-left: -20px; animation-delay: .05s; }
.hearts span:nth-child(3) { margin-left: 0; animation-delay: .1s; }
.hearts span:nth-child(4) { margin-left: 20px; animation-delay: .15s; }
.hearts span:nth-child(5) { margin-left: 40px; animation-delay: .2s; }

@keyframes floatUp {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-80px) scale(1.3);
  }
}
</style>
