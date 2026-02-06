<template>
    <div class="flores-view">
        <Letter/>
    </div>
</template>

<script>
import Letter from '../components/sanvalentin/Letter.vue';

export default {
    name: 'Flores',
    components: {
        Letter
    }
}
</script>

<style scoped>
.san-valentin {
    text-align: center;
    width: 100vw;
    position: relative;
}

h1 {
    color: #e91e63;
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    color: #666;
    font-size: 1.2rem;
}
</style>