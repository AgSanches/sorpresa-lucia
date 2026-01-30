<script setup>
</script>

<template>
  <div id="app"> 
    <router-view />
  </div>
</template>

<style>
html, body, #app { 
  height: 100%;
  width: 100%;
  margin: 0;
}

body { 
  margin: 0 !important; 
}

h1, h2 {
    margin-block-end: 0rem;
    font-family: 'Playfair Display', serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 2.3rem;
    line-height: 1.05;
}

p {
    font-size: 1.1rem;
    padding: 0.7rem;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    font-family: 'Lato', sans-serif;
}
</style>
