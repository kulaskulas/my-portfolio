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
        <div class="w-3/4">
          <div class="grid grid-cols-2 gap-5 auto-rows-[190px]">

            <!-- Featured Image -->
            <div class="col-span-2 row-span-2 rounded-xl overflow-hidden border border-steel shadow-lg">
              <img
                :src="working1"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <!-- Tall Image -->
            <div class="row-span-2 rounded-xl overflow-hidden border border-steel shadow-lg rotate-[-1deg]">
              <img
                :src="working1"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <!-- Top Right -->
            <div class="rounded-xl overflow-hidden border border-steel shadow-lg rotate-[1deg]">
              <img
                :src="working1"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <!-- Bottom Right -->
            <div class="rounded-xl overflow-hidden border border-steel shadow-lg rotate-[-2deg]">
              <img
                :src="working1"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <!-- Bottom Wide -->
            <!-- <div class="col-span-2 rounded-xl overflow-hidden border border-steel shadow-lg rotate-[1deg]">
              <img
                :src="working1"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div> -->

          </div>
        </div>

        <!-- Right -->
        <div class="w-3/5 space-y-10">

          <section>
            <h1 class="text-6xl leading-tight text-sage mb-5">
              About Me
            </h1>

            <div class="text-white text-lg leading-8 space-y-6">
              <p>
                I'm a <span class="text-orchid">Software Engineer</span> with over
                <span class="text-keyword">six years of experience</span> developing
                <span class="text-keyword">web applications</span>. I began my professional
                career in <span class="text-keyword">2019</span> as a
                <span class="text-orchid">Programmer</span> at a local company in the
                Philippines, where I was responsible for maintaining and improving
                existing business systems.
              </p>

              <p>
                One of my earliest challenges was modernizing a legacy
                <span class="text-keyword">application</span> by migrating it to a more
                <span class="text-keyword">maintainable architecture</span> while also
                contributing to the development of new
                <span class="text-keyword">web-based solutions</span>. During this time,
                I gained experience working with
                <span class="text-keyword">content management systems (CMS)</span> and
                learned the importance of building software that is both reliable and easy
                to maintain.
              </p>

              <p>
                After the pandemic, I joined a new company where I was entrusted with
                <span class="text-orchid">leading the development</span> of the projects
                assigned to me. The role strengthened not only my
                <span class="text-keyword">technical skills</span> but also my ability to
                take <span class="text-orchid">ownership</span>, collaborate with
                <span class="text-keyword">cross-functional teams</span>, and deliver
                solutions that met real business needs.
              </p>

              <Transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-[500px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="expanded"
                  class="overflow-hidden space-y-6"
                >
                  <p>
                    In my current role as a
                    <span class="text-orchid">Software Engineer</span>, I initially worked
                    across both <span class="text-keyword">backend</span> and
                    <span class="text-keyword">frontend development</span>, giving me a
                    broader understanding of the
                    <span class="text-keyword">full application lifecycle</span>. As the
                    team's needs evolved, I transitioned into focusing primarily on
                    <span class="text-keyword">frontend development</span>, where I build
                    intuitive, responsive, and
                    <span class="text-keyword">user-friendly interfaces</span> while
                    collaborating closely with designers, backend engineers, and
                    stakeholders.
                  </p>

                  <p>
                    What I enjoy most about software development is solving
                    <span class="text-orchid">real-world problems</span> through code.
                    Whether I'm improving an existing system or creating a new feature from
                    scratch, I strive to write
                    <span class="text-keyword">clean</span>,
                    <span class="text-keyword">maintainable</span>, and
                    <span class="text-keyword">scalable</span> code that provides lasting
                    value. I'm always eager to learn new technologies, refine my skills,
                    and continue growing with every project I work on.
                  </p>
                </div>
              </Transition>

              <button
                @click="expanded = !expanded"
                class="text-orchid hover:text-white text-lg transition cursor-pointer"
              >
                {{ expanded ? 'Read Less ↑' : 'Read More →' }}
              </button>
            </div>
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
      <div class="flex items-start gap-16">

        <!-- Left -->
        <div class="w-2/5">
          <div class="rounded-xl border border-steel bg-charcoal overflow-hidden shadow-lg">
            <img
              :src="working2"
              alt="Beyond Coding"
              class="w-full h-[650px] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <!-- Right -->
        <div class="w-3/5">

          <h1 class="text-4xl text-sage mb-8">
            Beyond Coding
          </h1>

          <div class="space-y-10">

            <!-- Music -->
            <section>
              <h2 class="text-2xl text-keyword mb-3">
                🎸 Music
              </h2>

              <p class="text-white text-lg leading-8">
                Music has always been one of my biggest passions. During my free
                time, I enjoy playing musical instruments, especially the
                <span class="text-orchid">guitar</span>. It's a great way for me to
                relax, express creativity, and take a break from the screen after
                spending hours writing code. Learning new songs reminds me that
                improvement comes through patience and consistent practice—the same
                mindset I apply when learning new technologies and solving
                programming challenges.
              </p>
            </section>

            <!-- Cats -->
            <section>
              <h2 class="text-2xl text-keyword mb-3">
                🐱 Cats
              </h2>

              <p class="text-white text-lg leading-8">
                I'm also an animal lover and spend a lot of my free time with my
                <span class="text-orchid">cats</span>. Whether they're following me
                around the house or keeping me company while I work, they always
                bring a smile to my day. Taking care of them reminds me to slow
                down, enjoy the little moments, and maintain a healthy balance
                between work and personal life.
              </p>
            </section>

           <Transition
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[1000px]"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 max-h-[1000px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div
              v-if="expandedBC"
              class="overflow-hidden space-y-10"
            >
              <!-- Gaming -->
              <section>
                <h2 class="text-2xl text-keyword mb-3">
                  🎮 Gaming
                </h2>

                <p class="text-white text-lg leading-8">
                  When I want to completely disconnect from work, I enjoy playing
                  <span class="text-orchid">mobile games</span>, especially with
                  friends. Some of my favorites are
                  <span class="text-keyword">Call of Duty: Mobile (CODM)</span>,
                  <span class="text-keyword">Clash of Clans (COC)</span>, and
                  <span class="text-keyword">League of Legends: Wild Rift</span>.
                  Whether it's competing in ranked matches, planning strategies with
                  teammates, or simply enjoying a few casual games, gaming is another
                  hobby that helps me relax while also sharpening my teamwork,
                  communication, and problem-solving skills.
                </p>
              </section>

              <!-- Closing -->
              <section class="border-t border-steel pt-8">
                <p class="text-white text-lg leading-8">
                  Outside of software development, I believe having hobbies is just
                  as important as writing great code. Whether I'm playing the
                  <span class="text-keyword">guitar</span>, spending time with my
                  <span class="text-keyword">cats</span>, or enjoying a few matches
                  in my favorite <span class="text-keyword">mobile games</span>,
                  these activities help me stay creative, curious, and motivated.
                  They allow me to return to development with a fresh perspective,
                  renewed energy, and the same enthusiasm for building meaningful
                  software.
                </p>
              </section>
            </div>
          </Transition>

          <button
            @click="expandedBC = !expandedBC"
            class="text-orchid hover:text-white text-lg transition cursor-pointer"
          >
            {{ expandedBC ? 'Read Less ↑' : 'Read More →' }}
          </button>

          </div>

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
const expandedBC = ref(false)
</script>