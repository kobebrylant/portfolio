<script setup lang="ts">

</script>

<template>
  <div
    id="contact"
    class="w-full"
  >
    <h1 class="pb-2 font-medium text-3xl mb-5 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
      Contact
    </h1>
    <div class="text-center">
      <span class="text-xl mb-3 font-light">Please feel free to contact me via email</span>
    </div>

    <!-- Contact Button -->
    <div class="flex justify-center mt-6 mb-10">
      <a
        href="mailto:w_skula@wp.pl"
        class="mb-1 p-6 bg-[#31363F] rounded-lg shadow-lg border-[#31363F] transition duration-500 ease-in-out relative group overflow-hidden flex items-center justify-center"
        style="max-width: 200px; min-width: 100px; height: 60px;"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-300 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pointer-events-none"
        />
        <span class="text-lg font-semibold relative z-10">Send Email</span>
      </a>
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
