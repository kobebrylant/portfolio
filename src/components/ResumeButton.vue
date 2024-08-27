<script setup lang="ts">
</script>

<template>
  <!-- Button that triggers the download -->
  <a
    href="/dist/Wojciech_Skuła_CV.pdf"
    download
    class=" hover:bg-[#76ABAE] hover:border-[#76ABAE] font-bold py-2 px-4 rounded inline-flex items-center border-2  border-[#31363F] transition duration-500 ease-in-out "
  >
    <svg
      class="fill-current w-4 h-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    ><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
    <span>Download CV</span>
  </a>
</template>

<style scoped>
</style>
