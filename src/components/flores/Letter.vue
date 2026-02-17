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
        <div v-if="currentLetter === 1">
          <h3>Lucía, hoy si era el día</h3>
          <p>
            Si todo ha ido como debería, estarás leyendo esto el 15 de febrero y 
            tras recibir tu ramito de flores. Bien como decía la nota que venía con él,
            no te ibas a librar de recibir uno pese a que esté lejos. Aunque me hubiera encantado
            poder ver la cara que sueles poner cuando recibes algo que no esperas, pero me puedo imaginar
            cómo ha sido 🤭.
          </p>

          <p>
            La primera vez te di una rosa y me dijiste que menos mal que no te había dado algo más grande,
            ya que te hubieras agobiado con él, pero hoy ya ha llegado el día de que recibas uno a tu altura. 
          </p>

          <p>
            Espero que te haya gustado, debería tener una temática de color rosa, como bien te gusta,
            y también tulipanes, como bien me dijiste en Tejeda. Me han ayudado las Olgas y Alvarito para que te llegue
            hasta tu casa, así que también agradeceles a ellos por haberlo recibido.
          </p>

          <p>
            También me hubiera encantado darte en mano esta carta, pero si te la hubiera dado antes de irte a La Palma,
            quizás no hubieras aguantado a abrirla hasta hoy. Pero si quieres que te la escriba a mano para que la tengas
            de recuerdo, puedo hacerlo si quieres. Y bueno, creo que me estoy enrollando mucho, así que voy directo al grano.
          </p>

          <p>
            Sé que no llevamos mucho tiempo, pero cada día me doy cuenta de la suerte que tuve de haberte conocido, sobre todo teniendo
            en cuenta que fue en un sitio en el que ninguno de los dos hubiera estado en condiciones normales.
          </p>

          <p>
            Con el tiempo me has ido conquistando y sorprendiendo cada vez más, me siento muy afortunado de tener la oportunidad de poder conocerte
            cada día un poco más y sobre todo poder compartir tiempo y experiencias contigo.
          </p>

          <p>
            Eres una persona que admiro mucho, por tu forma de ser, eres la mejor gymsys de todas, la mejor fotógrafa (Dtmf), la más bellezón y guapetona de todas, por tu sonrisa,
            tus ojos color café, tus rizos rubios, y sobre todo por cómo me has cuidado hasta el día de hoy. Eres una persona increible, y se que en este año de cambios para ti
            vas a lograr todo lo que te propongas, no tengo ninguna duda de eso. Como bien dijiste, el 2026 es el año del proceso, y va a ser un año increible para ti.
          </p>

          <p>
            Espero poder seguir compartiendo muchos momentos contigo, dar paseos bajo la lluvia, ser tu copiloto, cuando tengas frio, ser el que busque darte algo de calor,
            llevarte a comer a sitios guays, tomar cafés (y monsters) contigo, darte bocadillos de jamón, con suerte entrenar contigo algún día y que me insultes por el camino, 
            pero sobre todo hacerte sonreir cada día y poder ver esa sonrisa tan bonita que tienes. Siempre trataré de cuidarte y mimarte lo máximo posible. 
            Como suelen decir, si quieres que algo te dure, hay que cuidarlo.
          </p>

          <p>
            Podría seguir escribiendo cosas bonitas sobre ti durante horas, pero no quiero ser un pesado y así también guardarme algunas cosas todavía para el futuro,
            así que la parte sentimental la voy a dejar por aquí.
          </p>

          <p>
            Aún así la carta no se acaba aquí, el ramo es una parte de la sorpresa, aún puedes ver que queda un botón por desactivar.
            Este se desactivará el mismo día que llegaré a La Palma, pero te la acabaré dando en mano y así cerrar "El mes de Lucía" como se merece.
            Creo que te puedes imaginar qué puede ser esta última parte, te he dado alguna pista a lo largo del mes 😌.
          </p>

          <p>
            Y para cerrar esta carta, espero que hasta ahora todo te haya gustado mucho y como te he dicho en algún momento, no te agobies 
            si crees que me tienes que dar algo a cambio o preparar algo para mí, no es necesario.
            Este mes de febrero es para ti, Lucía, además tú también haces muchas más cosas de las que piensas por mí, así que disfruta cada momento.
            Para cerrar la carta, solo puedo desearte que disfrutes un montón mañana de los Indianos y que pases un gran día 💕💕💕.
          </p>

          <p class="signature">Con mucho cariño, Adrián "el flaquito".</p>
          
          <div class="continue-hint">
            <p>¿Hay algo más? 🤔</p>
            <button @click="closeLetter" class="continue-btn">Volver a cerrar la carta</button>
          </div>
        </div>

        <div v-else-if="currentLetter === 2">
          <h3>Para Lucía</h3>

          <p>
            Estoy escribiendo justo esto ahora día 14 de febrero, en poco mas de 20 min estaré camino a Tenerife para 
            porfin verte después de dos semanas muy largas. No se que acabaré escribiendo en esta carta, pero no es la única
            que vas a leer. Al final vas a ver un botón que hará que se cierre y te volverá a pedir la clave. Pero no es la misma,
            vas a recibir otro acertijo de los que tanto te gustan, y si lo resuelves, podrás volver a abrir la otra.
          </p>

          <p>
            ¿Cuando? Bueno, tu deja que el destino y el universo hagan su trabajo. Ese acertijo te llegará en el momento mas inesperado.
          </p>

          <p>
            Quien hubiera dicho en aquel día en casa de Iván, que estaría hoy escribiendote una carta. Algunas veces el destino es caprichoso, y 
            en esta caso nos ha juntando a ti y a mí, y la verdad es que no puedo estar mas feliz por ello. Tal ves no llevamos mucho tiempo, pero cada día me doy cuenta de la suerte que tuve de haberte conocido.
            Considero que eres uno de los regalos mas bonitos que he recibido en 2025 y posiblemente es bastante tiempo.
          </p>

          <p>
            Me hubiera encantando hoy haberte hecho algo mas especial, no se, tal ves darte un gran ramo de flores, de color rosa y con tulipanes, para poder
            ver tu cara de sorpresa al recibirlo, tirarte muchas fotos con él, mientras no sabes que decir jajajaja, y quizás para acabar llevarte a algún sitio
            para cenar algo distinto a lo que solemos comer, no se, quizás algo Italiano, asi porfin comes algo distinto a lo que estabas acostumbrada en Uganda 
            ( y viendo como es nuestra tradición bajo un paraguas) 
          </p>

          <p>
            Aunque bueno, hoy ha coincidido con el día de carnaval y también va a ser un plan totalmente distinto. Me vas a ver porfin de fiesta!! 
            seguro que es un gran día y lo pasamos genial. Me iba a poner algo mas sentimental, aunque eso ya queda reservado para la otra carta, ya 
            está todo escrito con ella. Puedo decir eso si, que me considero una persona muy afortunada al poder estar contigo de esta manera y 
            de haber vivido hasta el día de hoy montón de momentos bonitos contigo. Eres una gran persona Lucía, recuerda eso cada día.
          </p>

          <p>
            Y ahora mismo en 10 minutos tengo que irme, asi que voy a ir cerrando esta carta y te enviaré ahora un mensaje con el acertijo, a ver si 
            eres capaz de resolverlo. Aunque bueno, si has leido, es que lo has hecho jeje.
          </p>

          <p class="signature">Con mucho cariño, Adrián "el panda".</p>
          
          <div class="continue-hint">
            <p>¿Será que hay todavía más? 👀</p>
            <button @click="closeLetter" class="continue-btn">Volver a cerrar la carta</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      unlocked: false,
      password: '',
      currentHeight: 150,
      closedHeight: 150,
      currentLetter: parseInt(localStorage.getItem('currentLetter')) || 0,
      passwords: {
        2: ['delfin', 'Delfin', 'Delfín', 'delfín', 'zebra', 'Zebra', 'cebra', 'Cebra'],
        1: ['cafe', 'CAFE', 'Café', 'café']
      }
    }
  },
  mounted() {
    this.unlocked = false
  },
  methods: {
    openLetter() {
      if (this.open || !this.unlocked) return
      this.open = true

      this.$nextTick(() => {
        requestAnimationFrame(() => {
          this.currentHeight = this.$refs.content.scrollHeight
        })
      })
    },
    closeLetter() {
      this.open = false
      this.unlocked = false
      this.currentHeight = this.closedHeight
      this.password = ''
    },
    checkPassword() {
      const value = this.password.trim()
      
      // Comprobar si la contraseña coincide con alguna de las cartas no desbloqueadas
      for (let letterNum in this.passwords) {
        const validPasswords = this.passwords[letterNum]
        
        if (validPasswords.some(pwd => pwd === value || pwd.toLowerCase() === value.toLowerCase())) {
          this.currentLetter = parseInt(letterNum)
          localStorage.setItem('currentLetter', this.currentLetter)
          this.unlocked = true
          this.password = ''
          this.openLetter()
          return
        }
      }
      
      // Si no coincide con ninguna contraseña válida, limpiar el campo
      this.password = ''
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
  text-align: center;
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

.signature {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-style: italic;
  text-align: right;
  color: #444;
}

.continue-hint {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0,0,0,0.1);
  text-align: center;
}

.continue-hint p {
  font-style: italic;
  color: #666;
  margin-bottom: 1rem;
}

.continue-btn {
  padding: 10px 24px;
  background: linear-gradient(135deg, #e54863 0%, #a61c3c 100%);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(229, 72, 99, 0.3);
}

.continue-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(229, 72, 99, 0.4);
}

.continue-btn:active {
  transform: translateY(0);
}

</style>