<template>
  <GridBackground />

  <div class="w-full flex justify-center">
    <div class="w-full max-w-6xl p-4 sm:p-6 md:p-8">
      <template v-for="(data, index) in projects" :key="index">
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
              {{ data.period }}
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
                v-for="(category, i) in data.categories"
                :key="i"
                class="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 items-start"
              >
                <!-- Left -->
                <div class="flex items-center gap-2 md:gap-3 py-1 md:py-3">
                  <span class="hidden md:block w-4 border-t border-steel/40"></span>

                  <p class="text-teal font-medium text-xs sm:text-sm md:text-base">
                    {{ category.title }}
                  </p>
                </div>

                <!-- Right -->
                <div class="space-y-6">

                  <div
                    v-for="(project, p) in category.projects"
                    :key="p"
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
                          {{ project.name.toLowerCase().replace(/\s+/g, '-') }}.md
                        </span>
                      </div>

                      <Icon
                        icon="mdi:close"
                        width="14"
                        class="text-steel"
                      />
                    </div>

                    <!-- Body -->
                    <div class="p-4 sm:p-6">

                      <h3 class="text-orchid text-xl sm:text-2xl font-bold mb-3 sm:mb-5">
                        {{ project.name }}
                      </h3>
                      
                      <!-- Description -->
                      <p class="text-white leading-relaxed text-sm sm:text-[15px] mb-5">
                        {{ project.description }}
                      </p>

                      <!-- Gallery -->
                      <div
                        v-if="project.screenshots?.length"
                        class="mb-6 sm:mb-10"
                      >
                        <!-- 1 Screenshot -->
                        <div
                          v-if="project.screenshots.length === 1"
                          class="overflow-hidden rounded-lg border border-steel/30 aspect-video"
                        >
                          <img
                            :src="project.screenshots[0]"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          >
                        </div>

                        <!-- 2 Screenshots -->
                        <div
                          v-else-if="project.screenshots.length === 2"
                          class="grid grid-cols-1 sm:grid-cols-3 gap-2 h-auto sm:h-60"
                        >

                          <!-- Featured -->
                          <div
                            class="col-span-1 sm:col-span-2 overflow-hidden rounded-lg border border-steel/30 h-48 sm:h-full"
                          >
                            <img
                              :src="project.screenshots[0]"
                              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            >
                          </div>

                          <!-- Side -->
                          <div
                            class="overflow-hidden rounded-lg border border-steel/30 h-48 sm:h-full"
                          >
                            <img
                              :src="project.screenshots[1]"
                              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            >
                          </div>

                        </div>

                        <!-- 3+ Screenshots -->
                        <div
                          v-else
                          class="grid grid-cols-1 sm:grid-cols-3 gap-2 h-auto sm:h-60"
                        >

                          <!-- Featured -->
                          <div
                            class="col-span-1 sm:col-span-2 overflow-hidden rounded-lg border border-steel/30 h-48 sm:h-full"
                          >
                            <img
                              :src="project.screenshots[0]"
                              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            >
                          </div>

                          <!-- Right Side -->
                          <div class="grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 gap-2">

                            <div
                              v-for="(image, idx) in project.screenshots.slice(1, 3)"
                              :key="idx"
                              class="overflow-hidden rounded-lg border border-steel/30 h-32 sm:h-full"
                            >
                              <img
                                :src="image"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              >
                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="flex flex-col lg:flex-row justify-between gap-6">
                        <div class="pr-0 lg:pr-4 flex-1">
                          <h3 class="text-orchid text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                            {{ project.type === 'work' ? 'Key Contributions' : 'Features'}}
                            
                          </h3>

                          <ul class="space-y-2.5 sm:space-y-3">
                            <li
                              v-for="(feat, idx) in project.features"
                              :key="idx"
                              class="flex items-start gap-2.5 sm:gap-3 text-white"
                            >
                              <Icon
                                icon="mdi:check-circle-outline"
                                width="18"
                                class="text-keyword mt-0.5 shrink-0"
                              />

                              <span class="leading-relaxed text-xs sm:text-sm">{{ feat }}</span>
                            </li>
                          </ul>
                        </div>
                        <div class="flex-1">
                          <h3 class="text-orchid text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                            Technologies
                          </h3>

                          <div class="flex flex-wrap gap-2 sm:gap-3">
                            <span
                              v-for="(tech, idx) in project.technologies"
                              :key="idx"
                              class="px-2.5 py-1 rounded-md bg-topbar border border-steel/30 text-keyword text-xs sm:text-sm font-medium"
                            >
                              {{ tech }}
                            </span>
                          </div>

                          <div class="space-y-2 text-xs sm:text-sm text-sage">
                            <div class="my-4 sm:my-5 w-full h-px bg-steel/40"></div>

                            <p>
                              <span class="text-keyword font-medium">Period:</span>
                              {{ project.period }}
                            </p>

                            <p class="flex items-center">
                              <span class="text-keyword font-medium">Type:</span>

                              <span
                                class="capitalize px-2 py-0.5 rounded text-xs ml-2"
                                :class="project.type === 'personal'
                                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                  : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'"
                              >
                                {{ project.type }}
                              </span>
                            </p>

                            <p v-if="project.demo" class="break-all">
                              <span class="text-keyword font-medium">Demo:</span>

                              <a :href="project?.demo" class="px-2 py-1 text-primary hover:underline" target="_blank">{{ project?.demo }}</a>
                            </p>
                          </div>
                        </div>
                      </div>

                     

                    </div>

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

  const image = (path) => `${import.meta.env.BASE_URL}assets/images/${path}`;

  const projects = ref([
  {
    period: 'September 2023 - Present',
    expanded: true,

    categories: [
      {
        title: 'Web Applications',
        expanded: true,

        projects: [
          {
            name: 'Portfolio Builder',
            file: 'project.vue',
            type: 'personal',
            role: 'Fullstack Developer',
            status: 'In Progress',
            period: '2026',
            demo : '',
            description: 'A simple portfolio builder that allows users to create portfolio websites using reusable sections and blocks.',

            technologies: [
              'Laravel',
              'Vue.js',
              'Tailwind CSS',
              'MySQL'
            ],

            features: [
              'Create and manage portfolios',
              'Choose from default templates',
              'Support for multiple templates',
              'Real-time live preview',
              'Responsive design'
            ],

            screenshots: [
              image('portfolio/cv_builder/dashboard.png'),
              image('portfolio/cv_builder/create_portfolio.png'),
              image('portfolio/cv_builder/builder.png'),
              image('portfolio/cv_builder/public_view.png'),
            ]
          },

          {
            name: 'Revolving Fund',
            file: 'prject.ts',
            type: 'personal',
            role: 'Fullstack Developer',
            status: 'In Progress',
            period: '2026',
            description: 'A web-based Revolving Fund Management System that streamlines fund requests, approvals, reimbursements, replenishments, and financial tracking.',

            technologies: [
              'Laravel',
              'ReactJs',
              'Tailwind CSS',
              'MySQL'
            ],

            features: [
              'Cash Advance',
              'Reconciliation',
              'Reimbursements',
              'Replenish',
              'Transaction History',
              'Cash Flow',
              'Export File'
            ],

            screenshots: [
              image('portfolio/revolving_fund/login.png'),
              image('portfolio/revolving_fund/cashflow/cashflow.png'),
              image('portfolio/revolving_fund/transactions/1.png'),
              image('portfolio/revolving_fund/transactions/cash_advance.png'),
              image('portfolio/revolving_fund/transactions/reconciliation.png'),
              image('portfolio/revolving_fund/transactions/replenish.png'),
              image('portfolio/revolving_fund/transactions/transaction_history.png'),
              image('portfolio/revolving_fund/transactions/reimbursements.png'),
            ]
          },

          {
            name: 'Omnichannel Platform',
            file: 'prject.js',
            type: 'work',
            role: 'Frontend Developer',
            status: 'In Progress',
            period: '2023 - 2025',
            description: 'Part of the development team building an omnichannel platform that integrates multiple communication channels into a unified customer interaction system.',

            technologies: [
              'Laravel',
              'Vue.js',
              'API Integration',
              'MySQL',
              'More ...'
            ],

            features: [
              'Feature development',
              'Bug fixing and maintenance',
              'Code reviews',
              'API integration',
              'UI/UX improvements'
            ],
          },

          {
            name: 'Unified Portal',
            file: 'prject.js',
            type: 'work',
            role: 'Frontend Developer',
            status: 'In Progress',
            period: '2025 - Current',
            description: 'Contributed to the development of a unified portal that integrates multiple communication channels.',

            technologies: [
              'Laravel',
              'Vue.js',
              'API Integration',
              'MySQL',
              'More ...'
            ],

            features: [
              'Feature development',
              'Bug fixing and maintenance',
              'Code reviews',
              'API integration',
              'UI/UX improvements'
            ],
          }
        ]
      },
    ]
  },
  {
    period: 'September 2021 - 2023',
    expanded: false,

    categories: [
      {
        title: 'Web Applications',
        expanded: true,

        projects: [
          {
            name: 'Hospital Management System',
            file: 'project.vue',
            type: 'work',
            role: 'Fullstack Developer',
            status: '-',
            period: '2022 - 2023',
            demo : '',
            description: 'Developed and maintained a hospital system supporting healthcare workflows, data management, and operational processes.',

            technologies: [
              'Laravel',
              'Websockets',
              'Real-time Data',
              'MySQL',
              'Jquery',
              'API Integration',
              'alpineJs'
            ],

            features: [
              'Led the development team',
              'Presented system demos to clients',
              'Developed key application features',
              'Managed codebase integration and merges',
              'Collaborated with clients to define requirements',
              'Debugged and resolved application issues'
            ],
          },

          {
            name: 'Construction Bidding System',
            file: 'prject.ts',
            type: 'work',
            role: 'Fullstack Developer',
            status: '-',
            period: '2021',
            description: 'Built a web-based bidding platform that manages project proposals, contractor submissions, evaluation processes, and bidding workflows.',

            technologies: [
              'Laravel',
              'Jquery',
              'Websockets',
              'Real-time Data',
              'MySQL',
              'API Integration'
            ],

            features: [
              'Developed key application features',
              'Managed codebase integration and merges',
              'Collaborated with clients to define requirements',
              'Debugged and resolved application issues',
              'Implemented API integrations'
            ],
          },
        ]
      },
    ]
  },
  {
    period: 'August 2019 - 2021',
    expanded: false,

    categories: [
      {
        title: 'Web Applications',
        expanded: true,

        projects: [
          {
            name: 'Hotel Management System Migration',
            file: 'project.vue',
            type: 'work',
            role: 'Fullstack Developer',
            status: '-',
            period: '2019 - 2020',
            demo : '',
            description: 'Migrated an existing hotel management system from legacy PHP into Laravel, improving code maintainability, application structure, and scalability. Implemented new features and optimized existing workflows for better performance.',

            technologies: [
              'HTML5',
              'CSS3',
              'JavaScript',
              'Bootstrap',
              'jQuery'
            ],

            features: [
              'Migrated legacy PHP applications to Laravel for improved maintainability',
              'Debugged and resolved application issues',
              'Collaborated with project owners on requirements and solutions',
              'Enhanced existing features and system stability'
            ],
          },

          {
            name: 'Clinic Management System',
            file: 'prject.ts',
            type: 'work',
            role: 'Fullstack Developer',
            status: '-',
           period: '2020 - 2021',
            description: 'Developed a web-based clinic management system to streamline patient records, appointments, and administrative workflows. Built features to improve daily operations and data management.',

            technologies: [
              'Laravel',
              'Jquery',
              'MySQL',
              'CSS',
              'Bootstrap'
            ],

            features: [
              'Led application development and feature implementation',
              'Maintained and improved codebase quality',
              'Fixed bugs and resolved technical issues',
              'Conducted project demos and feature walkthroughs.'
            ],
          },
        ]
      },

      {
        title: 'Websites',
        expanded: false,

        projects: [
          {
            name: 'Club Laiya',
            file: 'project.vue',
            type: 'work',
            role: 'Frontend Developer',
            status: '-',
            period: '2020 - 2021',
            demo : 'https://kulaskulas.github.io/club-laiya-static-website/',
            description: 'A responsive resort website featuring accommodations, amenities, galleries, and booking information.',

            technologies: [
              'HTML5',
              'CSS3',
              'JavaScript',
              'Bootstrap',
              'jQuery'
            ],

            features: [
              'Developed the complete website from design to implementation',
              'Designed and improved UI/UX for better user experience',
              'Ensured mobile responsiveness across devices.'
            ],

            screenshots: [
              image('portfolio/static_website/club_laiya/home.png')
            ]
          },

          {
            name: 'Aquaria',
            file: 'project.vue',
            type: 'work',
            role: 'Frontend Developer',
            status: '-',
            period: '2020 - 2021',
            demo : 'https://kulaskulas.github.io/aquaria-static-website/',
            description: 'A responsive resort website featuring accommodations, amenities, galleries, and booking information.',

            technologies: [
              'HTML5',
              'CSS3',
              'JavaScript',
              'Bootstrap',
              'jQuery'
            ],

            features: [
              'Developed the complete website from design to implementation',
              'Designed and improved UI/UX for better user experience',
              'Ensured mobile responsiveness across devices.'
            ],

            screenshots: [
              image('portfolio/static_website/aquaria/home.png')
            ]
          },

          {
            name: 'Aqua',
            file: 'project.vue',
            type: 'work',
            role: 'Frontend Developer',
            status: '-',
            period: '2020 - 2021',
            demo : 'https://kulaskulas.github.io/aqua-static-website/',
            description: 'A responsive resort website featuring accommodations, amenities, galleries, and booking information.',

            technologies: [
              'HTML5',
              'CSS3',
              'JavaScript',
              'Bootstrap',
              'jQuery'
            ],

            features: [
              'Developed the complete website from design to implementation',
              'Designed and improved UI/UX for better user experience',
              'Ensured mobile responsiveness across devices.'
            ],

            screenshots: [
              image('portfolio/static_website/aqua/home.png')
            ]
          },
        ]
      },
    ]
  },
])
</script>