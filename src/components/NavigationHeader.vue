<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ArrowIcon from '../assets/icons/ArrowIcon.vue'

// State to manage the menu toggle
const isMenuOpen = ref(false);

// State to manage the visibility of the "Back to Top" button
const showBackToTop = ref(false);

// Function to toggle the menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Function to scroll back to the top of the page
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Function to check the scroll position and toggle the "Back to Top" button
const checkScrollPosition = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    showBackToTop.value = scrollY > 100; // Show button if scrolled more than 100px
};

// Set up event listener for scroll event
onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScrollPosition);
});
</script>

<template>
  <!-- Responsive Navigation Header -->
  <div class="text-white p-4  top-0 left-0 w-full flex justify-between items-center z-50 mt-10 ">
    <a href="#">
      <div class="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </a>

    <!-- Normal Menu for Larger Screens -->
    <nav class="hidden md:flex space-x-4">
      <ul class="flex space-x-4 text-lg">
        <li class="font-bold menu-item">
          <a
            href="#home"
            class="hover:text-[#76ABAE] transition duration-300"
          >Home</a>
        </li>
        <li class="font-bold menu-item">
          <a
            href="#about"
            class="hover:text-[#76ABAE] transition duration-300"
          >About Me</a>
        </li>
        <li class="font-bold menu-item">
          <a
            href="#experience"
            class="hover:text-[#76ABAE] transition duration-300"
          >Experience</a>
        </li>
        <li class="font-bold menu-item">
          <a
            href="#projects"
            class="hover:text-[#76ABAE] transition duration-300"
          >Projects</a>
        </li>
        <li class="font-bold menu-item">
          <a
            href="#contact"
            class="hover:text-[#76ABAE] transition duration-300"
          >Contact</a>
        </li>
      </ul>
    </nav>

    <!-- Menu Toggle Button for Mobile -->
    <button
      class="block md:hidden relative z-30"
      @click="toggleMenu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 transition-transform transform"
        :class="{'rotate-90': isMenuOpen}"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <!-- Menu Items Appearing Under the Menu Icon -->
    <div
      v-if="isMenuOpen"
      class="absolute right-20 top-28 mt-2 flex flex-col items-end p-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-out origin-top-right z-40"
    >
      <ul class="flex flex-col space-y-2 text-right">
        <li class="font-bold text-lg text-white menu-item">
          <a
            href="#home"
            class="hover:text-[#76ABAE] transition duration-300"
            @click="toggleMenu"
          >Home</a>
        </li>
        <li class="font-bold text-lg text-white menu-item">
          <a
            href="#about"
            class="hover:text-[#76ABAE] transition duration-300"
            @click="toggleMenu"
          >About Me</a>
        </li>
        <li class="font-bold text-lg text-white menu-item">
          <a
            href="#experience"
            class="hover:text-[#76ABAE] transition duration-300"
            @click="toggleMenu"
          >Experience</a>
        </li>
        <li class="font-bold text-lg text-white menu-item">
          <a
            href="#projects"
            class="hover:text-[#76ABAE] transition duration-300"
            @click="toggleMenu"
          >Projects</a>
        </li>
        <li class="font-bold text-lg text-white menu-item">
          <a
            href="#contact"
            class="hover:text-[#76ABAE] transition duration-300"
            @click="toggleMenu"
          >Contact</a>
        </li>
      </ul>
    </div>

    <!-- Shadow Overlay when Menu is Opened -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-10"
      @click="toggleMenu"
    />
  </div>

  <!-- Back to Top Button -->

  <button
    v-if="showBackToTop"
    class="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-[#31363F] text-white shadow-lg transition-all duration-300 hover:bg-[#76ABAE] hover:shadow-xl z-50"
    @click="scrollToTop"
  >
    <ArrowIcon />
  </button>
</template>

<style scoped>
.menu-item a {
    @apply relative text-white no-underline transition-colors duration-300 ease-out;
}

.menu-item a::before {
    content: '';
    @apply absolute w-0 h-[2px] bottom-0 left-1/2 bg-[#76ABAE] transition-all duration-300 ease-out;
}

.menu-item a:hover::before {
    @apply w-full left-0;
}

.menu-item a:hover {
    @apply text-[#76ABAE];
}

.spinner {
    width: 44px;
    height: 44px;
    animation: spinner-y0fdc1 4s infinite ease;
    transform-style: preserve-3d;
}

.spinner > div {
    background-color: #76ABAE;
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid #31363F;
}

.spinner div:nth-of-type(1) {
    transform: translateZ(-22px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
}

.spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
}

.spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
}

.spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
    transform: translateZ(22px);
}

@keyframes spinner-y0fdc1 {
    0% {
        transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }

    50% {
        transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }

    100% {
        transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
}
</style>
