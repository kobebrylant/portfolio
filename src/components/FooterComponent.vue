<template>
  <div class="w-full text-center ">
    <span class=" mb-3 font-light pb-10">© {{ year }} Wojciech Skuła All Rights Reserved.</span>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>