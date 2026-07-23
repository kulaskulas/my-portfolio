<template>
  <div
    class="absolute inset-0 pointer-events-none
      bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)]
      bg-[size:56px_100%]">
  </div>
  <div class="w-full p-10">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center gap-16">

        <!-- Left -->
        <div class="w-2/5">
          <div class="rounded-xl border border-steel bg-charcoal overflow-hidden shadow-lg">
            <img
              :src="working1"
              alt="Working"
              class="w-full h-96 object-cover transition-transform duration-300 hover:scale-110"
            />

            <!-- <div class="p-6">
              <h3 class="text-white text-2xl font-semibold">
                Karl Cabangon
              </h3>

              <p class="text-steel mt-1">
                Software Engineer
              </p>

              <div class="mt-6 space-y-3 text-white">
                <p>📍 Philippines</p>
                <p>💼 6+ Years Experience</p>
                <p>⚡ Laravel • Vue.js • PHP</p>
              </div>
            </div> -->
          </div>
        </div>

        <!-- Right -->
        <div class="w-3/5 space-y-10">

          <section>
            <h1 class="text-6xl leading-tight text-sage mb-5">
              About Me
            </h1>

            <p class="text-white text-lg leading-8">
              I'm a <span class="text-orchid">Software Engineer</span> with over six years of experience developing <span class="text-keyword">web applications</span>. I began my professional career in <span class="text-keyword">2019</span> as a <span class="text-orchid">Programmer</span> at a local company in the Philippines, where I was responsible for maintaining and improving existing business systems. One of my earliest challenges was modernizing a legacy <span class="text-keyword">application</span> by migrating it to a more maintainable <span class="text-keyword">architecture</span> while also contributing to the development of new <span class="text-keyword">web-based</span> solutions. During this time, I also gained experience working with <span class="text-keyword">content management systems (CMS)</span> for client websites.

              After the pandemic, I joined a new company where I was entrusted with <span class="text-orchid">leading the development</span> of the projects assigned to me. The role allowed me to strengthen not only my <span class="text-keyword">technical skills</span> but also my ability to take ownership, collaborate with teams, and deliver solutions that met business requirements.

              <Transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-[500px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <span
                  v-if="expanded"
                  class="block overflow-hidden"
                >
                  In my current role as a <span class="text-orchid">Software Engineer</span>, I initially worked across both 
                  <span class="text-keyword">backend</span> and <span class="text-keyword">frontend development</span>, giving me 
                  a broader understanding of the full application lifecycle. As the team's needs evolved, I transitioned into 
                  focusing primarily on <span class="text-keyword">frontend development</span>, where I continue to build 
                  intuitive, responsive, and <span class="text-keyword">user-friendly interfaces</span> while working closely 
                  with designers, backend engineers, and stakeholders.

                  Throughout my career, I've enjoyed solving real-world problems through software, 
                  <span class="text-orchid">continuously learning new technologies</span>, and improving the way applications 
                  are built. I'm passionate about writing maintainable code, delivering quality solutions, and growing as a 
                  developer with every project I take on.
                </span>
              </Transition>
            </p>
              <button
                @click="expanded = !expanded"
                class="mt-4 text-orchid hover:text-white text-lg transition cursor-pointer"
              >
                {{ expanded ? 'Read Less ↑' : 'Read More →' }}
              </button>
          </section>

          <!-- <section>
            <h2 class="text-2xl font-semibold text-orchid mb-4">
              Development Philosophy
            </h2>

            <ul class="space-y-3 text-white text-lg">
              <li>✓ Clean Architecture</li>
              <li>✓ Performance First</li>
              <li>✓ Maintainable Code</li>
              <li>✓ Continuous Learning</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-orchid mb-4">
              Beyond Coding
            </h2>

            <p class="text-white text-lg leading-9">
              Outside of development, I enjoy building personal projects,
              exploring UI design, playing games, and learning modern
              technologies that help me become a better developer.
            </p>
          </section> -->

        </div>

      </div>
    </div>
  </div>


  <div class="w-full p-10">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center gap-16">

        <!-- Left -->
        <div class="w-2/5">
          <div class="rounded-xl border border-steel bg-charcoal overflow-hidden shadow-lg">
            <img
              :src="working2"
              alt="Working"
              class="w-full h-96 object-cover transition-transform duration-300 hover:scale-110"
            />

            <!-- <div class="p-6">
              <h3 class="text-white text-2xl font-semibold">
                Karl Cabangon
              </h3>

              <p class="text-steel mt-1">
                Software Engineer
              </p>

              <div class="mt-6 space-y-3 text-white">
                <p>📍 Philippines</p>
                <p>💼 6+ Years Experience</p>
                <p>⚡ Laravel • Vue.js • PHP</p>
              </div>
            </div> -->
          </div>
        </div>

        <!-- Right -->
        <div class="w-3/5 space-y-10">

          <section>
            <h1 class="text-4xl text-sage mb-5">
              Beyond Coding
            </h1>

            <p class="text-white text-lg leading-8">
              Outside of software development, music has always been one of my biggest passions. During my free time, I enjoy playing musical instruments, especially the guitar. It's a great way for me to relax, express creativity, and take a break from the screen after a productive day of coding.

              I'm also an animal lover and enjoy spending time with my cats. Taking care of them and playing with them is one of my favorite ways to unwind and relieve stress. They bring a lot of energy and joy to my daily life, and they're a constant reminder to slow down and enjoy the little moments outside of work.

              Whether I'm learning a new song on the guitar or spending time with my cats, these hobbies help me maintain a healthy balance between work and personal life, allowing me to return to development with a fresh perspective and renewed focus.
            </p>
          </section>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import working1 from '../assets/images/about-1.jpeg';
import working2 from '../assets/images/about-2.jpg';
import { ref } from 'vue'
const expanded = ref(false)
</script>