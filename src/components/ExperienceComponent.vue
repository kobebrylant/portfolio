<script setup lang="ts">

</script>

<template>
  <div
    id="experience"
    class="w-full"
  >
    <h1 class="pb-2 font-extrabold text-3xl mb-5 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
      Experience and Education
    </h1>

    <div class="mb-5 p-6 bg-[#31363F] rounded-lg shadow-lg border-[#31363F] transition duration-500 ease-in-out relative group overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-300 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pointer-events-none"
      />
      <h2 class="text-xl font-bold tracking-wide mb-3 relative z-10 pb-2">
        Experience
      </h2>
      <div class="mb-4 relative z-10">
        <h3 class="font-bold text-lg mb-3">
          TBSCG - Junior Web Developer
        </h3>
        <p class="font-light mb-3">
          Jul 2023 - Sep 2024
        </p>
        <ul class="mb-3 list-inside list-disc">
          <li>Collaborated with clients on technical solutions using TypeScript, Java, PostgreSQL, and Vue.js stack</li>
          <li> Obtained AWS Cloud Practitioner certification to strengthen cloud computing expertise </li>
          <li>Developed and maintained RESTful APIs and contributed to dealer/client management dashboard development</li>
        </ul>
        <a
          href="/Recommendation_Letter.pdf"
          target="_blank"
          class="font-light border-b-2"
        >
          Recommendation Letter
        </a>
      </div>
      <div class="mt-3 relative pt-2 z-10">
        <h3 class="font-bold text-lg mb-3">
          Cogniti Technology -  Junior Full-Stack Developer
        </h3>
        <p class="font-light mb-3">
          Dec 2025 - June 2025
        </p>
        <ul class="mb-3 list-inside list-disc">
          <li>Migrated web application from PHP to Quarkus + Vue.js + Qute</li>
          <li>
            Developed admin panel, and implemented real-time server monitoring with anomaly detection and graphical request analytics
          </li>
          <li>Built new image search platform including payment integration, extensive frontend development, and backend API contributions</li>
        </ul>
      </div>
    </div>
    <div class="p-6 bg-[#31363F] rounded-lg shadow-lg border-[#31363F] transition duration-500 ease-in-out relative group overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-300 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pointer-events-none"
      />
      <h2 class="text-xl font-extrabold tracking-wide mb-3 relative z-10 pb-2">
        Education
      </h2>
      <div class="mb-4 relative z-10">
        <h3 class="font-bold text-lg mb-3">
          Applied Computer Science in English (Bachelor’s degree)
        </h3>
        <p class="font-light mb-3">
          Oct 2021 - Feb 2025
        </p>
        <p class="font-medium mb-3">
          Wroclaw University of Science and Technology
        </p>
      </div>
      <div class="mb-4 relative z-10">
        <h3 class="font-bold text-lg mb-3 ">
          Applied Computer Science in English (Master’s degree)
        </h3>
        <p class="font-light mb-3">
          Mar 2025 - Present
        </p>
        <p class="font-medium mb-3">
          Wroclaw University of Science and Technology
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group:hover .absolute {
    background-size: 200%;
    transition: background-size 0.3s;
}

.group:hover .absolute {
    animation: gradient-rotation 4s infinite linear;
}

@keyframes gradient-rotation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
