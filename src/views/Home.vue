<template>
  <GridBackground />
  <div class="min-h-[calc(100vh-6.5rem)] flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-10 py-8 md:py-12">
    <div class="left-col max-w-2xl text-center md:text-left">
      <h1 class="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight py-2 sm:py-4">
        Hi, I'm <span class="text-sage">Karl Cabangon</span>
      </h1>

      <h2 class="text-orchid text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
        Software Engineer
      </h2>

      <div class="py-3 sm:py-4">
        <p class="text-white leading-relaxed text-base sm:text-lg md:text-xl">
          I build modern web applications using
          <span class="text-keyword font-medium">Laravel</span>,
          <span class="text-keyword font-medium">Vue.js</span>, and
          <span class="text-keyword font-medium">PHP</span>, with a focus on
          performance, clean architecture, and user experience.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row cta-buttons mt-4 gap-3 sm:gap-5 w-full sm:w-auto">
        <button
          class="w-full sm:w-auto flex-1 rounded-md border border-topbar bg-tab
            px-5 py-2.5 text-white text-sm sm:text-base font-medium
            transition-all duration-150
            hover:bg-slate
            active:translate-y-px
            active:bg-sidebar
            shadow-sm 
            cursor-pointer"
        >
          Download my CV
        </button>
        <button
          class="w-full sm:w-auto flex-1 rounded-md bg-primary
            px-5 py-2.5 text-white text-sm sm:text-base font-medium
            transition-all duration-200
            hover:brightness-110
            active:scale-[0.98]
            shadow-lg shadow-primary/20
            cursor-pointer"
        >
          Discuss Your Project
        </button>
      </div>
    </div>

    <div class="right-col shrink-0 z-10">
      <img
        :src="profileImage"
        alt="Profile Image"
        class="w-44 h-44 sm:w-60 sm:h-60 md:w-74 md:h-74 object-cover rounded-full border-2 border-steel/30 shadow-xl"
      />
    </div>
  </div>
</template>

<script setup>
  import profileImage from '../assets/images/profile.jpg';
  import GridBackground from '@/components/ui/GridBackground.vue';
</script>