<template>
  <section class="bon-voyage">
    <h2>Bon Voyage ✨</h2>
    <p class="closing">
      Cada foto es un momento especial para ti de este viaje.
    </p>

    <div class="zigzag">
      <div
        v-for="(photo, i) in photos"
        :key="i"
        class="polaroid"
        :class="i % 2 === 0 ? 'left' : 'right'"
      >
        <img :src="photo.src" alt="Recuerdo del viaje" />
        <span class="caption">{{ photo.title }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const base = import.meta.env.BASE_URL || '/'

const photos = [
  { src: base + "photos/uganda/image2.jpg", title: "Lucía divina" },
  { src: base + "photos/uganda/image3.jpg", title: "Otro bellezón 🤭" },
  { src: base + "photos/uganda/image4.jpg", title: "Las jirafas!!" },
  { src: base + "photos/uganda/image5.jpg", title: "Olga posando" },
  { src: base + "photos/uganda/image6.jpg", title: "La selva" },
  { src: base + "photos/uganda/image7.jpg", title: "Los gorilas!! 🦍" },
  { src: base + "photos/uganda/image8.jpg", title: "Ñu herido" },
  { src: base + "photos/uganda/image9.jpg", title: "Zebrita" },
  { src: base + "photos/uganda/image10.jpg", title: "Magia de Uganda" },
  { src: base + "photos/uganda/image11.jpg", title: "Luci con la bebé" },
  { src: base + "photos/uganda/image12.jpg", title: "Felicidad y belleza pura" },
];
</script>

<style scoped>
.bon-voyage {
  padding: 100px 20px 140px;
  text-align: center;
  color: #fff;
  z-index: 2;
}

.bon-voyage h2 {
  font-size: 2.8rem;
  margin-bottom: 14px;
}

.closing {
  opacity: 0.85;
  margin-bottom: 70px;
}

.zigzag {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.polaroid {
  width: 70%;
  background: #f9f9f7;
  padding: 14px 14px 28px;
  border-radius: 6px;
  box-shadow: 0 20px 45px rgba(0,0,0,0.5);
  color: #333;
}

.polaroid.left {
  align-self: flex-start;
  transform: rotate(-15deg);
}

.polaroid.right {
  align-self: flex-end;
  transform: rotate(15deg);
}

.polaroid img {
  width: 100%;
  border-radius: 4px;
  display: block;
}

.caption {
  display: block;
  margin-top: 14px;
  font-size: 0.95rem;
  font-family: "Courier New", monospace;
  opacity: 0.85;
}

</style>
