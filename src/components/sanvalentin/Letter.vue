<template>
  <section class="wrapper">
    <div v-if="!unlocked" class="password-box">
      <input
        v-model="password"
        placeholder="Lo sabrás pronto…"
        @keyup.enter="checkPassword"
      />
    </div>

    <div
      ref="letter"
      class="letter"
      :class="{ open }"
      :style="{ height: currentHeight + 'px' }"
      @click="openLetter"
    >
      <div class="flap"></div>

    <div class="seal" :class="{ broken: open }">
      <svg viewBox="0 0 100 100" class="seal-svg">
        <defs>
          <radialGradient id="waxGradient" cx="35%" cy="30%">
            <stop offset="0%" stop-color="#ffb3c1"/>
            <stop offset="60%" stop-color="#e54863"/>
            <stop offset="100%" stop-color="#a61c3c"/>
          </radialGradient>
        </defs>

        <path
          class="half left"
          fill="url(#waxGradient)"
          d="M50 82
            C20 60, 8 42, 25 26
            C38 12, 50 20, 50 32
            L50 82Z"
        />

        <path
          class="half right"
          fill="url(#waxGradient)"
          d="M50 82
            L50 32
            C50 20, 62 12, 75 26
            C92 42, 80 60, 50 82Z"
        />
      </svg>
    </div>

    <div ref="content" class="content">
      <h3>Bon Voyage</h3>
      <p>
        Este mensaje solo se abrirá cuando tú lo decidas 💛  
        Y cuando lo haga, ocupará exactamente el espacio que necesite.
        Este mensaje solo se abrirá cuando tú lo decidas 💛  
        Y cuando lo haga, ocupará exactamente el espacio que necesite.
        Este mensaje solo se abrirá cuando tú lo decidas 💛  
        Y cuando lo haga, ocupará exactamente el espacio que necesite.
        Este mensaje solo se abrirá cuando tú lo decidas 💛  
        Y cuando lo haga, ocupará exactamente el espacio que necesite.
        Este mensaje solo se abrirá cuando tú lo decidas 💛  
        Y cuando lo haga, ocupará exactamente el espacio que necesite.
        Este mensaje solo se abrirá cuando tú lo decidas 💛  
        Y cuando lo haga, ocupará exactamente el espacio que necesite.
        Este mensaje solo se abrirá cuando tú lo decidas 💛  
        Y cuando lo haga, ocupará exactamente el espacio que necesite.
      </p>
    </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      unlocked: localStorage.getItem('letterUnlocked') === 'true',
      password: '',
      currentHeight: 150,
      closedHeight: 150,
      validPasswords: ['cafe', 'CAFE', 'Café', 'café']
    }
  },
  methods: {
    openLetter() {
      if (this.open || !this.unlocked) return
      this.open = true

      this.$nextTick(() => {
        requestAnimationFrame(() => {
          this.currentHeight = this.$refs.content.scrollHeight + 80
        })
      })
    },
    checkPassword() {
      const value = this.password.trim().toLowerCase()
      if (this.validPasswords.includes(value)) {
        this.unlocked = true
        localStorage.setItem('letterUnlocked', 'true')
        this.openLetter()
      } else {
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 14px;
  padding-bottom: 2rem;
}

.letter {
  width: 320px;
  background: #fdfbf7;
  border-radius: 14px;
  box-shadow: 0 12px 25px rgba(0,0,0,.15);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  height: 150px;
  transition: height 2s cubic-bezier(.4,0,.2,1);
}

.flap {
  position: absolute;
  top: 0;
  width: 100%;
  height: 90px;
  background: #eee8d8;
  clip-path: polygon(0 0, 100% 0, 50% 70%);
  transform-origin: top;
  transition: transform .6s ease;
  z-index: 2;
}

.letter.open .flap {
  transform: rotateX(180deg);
}

.seal {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  z-index: 3;
  pointer-events: none;
}

.seal-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 6px 10px rgba(0,0,0,.4));
}

.half {
  transform-origin: center;
  transition: transform .6s cubic-bezier(.2,.7,.3,1), opacity .4s ease;
}

.letter.open .half.left {
  transform: translateX(-14px) rotate(-18deg);
  opacity: 0;
}

.letter.open .half.right {
  transform: translateX(14px) rotate(18deg);
  opacity: 0;
}

.content {
  padding: 2rem 1.5rem 2rem;
  opacity: 0;
  transition: opacity .4s ease .3s;
}

.letter.open .content {
  opacity: 1;
}

.password-box {
  padding: 14px 18px;
  border-radius: 26px;

  background:
    linear-gradient(
      to bottom,
      rgba(255,255,255,0.92),
      rgba(250,245,235,0.9)
    );

  box-shadow:
    0 10px 25px rgba(0,0,0,0.18),
    inset 0 1px 0 rgba(255,255,255,0.8);

  backdrop-filter: blur(6px);
}

.password-box::before {
  content: "🔐";
  display: block;
  text-align: center;
  margin-bottom: 6px;
  opacity: .8;
}

.password-box input {
  width: 220px;
  border: none;
  background: transparent;
  outline: none;
  text-align: center;
  font-style: italic;
  color: #5b3b2e;
}

</style>
