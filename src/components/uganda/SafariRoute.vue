<template>
  <div class="safari-route">
    <svg
      v-for="n in 14"
      :key="n"
      class="paw"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="currentColor">
            <circle cx="16" cy="24" r="6"/>
            <circle cx="28" cy="16" r="6"/>
            <circle cx="42" cy="16" r="6"/>
            <circle cx="54" cy="24" r="6"/>

            <path d="
                M32 28
                C22 28 16 36 16 44
                C16 52 22 58 32 58
                C42 58 48 52 48 44
                C48 36 42 28 32 28
                Z
            "/>
        </g>
    </svg>
  </div>
</template>


<script setup>
</script>

<style scoped>
.safari-route {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 25px;
  z-index: 1;
  border-radius: 22px;
}

.paw {
  width: 32px;
  height: 32px;
  color: #e6c58f;
  animation: step 4s ease-in-out infinite;
}

.paw:nth-child(odd) {
  transform: translateX(6px) rotate(-30deg);
  animation-delay: 0.8s;
}

.paw:nth-child(even) {
  transform: translateX(-6px) rotate(30deg);
}

@keyframes step {
  0%,100% { opacity: 0.5; }
  50% { opacity: 1; }
}

</style>
