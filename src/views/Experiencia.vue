<template>
    <div class="viewport">
        <div class="experiencia-bg"></div>

        <ExperiencieText
            title="El gran momento 💕"
            :text="[
                'Toda sorpresa tiene un final y has llegado al final de ella. Espero que hayas disfrutado cada parte ella y esta aunque llegue a su final, es porque ahora viene la parte mas bonita de todas.'
            ]"
        ></ExperiencieText>

        <ExperiencieText
            title="He estado escuchándote 🙈"
            :text="[
                'He estado escuchando cada cosa que me has dicho en todo este tiempo, y creo que he podido entender que es lo que realmente te gustaría hacer. Todo ello tiene algo en común y por ello he usado San Valentín y este mes de febrero como excusa para ello.',
                'Asi que toda la sorpresa se condensa en esta parte.'
            ]"
        ></ExperiencieText>

        <ExperiencieText
            title="Te la he liado... 😳"
            :text="[
                'Cuando estabamos empezando a salir por asi decirlo, recuerdo que me dijiste, &quot;Adrián, no me la lies&quot;, y yo te dije, &quot;Lucia, no te preocupes, no te la voy a liar&quot;. Y bueno creo que te he mentido un poco acerca de ello...'
            ]"
        ></ExperiencieText>

        <ExperiencieText
            title="Toda esta sorpresa 💕"
            :text="[
                'Ya has podido ver como te la he liado con esta sorpresa, te he escrito cartas, te he hecho esperar para que vieras los distintos apartados de la web, encima con contraseñas algunas de ellas. Para colmo te la he liado enviandote un ramito de flores a casa y encima para rematar, ahora viene posiblemente lo peor. La experiencia.'            
            ]"
        ></ExperiencieText>

        <ExperiencieText
            title="Un regalo especial 🎁"
            :text="[
                'No se si te acordarás, pero cuando te dí los regalos de reyes, te dije que el próximo regalo que te daría no sería material y por ello quiero cumplir mi palabra.'
            ]"
        ></ExperiencieText>

        <ExperiencieText
            title="Una pista final 🐬"
            :text="[
                'Si estas atenta a &quot;los delfines&quot;, en cierta manera te mentí en una de esas líneas. Posiblemente si vuelves a leer esa carta, sabrás cual será la experiencia que creo que vas a escoger. Aunque bueno, ya te lo confirmaré yo en persona.'
            ]"
        ></ExperiencieText>

        <ExperiencieText
            title="Elige tu experiencia ✨"
            :text="[
                'A continuación vas a ver una serie de cajas que son las distintas opciones que puedes elegir, creo que te puedes imaginar lo que hay dentro de cada una de ellas. Aunque realmente creo que se cual vas a escoger... 😳'
            ]"
        ></ExperiencieText>
    </div>
</template>

<script>
import ExperienceContent from '@/components/experiencia/ExperienceContent.vue';
import ExperiencieText from '@/components/experiencia/ExperiencieText.vue';

export default {
    name: 'Experiencia',
    components: {
        ExperienceContent,
        ExperiencieText
    }
}
</script>

<style scoped>

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url('/photos/experiencia/grain.png');
  background-repeat: repeat;
  opacity: 0.04;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.experiencia-bg {
  position: fixed;
  inset: 0;
  background: url("/photos/experiencia/background.png") center / cover no-repeat;
  filter: saturate(0.85) contrast(0.95);
}

.experiencia-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(0,0,0,0.25) 0%,
    rgba(0,0,0,0.55) 70%,
    rgba(0,0,0,0.75) 100%
  );
}
</style>