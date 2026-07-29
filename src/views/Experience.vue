<template>
  <GridBackground/>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-6xl p-4 sm:p-6 md:p-8">
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
            class="relative z-10 flex items-center gap-1 py-1 px-1 cursor-pointer hover:bg-topbar rounded w-full"
            @click="data.expanded = !data.expanded"
          >
            <Icon
              icon="fluent:caret-right-16-filled"
              width="16"
              class="text-steel transition-transform duration-200"
              :class="{ 'rotate-90': data.expanded }"
            />

            <p class="text-xs sm:text-sm font-semibold text-white">
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
              class="overflow-hidden ml-2 sm:ml-6 mt-4 space-y-6"
            >

              <div
                v-for="(child, i) in data.children"
                :key="i"
                class="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 items-start"
              >

                <!-- Left Label -->
                <div class="relative pl-4 md:pl-6 py-1 md:py-3">
                  <span
                    class="hidden md:block absolute left-0 top-1/2 w-4 border-t border-steel/40"
                  ></span>

                  <p class="text-teal font-medium text-xs sm:text-sm md:text-base">
                    {{ child.label }}
                  </p>
                </div>

                <!-- Editor Card -->
                <div
                  class="rounded-lg overflow-hidden border border-steel/30 bg-charcoal shadow-lg"
                >

                  <!-- Header -->
                  <div
                    class="flex items-center justify-between px-3 sm:px-4 py-2 bg-topbar border-b border-steel/30"
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
                  <div class="p-4 sm:p-5">

                    <!-- Company -->
                    <template v-if="child.label === 'Company'">
                      <h3 class="text-orchid text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                        {{ child.value.name }}
                      </h3>

                      <div class="space-y-2 text-sm sm:text-base text-sage">
                        <p><span class="text-keyword font-medium">Industry:</span> {{ child.value.industry }}</p>
                        <p><span class="text-keyword font-medium">Location:</span> {{ child.value.location }}</p>
                        <p><span class="text-keyword font-medium">Website:</span> <a :href="child.value.website" target="_blank" class="hover:underline text-orchid/80">{{ child.value.website }}</a></p>
                      </div>
                    </template>

                    <!-- Position -->
                    <template v-else-if="child.label === 'Position'">
                      <h3 class="text-orchid text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                        {{ child.value.title }}
                      </h3>

                      <div class="space-y-2 text-sm sm:text-base text-sage">
                        <p><span class="text-keyword font-medium">Team:</span> {{ child.value.team }}</p>
                        <p><span class="text-keyword font-medium">Employment:</span> {{ child.value.type }}</p>
                      </div>
                    </template>

                    <!-- Duration -->
                    <template v-else-if="child.label === 'Duration'">
                      <div class="space-y-2 text-sm sm:text-base text-sage">
                        <p><span class="text-keyword font-medium">Period:</span> {{ child.value.period }}</p>
                        <p><span class="text-keyword font-medium">Length:</span> {{ child.value.length }}</p>
                      </div>
                    </template>

                    <!-- Responsibilities -->
                    <template v-else-if="child.label === 'Responsibilities'">
                      <div>
                        <h3 class="text-orchid text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                          Responsibilities
                        </h3>

                        <ul class="space-y-2.5 sm:space-y-3">
                          <li
                            v-for="(item, idx) in child.value"
                            :key="idx"
                            class="flex items-start gap-2.5 sm:gap-3 text-white text-xs sm:text-sm md:text-base"
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
                        <h3 class="text-orchid text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                          Technologies
                        </h3>

                        <div class="flex flex-wrap gap-2 sm:gap-3">
                          <span
                            v-for="(tech, idx) in child.value"
                            :key="idx"
                            class="px-2.5 py-1 rounded-md bg-topbar border border-steel/30 text-keyword text-xs sm:text-sm font-medium"
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
  import GridBackground from '@/components/ui/GridBackground.vue';
const yearsExperience = ref([
  {
    year: 'September 2023 - Current',
    expanded: true,
    children: [
      {
        label: 'Company',
        file: 'company.md',
        value: {
          name: 'M360',
          industry: 'Communication Tech, SMS API, Omni Channel',
          location: 'Philippines',
          website: 'https://www.m360.com.ph/'
        }
      },
      {
        label: 'Position',
        file: 'position.md',
        value: {
          title: 'Software Engineer',
          team: 'Application & Platforms',
          type: 'Full-time'
        }
      },
      {
        label: 'Duration',
        file: 'duration.md',
        value: {
          period: '2023 - Current',
          length: '~2 Years'
        }
      },
      {
        label: 'Responsibilities',
        file: 'responsibilities.md',
        value: [
          'Implemented new features and maintained existing systems to improve application functionality.',
          'Handled client support requests using Zendesk by investigating issues and providing technical solutions.',
          'Reviewed application logs and debugging information to diagnose and fix production issues.',
          'Collaborated on UI/UX improvements by creating responsive and user-friendly interfaces.',
          'Perform code reviews to ensure code quality, maintainability, and adherence to best practices'

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
          'VueJs',
          'Ubuntu Web Server',
          'Tailwind',
          'Git',
          'REST API',
          'AlpineJS',
          'CSS'
        ]
      }
    ]
  },
  {
    year: 'April 2021 - 2023',
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
    year: 'August 2019 - 2021',
    expanded: false,
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
          'Implemented new features and enhancements for an existing e-commerce platform based on client requirements.',
          'Built responsive and user-friendly websites based on client requirements.',
          'Developed and maintained WordPress websites, including theme customization and plugin integration.',
          'Customized WordPress themes and implemented new features to meet business and client needs.'
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