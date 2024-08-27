<script setup lang="ts">
import GithubIcon from "../assets/icons/GithubIcon.vue";
import LinkedinIcon from "../assets/icons/LinkedinIcon.vue";
import ResumeButton from "./ResumeButton.vue";
</script>

<template>
  <!-- Main Content -->
  <div
    class="w-full mt-16 flex justify-between flex-row h-60 mb-5"
  >
    <div class="flex flex-col w-full md:w-7/12 justify-start mb-0">
      <h1 class="text-5xl mb-3 font-bold">
        Wojciech Skuła
      </h1>
      <h2 class="text-xl mb-3 font-light">
        Junior Full-Stack Developer
      </h2>

      <div class="flex-row flex gap-6 w-full mt-6">
        <ResumeButton />
        <GithubIcon />
        <LinkedinIcon />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
