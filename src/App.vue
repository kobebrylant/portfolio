<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue";
import TitleComponent from "./components/TitleComponent.vue";
import AboutMeComponent from "./components/AboutMeComponent.vue";
import TechnologiesComponent from './components/TechnologyComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div
    id="home"
    class="flex items-center justify-center h-screen"
  >
    <div class="h-screen w-10/12">
      <NavigationHeader />
      <TitleComponent />
      <AboutMeComponent />
      <TechnologiesComponent class="mt-12" />
      <ExperienceComponent class="mt-12" />
      <ProjectsComponent class="mt-12" />
      <ContactComponent class="mt-12" />
      <FooterComponent class="mt-12" />
    </div>
  </div>
</template>

<style scoped>
/* Add any scoped styles here */
</style>
