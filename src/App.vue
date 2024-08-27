<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue";
import TitleComponent from "./components/TitleComponent.vue";
import AboutMeComponent from "./components/AboutMeComponent.vue";
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="h-screen w-8/12">
    <NavigationHeader />
    <TitleComponent />
    <AboutMeComponent />
    </div>
  </div>

</template>

<style scoped>
/* Add any scoped styles here */
</style>
