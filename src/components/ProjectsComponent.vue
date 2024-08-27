<script setup lang="ts">

</script>

<template>
  <div
    id="projects"
    class="w-full"
  >
    <h1 class="pb-2 font-medium text-3xl mb-5 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
      Projects
    </h1>
    <div class="mb-1 p-6 bg-[#31363F] rounded-lg shadow-lg border-[#31363F] transition duration-500 ease-in-out relative group overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-300 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pointer-events-none"
      />
      <h2 class="text-xl font-bold tracking-wide mb-3 relative z-10 pb-2">
        EDUVY – Integrated remote tutoring Platform (in progress)
      </h2>
      <div class="mb-4 relative z-10">
        <p class="font-medium mb-3">
          Project for engineering thesis. It is planned to develop a service part
          providing a REST-style API and a client part running in a web
          browser. The application will have functionalities such as: booking, chat, video meetings and payments.
          I am developing frontend with Vue.js and also helped with
          developing backend in Springboot.
        </p>
      </div>
    </div>
    <div class="mb-1 p-6 bg-[#31363F] rounded-lg shadow-lg border-[#31363F] transition duration-500 ease-in-out relative group overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-300 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pointer-events-none"
      />
      <h2 class="text-xl font-bold tracking-wide mb-3 relative z-10 pb-2">
        Portfolio Website
      </h2>
      <div class="mb-4 relative z-10">
        <h3 class="font-medium text-lg mb-3">
          Portfolio Website developed with Vue.js, Vite and Tailwind CSS
        </h3>
        <a
          href="https://github.com/kobebrylant/portfolio"
          target="_blank"
          class="font-light border-b-2"
        >
          Link to GitHub
        </a>
        <p class="font-medium mb-3 mt-4">
          This portfolio project is built using Vite, Vue.js, TypeScript and Tailwind.
          It features sections for showcasing projects, skills, experience, and education.
          The site is fully responsive and includes interactive elements like technology
          buttons with hover effects and experience cards with smooth animations.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>