<script setup lang="ts">
import { TechnologyButtonProps } from '../model/buttonModel.ts'
const props = defineProps<TechnologyButtonProps>();
</script>

<template>
  <div
    class="flex items-center justify-center space-x-2 p-3 bg-[#31363F] rounded-lg transform transition-transform duration-300 hover:scale-105"
    style="max-width: 180px; min-width: 60px; height: 60px; overflow-hidden;"
  >
    <component
      :is="props.logo"
      class="fixed-size-icon"
    />
    <span class="text-lg font-semibold truncate">{{ props.name }}</span>
  </div>
</template>

<style scoped>
/* Ensure icons have a fixed size */
.fixed-size-icon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
}

/* Define the glowing effect */
div {
    border: 2px solid transparent;
    transition: box-shadow 0.4s ease, border-color 0.4s ease;
}

div:hover {
    border-color: #76ABAE;
    box-shadow: 0 0 8px 2px #a855f7, 0 0 16px 4px #22d3ee;
}
</style>
