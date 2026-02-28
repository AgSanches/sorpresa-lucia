<script>
import ExperienceContent from '@/components/experiencia/ExperienceContent.vue';
import ExperiencieText from '@/components/experiencia/ExperiencieText.vue';

const base = import.meta.env.BASE_URL || '/'

export default {
    name: 'Experiencia',
    components: {
        ExperienceContent,
        ExperiencieText
    },
    data() {
        return {
            base
        }
    }
}
</script>

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
            title="Ay Luci 💕"
            :text="[
                'Ya has podido ver como te la he liado con esta sorpresa, te he escrito cartas, te he hecho esperar para que vieras los distintos apartados de la web, encima con contraseñas algunas de ellas. Para colmo te la he liado enviandote un ramito de flores a casa y encima para rematar, ahora viene posiblemente lo peor. La experiencia.'            
            ]"
        ></ExperiencieText>

        <ExperiencieText
            title="Para los dos 🎁"
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

        <ExperienceContent
            title="Hotel Princess 🌴"
            :text="[
                'Como primera opción, te propongo uno de tus hoteles favoritos. El Hotel Princess.',
                'Todo un finde semana con todo incluido 🤭.'
            ]"
            :imageSrc="base + 'photos/experiencia/princess.webp'"
        ></ExperienceContent>

        <ExperienceContent
            title="Canarias 🌊"
            :text="[
                'Como segunda opción, ya empezamos a coger aviones, y que mejor que las islas que te faltan, además de Lanzarote.',
                'En esta opción, te propongo un finde semana ya sea en El Hierro, La Gomera o Lanzarote.',
                'En este caso, te incluyo el vuelo, el hotel y el coche de alquiler.'
            ]"
            :imageSrc="base + 'photos/experiencia/canarias.png'"
        ></ExperienceContent>

        <ExperiencieText
            title="¿Qué te ha parecido? 🤭"
            :text="[
                'Aunque creas que eso es todo, ahora vienen las opciones premium.',
                'Es importante comentar que las opciones a partir de ahora no podré al 100%, pero intentaré cubrir lo máximo posible.'
            ]"
        ></ExperiencieText>

        <ExperienceContent
            title="Roma ⛪️"
            :text="[
                'Me has hablado varias veces de Italia, asi que mejor que ir a Roma?',
                'En esta opción, te propongo una escapada. Habría que mirar cuantos días. Algo que doy por seguro, es que te invitaré a una buena cena y un gelato en el centro de Roma.'
            ]"
            :imageSrc="base + 'photos/experiencia/roma.png'"
        ></ExperienceContent>

        <ExperienceContent
            title="Florencia 🎨"
            :text="[
                'Seguimos en Italia, pero esta vez Florencia.',
                'Se dice que es de las ciudades mas bonitas de Italia, y que mejor que llevar al mayor bellezón de todos 🤭',
                'Aquí te llevaré a ver el atardecer desde el Piazzale Michelangelo, a visitar la Galería Uffizi, a ver el David de Miguel Ángel y a pasear por el centro de Florencia.'
            ]"
            :imageSrc="base + 'photos/experiencia/florencia.png'"
        ></ExperienceContent>

        <ExperiencieText
            title="¿Crees que es todo? 🙈"
            :text="[
                'Pues no Lucía, aunque son opciones increibles tengo mas opciones en mente. Son experiencias más locas.',
                'Aún asi te las propongo, a ver que te parecen 👀.'
            ]"
        ></ExperiencieText>

        <ExperienceContent
            title="La Toscana 🌻"
            :text="[
                'Ahora empieza una ruta por la Toscana, aquí también visitaremos Florencia que está incluida en esta ruta.',
                'A parte de ello, habrá montón de pueblos y ciudades mas que visitar. Además de que esta ruta es famosa por unos paisajes preciosos.',
                'Y no solo eso... como bien pensaste en lo que te gusta beber, también podremos visitar alguna bodega y que pruebes sus vinos.'
            ]"
            :imageSrc="base + 'photos/experiencia/toscana.png'"
        ></ExperienceContent>

        <ExperienceContent
            title="Dolomitas 🏔"
            :text="[
                '¿Cuál sino para acabar?',
                'Uno de tus viajes mas deseados, ir a las Dolomitas. No te voy a negar que hace un par de años también lo tuve en mente, pero no se ha dado.',
                'Por ello también te lo propongo, a diferencia del resto de opciones, esta es mas aventura que cualquiera de ellas.'
            ]"
            :imageSrc="base + 'photos/experiencia/dolomitas.png'"
        ></ExperienceContent>

        <ExperiencieText
            title="Hasta aquí has llegado"
            :text="[
                'Ahora solo te queda elegir una de las opciones, aunque creo que se cual tienes en mente principalmente... 😳',
                'Aún asi, estoy abierto a otras opciones, se cuales son las otras opciones que te gustaría llevar a cabo, así que si quieres otra experiencia, solo tienes que decírmelo y lo organizamos.'
            ]"
        ></ExperiencieText>

        <ExperiencieText
            title="Ahora toca disfrutarlo"
            :text="[
                'También es importante Lucía, se que no tengo que hacer nada de esto por ti, pero quiero hacerlo, no me preguntes el motivo, simplemente quiero hacerlo, y quiero disfrutarlo contigo.',
                'Y con esto acaba tu mes, espero que lo hayas disfrutado y te haya gustado cada parte. Me ha hecho mucha ilusión haberlo preparado para ti.'
            ]"
        ></ExperiencieText>
    </div>
</template>

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