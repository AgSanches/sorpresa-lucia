<template>
  <div class="liana-wrapper">
    <svg viewBox="0 0 120 1200" class="liana">
      <path
        class="vine"
        d="M60 0 
           C30 180, 110 360, 50 560
           C20 760, 110 960, 60 1200"
      />

      <g class="leaves">
        <ellipse cx="40" cy="180" rx="10" ry="18" transform="rotate(-25 40 180)" />
        <ellipse cx="85" cy="320" rx="10" ry="18" transform="rotate(30 85 320)" />
        <ellipse cx="35" cy="520" rx="11" ry="20" transform="rotate(-20 35 520)" />
        <ellipse cx="90" cy="760" rx="10" ry="18" transform="rotate(35 90 760)" />
        <ellipse cx="45" cy="980" rx="10" ry="18" transform="rotate(-30 45 980)" />
      </g>

      <g class="flowers">
        <circle cx="75" cy="450" r="4"/>
        <circle cx="50" cy="860" r="4"/>
      </g>

    </svg>
  </div>
</template>

<style scoped>
.liana-wrapper {
  position: fixed;
  left: 3px;
  top: 0;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}

.liana {
  height: 100%;
  animation: swing 7s ease-in-out infinite alternate;
}

.vine {
  fill: none;
  stroke: #66bb6a;
  stroke-width: 7;
  stroke-linecap: round;
}

.leaves ellipse {
  fill: #81c784;
  opacity: 0.9;
}

.flowers circle {
  fill: #a5d6a7;
}

@keyframes swing {
  from { transform: rotate(-2deg); }
  to   { transform: rotate(2deg); }
}
</style>
