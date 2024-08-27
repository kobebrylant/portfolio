<script setup lang="ts">

</script>

<template>
  <div
    id="experience"
    class="w-full"
  >
    <h1 class="pb-2 font-bold text-3xl mb-5 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
      Experience and Education
    </h1>

    <!-- Education Card -->
    <div class="mb-1 p-6 bg-[#31363F] rounded-lg shadow-lg border-[#31363F] transition duration-500 ease-in-out relative group overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-300 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pointer-events-none"
      />
      <h2 class="text-xl font-bold tracking-wide mb-3 relative z-10 pb-2">
        Education
      </h2>
      <div class="mb-4 relative z-10">
        <h3 class="font-medium text-lg mb-3">
          Applied Computer Science in English (Third Year)
        </h3>
        <p class="font-light mb-3">
          Oct 2021 - Present
        </p>
        <p class="font-medium mb-3">
          Wroclaw University of Science and Technology
        </p>
      </div>
    </div>

    <!-- Experience Card -->
    <div class="mb-1 p-6 bg-[#31363F] rounded-lg shadow-lg border-[#31363F] transition duration-500 ease-in-out relative group overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-300 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pointer-events-none"
      />
      <h2 class="text-xl font-bold tracking-wide mb-3 relative z-10 pb-2">
        Experience
      </h2>
      <div class="mb-4 relative z-10">
        <h3 class="font-medium text-lg mb-3">
          TBSCG - Junior Web Developer
        </h3>
        <p class="font-light mb-3">
          Jul 2023 - Aug 2024
        </p>
        <p>
          I collaborated with clients to implement technical solutions using TypeScript, Java, PostgreSQL, and Vue.js. I earned the AWS Cloud Practitioner Certificate, enhancing my cloud expertise. I created and maintained RESTful API endpoints and contributed to the development and maintenance of a management dashboard for dealers and clients, improving user experience.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Reactive reference to hold the style for the gradient
const cardStyle = ref({});

const updateGradientPosition = (event) => {
    const { clientX, clientY } = event;
    const rect = event.target.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Update the background position of the gradient to follow the cursor
    cardStyle.value = {
        backgroundPosition: `${x}px ${y}px`,
    };
};

// Add event listeners for mouse movement on each card

</script>

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
