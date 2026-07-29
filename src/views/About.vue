<template>
  <GridBackground />
<div class="w-full p-4 sm:p-6 md:p-8">
  <div class="max-w-6xl mx-auto mt-1 sm:mt-2">

    <section class="text-white text-base sm:text-lg leading-7 sm:leading-8">

      <!-- Float Image -->
      <div class="w-full md:w-[450px] lg:w-[500px] md:float-left md:mr-10 mb-6 md:mb-8">

        <div class="grid grid-cols-2 gap-3 sm:gap-5 auto-rows-[130px] sm:auto-rows-[190px]">

          <div class="rounded-xl overflow-hidden border border-steel shadow-lg">
            <img
              :src="working1"
              class="w-full h-full object-cover hover:scale-110 transition duration-300 z-10"
            />
          </div>

          <div class="row-span-2 rounded-xl overflow-hidden border border-steel shadow-lg rotate-[-1deg]">
            <img
              :src="working1"
              class="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          </div>

          <div class="rounded-xl overflow-hidden border border-steel shadow-lg rotate-[1deg]">
            <img
              :src="working1"
              class="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          </div>

          <div class="col-span-2 rounded-xl overflow-hidden border border-steel shadow-lg">
            <img
              :src="working1"
              class="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          </div>

        </div>

      </div>

      <h1 class="text-3xl sm:text-5xl md:text-6xl text-sage mb-4 sm:mb-6 font-bold">
        About Me
      </h1>

      <p class="mb-6">
        I'm a <span class="text-orchid">Software Engineer</span> with over
        <span class="text-keyword font-medium">six years of experience</span> developing
        <span class="text-keyword font-medium">web applications</span>. I began my professional
        career in <span class="text-keyword font-medium">2019</span> as a
        <span class="text-orchid">Programmer</span> at a local company in the
        Philippines, where I was responsible for maintaining and improving
        existing business systems.
      </p>

      <p class="mb-2">
        One of my earliest challenges was modernizing a legacy
        <span class="text-keyword font-medium">application</span> by migrating it to a more
        <span class="text-keyword font-medium font-medium">maintainable architecture</span> while also
        contributing to the development of new
        <span class="text-keyword font-medium">web-based solutions</span>. During this time,
        I gained experience working with
        <span class="text-keyword font-medium">content management systems (CMS)</span>,
        including WordPress.
      </p>

      <Transition
        enter-active-class="transition-all duration-700 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="expanded">

          <p class="mb-6">
            After the pandemic, I joined a new company where I was entrusted with
            <span class="text-orchid">leading the development</span> of several
            projects. The role strengthened not only my
            <span class="text-keyword font-medium">technical skills</span> but also my ability
            to take ownership and collaborate with cross-functional teams.
          </p>

          <p class="mb-6">
            In my current role as a
            <span class="text-orchid">Software Engineer</span>, I initially worked
            across both <span class="text-keyword font-medium">backend</span> and
            <span class="text-keyword font-medium">frontend development</span>, giving me a
            broader understanding of the complete application lifecycle.
          </p>

          <p class="mb-6">
            As the team's needs evolved, I transitioned into focusing primarily on
            <span class="text-keyword font-medium">frontend development</span>, where I build
            intuitive, responsive, and user-friendly interfaces while working
            closely with backend engineers and designers.
          </p>

          <p class="mb-2">
            Throughout my career, I've enjoyed solving
            <span class="text-orchid">real-world problems</span>, writing clean,
            maintainable code, and continuously improving my skills through every
            project I work on.
          </p>

        </div>
      </Transition>

      <button
        @click="expanded = !expanded"
        class="mt-2 text-orchid hover:text-white transition cursor-pointer font-medium"
      >
        {{ expanded ? 'Read Less ↑' : 'Read More →' }}
      </button>

      <!-- Clear the float AFTER all text -->
      <div class="clear-both"></div>

    </section>

  </div>
</div>

 <div class="w-full p-4 sm:p-8 md:p-10">
  <div class="max-w-6xl mx-auto">

    <!-- Floating Image -->
    <div class="w-full md:w-[380px] lg:w-[420px] md:float-left md:mr-10 mb-6 md:mb-8">
      <div class="rounded-xl border border-steel bg-charcoal overflow-hidden shadow-lg z-10">
        <img
          :src="working2"
          alt="Beyond Coding"
          class="w-full h-[320px] sm:h-[480px] md:h-[650px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    <h1 class="text-3xl sm:text-4xl text-sage mb-6 sm:mb-8 font-bold">
      Beyond Coding
    </h1>

    <!-- Music -->
    <h2 class="text-xl sm:text-2xl text-keyword mb-3 font-semibold">
      🎸 Music
    </h2>

    <p class="text-white text-base sm:text-lg leading-7 sm:leading-8 mb-6">
      Music has always been one of my biggest passions. During my free
      time, I enjoy playing musical instruments, especially the
      <span class="text-orchid">guitar</span>. It's a great way for me to
      relax, express creativity, and take a break from the screen after
      spending hours writing code.
    </p>

    <p class="text-white text-base sm:text-lg leading-7 sm:leading-8 mb-8 sm:mb-10">
      Learning new songs reminds me that improvement comes through patience
      and consistent practice—the same mindset I apply when learning new
      technologies and solving programming challenges.
    </p>

    <!-- Cats -->
    <h2 class="text-xl sm:text-2xl text-keyword mb-3 font-semibold">
      🐱 Cats
    </h2>

    <p class="text-white text-base sm:text-lg leading-7 sm:leading-8 mb-5">
      I'm also an animal lover and spend a lot of my free time with my
      <span class="text-orchid">cats</span>. Whether they're following me
      around the house or keeping me company while I work, they always
      bring a smile to my day. Taking care of them reminds me to slow
      down, enjoy the little moments, and maintain a healthy balance
      between work and personal life.
    </p>

    <!-- Read More -->
    <Transition
      enter-active-class="transition-all duration-700 ease-in-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[2000px]"
      leave-active-class="transition-all duration-500 ease-in-out"
      leave-from-class="opacity-100 max-h-[2000px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="expandedBC"
        class="space-y-8 sm:space-y-10"
      >

        <!-- Gaming -->
        <div>
          <h2 class="text-xl sm:text-2xl text-keyword mb-3 font-semibold">
            🎮 Gaming
          </h2>

          <p class="text-white text-base sm:text-lg leading-7 sm:leading-8 mb-6">
            When I want to completely disconnect from work, I enjoy playing
            <span class="text-orchid">mobile games</span>, especially with
            friends. Some of my favorites are
            <span class="text-keyword font-medium">Call of Duty: Mobile (CODM)</span>,
            <span class="text-keyword font-medium">Clash of Clans (COC)</span>, and
            <span class="text-keyword font-medium">League of Legends: Wild Rift</span>.
          </p>

          <p class="text-white text-base sm:text-lg leading-7 sm:leading-8">
            Whether it's competing in ranked matches, planning strategies
            with teammates, or simply enjoying a few casual games, gaming is
            another hobby that helps me relax while also sharpening my
            teamwork, communication, and problem-solving skills.
          </p>
        </div>

        <!-- Closing -->
        <div class="border-t border-steel pt-6 sm:pt-8">
          <p class="text-white text-base sm:text-lg leading-7 sm:leading-8">
            Outside of software development, I believe having hobbies is just
            as important as writing great code. Whether I'm playing the
            <span class="text-keyword font-medium">guitar</span>, spending time with my
            <span class="text-keyword font-medium">cats</span>, or enjoying a few matches
            in my favorite
            <span class="text-keyword font-medium">mobile games</span>, these activities
            help me stay creative, curious, and motivated. They allow me to
            return to development with a fresh perspective, renewed energy,
            and the same enthusiasm for building meaningful software.
          </p>
        </div>

      </div>
    </Transition>

    <button
      @click="expandedBC = !expandedBC"
      class="text-orchid hover:text-white text-base sm:text-lg transition cursor-pointer font-medium"
      :class="expandedBC ? 'mt-5' : ''"
    >
      {{ expandedBC ? 'Read Less ↑' : 'Read More →' }}
    </button>

    <!-- Clears the float after all text -->
    <div class="clear-both"></div>

  </div>
</div>

</template>

<script setup>
  import working1 from '../assets/images/about-1.jpeg';
  import working2 from '../assets/images/about-2.jpg';
  import GridBackground from '@/components/ui/GridBackground.vue';
  import { ref } from 'vue'
  const expanded = ref(false)
  const expandedBC = ref(false)
</script>