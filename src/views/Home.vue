<template>
  <!-- <div
    class="absolute inset-0 pointer-events-none
         bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)]
         bg-[size:56px_100%]">
  </div> -->
  <div
    class="absolute inset-0 pointer-events-none
      bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)]
      bg-[size:56px_100%]">
  </div>
  <div class="flex items-center justify-center gap-20 h-full px-10">
    <div class="left-col max-w-2xl">
      <h1 class="text-white text-6xl leading-tight py-4">
        Hi, I'm <span class="text-sage">Karl Cabangon</span>
      </h1>

      <h2 class="text-orchid text-4xl leading-relaxed">
        Software Engineer
      </h2>

      <div class="py-4">
        <p class="text-white leading-relaxed text-xl">
          I build modern web applications using
          <span class="text-keyword">Laravel</span>,
          <span class="text-keyword">Vue.js</span>, and
          <span class="text-keyword">PHP</span>, with a focus on
          performance, clean architecture, and user experience.
        </p>
      </div>

      <div class="flex cta-buttons mt-4 gap-5">
        <button
          class="w-full rounded-md border border-topbar bg-tab
            px-4 py-2 text-white
            transition-all duration-150
            hover:bg-nav-active
            active:translate-y-px
            active:bg-sidebar
            shadow-sm 
            cursor-pointer"
        >
          Download my CV
        </button>
        <button
          class="w-full rounded-md bg-primary
            px-4 py-2 text-white
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

    <div class="right-col shrink-0">
      <img
        :src="profileImage"
        alt="Profile Image"
        class="w-74 h-74 object-cover rounded-full"
      />
    </div>
  </div>
</template>

<script setup>
  import profileImage from '../assets/images/profile.jpg';
</script>