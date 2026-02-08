<template>
    <div class="flores-container">
        <div class="flores-bg"></div>

        <FloresCard>
            <h1>Tu primera sorpresa 💕</h1>
            <p>
                Si estas aquí es porque has aceptado ser mi San Valentín, 
                sigo sin saber como he tenido la suerte de haberte conocido y ... de que hayas aceptado, 
                no se como te he engañado para que lo hicieras 🤭.
            </p>
            <p>
                Aquí empieza tu sorpresa, la primera de muchas. A continuación te dejo una carta, 
                al contrario que en la página de San Valentín, esta parte si que tiene un toque sentimental.
                Ya sabes Luci, siempre serás protagonista y no espectadora.
            </p>
        </FloresCard>

        <FloresCard>
            <h1>¿Cual será? 🙂‍↔️</h1>
            <p>
                Pero para abrirla, necesitas de una contraseña, posiblemente estes 
                leyendo esto por primera vez, hoy día 14 de febrero. 
                Hoy tal vez la obtengas o tal vez no, quien sabe 😳.
            </p>
            <p>
                Si no la obtienes hoy, no te preocupes, quizás hoy no era el día 
                que tenía pensado para que la obtuvieras, 
                pero seguro que en algún momento de este mes, volverás aquí y sabrás que poner.
            </p>
        </FloresCard>
        
        <Letter/>
    </div>
</template>

<script>
import Letter from '../components/flores/Letter.vue';
import FloresCard from '../components/flores/FloresCard.vue';

export default {
    name: 'Flores',
    components: {
        Letter,
        FloresCard
    }
}
</script>

<style scoped>
.flores-bg {
  position: fixed;
  inset: 0;
  background: url("/photos/flores/background.png") center / cover no-repeat;
  filter: saturate(0.9) contrast(0.95);
}

.flores-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center,
      rgba(255,255,255,0.55) 0%,
      rgba(255,255,255,0.35) 40%,
      rgba(255,255,255,0.25) 70%
    ),
    rgba(255,255,255,0.15);
}

</style>