<template>
  <div
    class="absolute inset-0 pointer-events-none
      bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)]
      bg-[size:56px_100%]">
  </div>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-6xl p-10">
      <template v-for="(data, index) in yearsExperience" :key="index">
        <!-- Timeline Item -->
        <div class="relative pb-6">

          <!-- Vertical connector -->
          <div
            v-if="data.expanded"
            class="absolute left-[7px] top-7 bottom-0 w-px
              bg-[repeating-linear-gradient(to_bottom,#4F565E66_0_8px,transparent_8px_12px)]"
          ></div>

          <!-- Year -->
          <div
            class="relative z-10 flex items-center gap-1 py-1 cursor-pointer hover:bg-topbar rounded w-full"
            @click="data.expanded = !data.expanded"
          >
            <Icon
              icon="fluent:caret-right-16-filled"
              width="16"
              class="text-steel transition-transform duration-200"
              :class="{ 'rotate-90': data.expanded }"
            />

            <p class="text-sm text-white">
              {{ data.year }}
            </p>
          </div>

          <!-- Expanded -->
          <Transition
            enter-active-class="transition-all duration-700 ease-in-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[3000px]"
            leave-active-class="transition-all duration-500 ease-in-out"
            leave-from-class="opacity-100 max-h-[3000px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div
              v-if="data.expanded"
              class="overflow-hidden ml-6 mt-4 space-y-6"
            >

              <div
                v-for="(child, i) in data.children"
                :key="i"
                class="grid grid-cols-[180px_1fr] gap-8 items-start"
              >

                <!-- Left Label -->
                <div class="relative pl-6 py-3">
                  <span
                    class="absolute left-0 top-1/2 w-4 border-t border-steel/40"
                  ></span>

                  <p class="text-teal font-medium">
                    {{ child.label }}
                  </p>
                </div>

                <!-- Editor Card -->
                <div
                  class="rounded-lg overflow-hidden border border-steel/30 bg-charcoal shadow-lg"
                >

                  <!-- Header -->
                  <div
                    class="flex items-center justify-between px-4 py-2 bg-topbar border-b border-steel/30"
                  >
                    <div class="flex items-center gap-2">
                      <Icon
                        icon="vscode-icons:file-type-markdown"
                        width="16"
                      />

                      <span class="text-xs text-steel">
                        {{ child.file }}
                      </span>
                    </div>

                    <Icon
                      icon="mdi:close"
                      width="14"
                      class="text-steel"
                    />
                  </div>

                  <!-- Content -->
                  <div class="p-5">

                    <!-- Company -->
                    <template v-if="child.label === 'Company'">
                      <h3 class="text-orchid text-xl mb-4">
                        {{ child.value.name }}
                      </h3>

                      <div class="space-y-2 text-sage">
                        <p><span class="text-keyword">Industry:</span> {{ child.value.industry }}</p>
                        <p><span class="text-keyword">Location:</span> {{ child.value.location }}</p>
                        <p><span class="text-keyword">Website:</span> {{ child.value.website }}</p>
                      </div>
                    </template>

                    <!-- Position -->
                    <template v-else-if="child.label === 'Position'">
                      <h3 class="text-orchid text-xl mb-4">
                        {{ child.value.title }}
                      </h3>

                      <div class="space-y-2 text-sage">
                        <p><span class="text-keyword">Team:</span> {{ child.value.team }}</p>
                        <p><span class="text-keyword">Employment:</span> {{ child.value.type }}</p>
                      </div>
                    </template>

                    <!-- Duration -->
                    <template v-else-if="child.label === 'Duration'">
                      <div class="space-y-2 text-sage">
                        <p><span class="text-keyword">Period:</span> {{ child.value.period }}</p>
                        <p><span class="text-keyword">Length:</span> {{ child.value.length }}</p>
                      </div>
                    </template>

                    <!-- Responsibilities -->
                    <template v-else-if="child.label === 'Responsibilities'">
                      <div>
                        <h3 class="text-orchid text-xl mb-4">
                          Responsibilities
                        </h3>

                        <ul class="space-y-3">
                          <li
                            v-for="(item, idx) in child.value"
                            :key="idx"
                            class="flex items-start gap-3 text-sage"
                          >
                            <Icon
                              icon="mdi:check-circle-outline"
                              width="18"
                              class="text-keyword mt-0.5 shrink-0"
                            />

                            <span>{{ item }}</span>
                          </li>
                        </ul>
                      </div>
                    </template>

                    <!-- Technologies -->
                    <template v-else-if="child.label === 'Technologies'">
                      <div>
                        <h3 class="text-orchid text-xl mb-4">
                          Technologies
                        </h3>

                        <div class="flex flex-wrap gap-3">
                          <span
                            v-for="(tech, idx) in child.value"
                            :key="idx"
                            class="px-3 py-1 rounded-md bg-topbar border border-steel/30 text-keyword text-sm"
                          >
                            {{ tech }}
                          </span>
                        </div>
                      </div>
                    </template>

                    <!-- Fallback -->
                    <template v-else>
                      <p class="text-orchid">
                        {{ child.value }}
                      </p>
                    </template>

                  </div>

                </div>

              </div>

            </div>
          </Transition>

        </div>
      </template>
    </div>
  </div>
  
  



  
</template>

<script setup>
  import { ref } from "vue";
  import { Icon } from "@iconify/vue";
const yearsExperience = ref([
  {
    year: 'April 2021',
    expanded: false,
    children: [
      {
        label: 'Company',
        file: 'company.md',
        value: {
          name: 'MNLeistung',
          industry: 'Software Development',
          location: 'Philippines',
          website: 'https://example.com'
        }
      },
      {
        label: 'Position',
        file: 'position.md',
        value: {
          title: 'PHP Developer',
          team: 'Web Development',
          type: 'Full-time'
        }
      },
      {
        label: 'Duration',
        file: 'duration.md',
        value: {
          period: '2021 - 2023',
          length: '2+ Years'
        }
      },
      {
        label: 'Responsibilities',
        file: 'responsibilities.md',
        value: [
          'Developed and maintained a Construction Bidding System tailored to client business requirements.',
          'Led the development of a Hospital Management System from planning through implementation.',
          'Worked directly with clients by conducting on-site meetings and requirements gathering for various projects.',
          'Presented technical proposals, system architecture, and implementation plans to stakeholders.'
        ]
      },
      {
        label: 'Technologies',
        file: 'tech-stack.json',
        value: [
          'Laravel',
          'PHP',
          'MySQL',
          'JavaScript',
          'jQuery',
          'Bootstrap',
          'Git',
          'REST API',
          'AlpineJS',
          'CSS'
        ]
      }
    ]
  },
  {
    year: 'August 2019',
    expanded: true,
    children: [
      {
        label: 'Company',
        file: 'company.md',
        value: {
          name: 'GoCloud Inc.',
          industry: 'Software Development',
          location: 'Philippines',
          website: 'https://example.com'
        }
      },
      {
        label: 'Position',
        file: 'position.md',
        value: {
          title: 'Programmer',
          team: 'Web Development',
          type: 'Full-time'
        }
      },
      {
        label: 'Duration',
        file: 'duration.md',
        value: {
          period: '2019 - 2021',
          length: '~2 Years'
        }
      },
      {
        label: 'Responsibilities',
        file: 'responsibilities.md',
        value: [
          'Maintained and enhanced legacy web applications.',
          'Developed new features based on business requirements.',
          'Migrated legacy modules into a modern architecture.',
          'Fixed production issues and optimized performance.',
          'Collaborated with QA and stakeholders during testing.',
          'Implemented new features and enhancements for an existing e-commerce platform based on client requirements.'
        ]
      },
      {
        label: 'Technologies',
        file: 'tech-stack.json',
        value: [
          'Laravel',
          'PHP',
          'MySQL',
          'JavaScript',
          'jQuery',
          'Bootstrap',
          'Git',
          'REST API'
        ]
      }
    ]
  },
])
</script>