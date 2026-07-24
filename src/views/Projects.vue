<template>
  <div
    class="absolute inset-0 pointer-events-none
      bg-[linear-gradient(to_right,rgba(43,43,43,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(43,43,43,0.08)_1px,transparent_1px)]
      bg-[length:48px_48px]"
  ></div>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-6xl p-10">
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
              {{ data.title }}
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
                class="grid grid-cols-[100px_1fr] gap-8 items-start"
              >

                <!-- Left Label -->
                <div class="relative pl-6 py-3">
                  <span
                    class="absolute left-0 top-1/2 w-full border-t border-steel/40"
                  ></span>

                  <p class="text-teal font-medium">
                    {{ child.name }}
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

                  <div class="p-5">

                    <!-- Project -->
                    <template v-if="child.label === 'Project'">
                      <h3 class="text-orchid text-xl mb-4">
                        {{ child.value.name }}
                      </h3>

                      <div class="space-y-2 text-sage">
                        <p>
                          <span class="text-keyword">Status:</span>
                          {{ child.value.status }}
                        </p>

                        <p>
                          <span class="text-keyword">Period:</span>
                          {{ child.value.period }}
                        </p>

                        <p>
                          <span class="text-keyword">Type:</span>

                          <span
                            class="capitalize px-2 py-1 rounded text-xs ml-2"
                            :class="data.type === 'personal'
                              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                              : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'"
                          >
                            {{ data.type }}
                          </span>
                        </p>
                      </div>
                    </template>

                    <!-- Overview -->
                    <template v-else-if="child.label === 'Overview'">
                      <div>
                        <h3 class="text-orchid text-xl mb-4">
                          Overview
                        </h3>

                        <p class="text-white leading-8">
                          {{ child.value }}
                        </p>
                      </div>
                    </template>

                    <!-- Features -->
                    <template v-else-if="child.label === 'Features'">
                      <div>
                        <h3 class="text-orchid text-xl mb-4">
                          Features
                        </h3>

                        <ul class="space-y-3">
                          <li
                            v-for="(item, idx) in child.value"
                            :key="idx"
                            class="flex items-start gap-3 text-white"
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

                    <template v-else-if="child.label === 'Screenshots'">
                      <div>
                        <h3 class="text-orchid text-xl mb-4">
                          Screenshots
                        </h3>

                        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                          <div
                            v-for="(image, idx) in child.value"
                            :key="idx"
                            class="aspect-video overflow-hidden rounded-lg border border-steel/30 bg-topbar"
                          >
                            <img
                              :src="image"
                              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </template>

                    <!-- Websites -->
                    <template v-else-if="child.label === 'Websites'">
                      <div>
                        <h3 class="text-orchid text-xl mb-6">
                          Websites
                        </h3>

                        <div
                          v-for="(website, index) in child.value"
                          :key="index"
                          class="mb-8 rounded-lg border border-steel/30 bg-topbar overflow-hidden"
                        >

                          <!-- Header -->
                          <div class="px-5 py-3 border-b border-steel/30">
                            <h4 class="text-lg text-sage font-medium">
                              {{ website.name }}
                            </h4>

                            <p class="text-white mt-2">
                              {{ website.description }}
                            </p>
                          </div>

                          <!-- Screenshots -->
                          <div
                            v-if="website.screenshots?.length"
                            class="grid grid-cols-2 lg:grid-cols-3 gap-4 p-5"
                          >
                            <div
                              v-for="(image, idx) in website.screenshots"
                              :key="idx"
                              class="aspect-video rounded-lg overflow-hidden border border-steel/30"
                            >
                              <img
                                :src="image"
                                class="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                              />
                            </div>
                          </div>

                          <!-- Technologies -->
                          <div
                            v-if="website.technologies?.length"
                            class="flex flex-wrap gap-2 px-5 pb-5"
                          >
                            <span
                              v-for="(tech, idx) in website.technologies"
                              :key="idx"
                              class="px-3 py-1 rounded-md bg-charcoal border border-steel/30 text-keyword text-sm"
                            >
                              {{ tech }}
                            </span>
                          </div>

                          <!-- Links -->
                          <div
                            class="flex gap-3 px-5 pb-5"
                          >
                            <a
                              v-if="website.github"
                              :href="website.github"
                              target="_blank"
                              class="px-4 py-1 rounded bg-keyword text-charcoal hover:opacity-90 transition"
                            >
                              Demo
                            </a>
                          </div>

                        </div>
                      </div>
                    </template>

                    <!-- Projects -->
                    <template v-else-if="child.label === 'Projects'">
                      <div>
                        <h3 class="text-orchid text-xl mb-6">
                          Projects
                        </h3>

                        <div class="space-y-6">

                          <div
                            v-for="(project, index) in child.value"
                            :key="index"
                            class="rounded-lg border border-steel/30 bg-topbar overflow-hidden"
                          >

                            <!-- Project Header -->
                            <div class="px-5 py-4 border-b border-steel/30">
                              <h4 class="text-sage text-lg font-medium">
                                {{ project.name }}
                              </h4>

                              <p class="text-white mt-2 leading-relaxed">
                                {{ project.description }}
                              </p>
                            </div>


                            <!-- Project Details -->
                            <div class="p-5 space-y-4">

                              <!-- Role -->
                              <div v-if="project.role">
                                <span class="text-keyword">
                                  Role:
                                </span>

                                <span class="text-sage ml-2">
                                  {{ project.role }}
                                </span>
                              </div>


                              <!-- Technologies -->
                              <div v-if="project.technologies?.length">

                                <h5 class="text-orchid mb-3">
                                  Technologies
                                </h5>

                                <div class="flex flex-wrap gap-2">

                                  <span
                                    v-for="(tech, idx) in project.technologies"
                                    :key="idx"
                                    class="px-3 py-1 rounded-md 
                                    bg-charcoal border border-steel/30 
                                    text-keyword text-sm"
                                  >
                                    {{ tech }}
                                  </span>

                                </div>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>
                    </template>

                    <!-- Fallback -->
                    <template v-else>
                      <p class="text-sage">
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

  const image = (path) => `${import.meta.env.BASE_URL}assets/images/${path}`;

  const projects = ref([
    {
      title: 'Portfolio Builder',
      type: 'personal',
      expanded: false,
      children: [
        {
          label: 'Project',
          file: 'project.md',
          value: {
            name: 'Portfolio Builder',
            status: 'In Progress',
            period: '2026'
          }
        },
        {
          label: 'Overview',
          file: 'overview.md',
          value: 'A simple portfolio builder that allows user to create portfolio websites using reusable sections and blocks.'
        },
        {
          label: 'Features',
          file: 'features.md',
          value: [
            'Create and manage portfolios',
            'Choose from default templates',
            'Support for multiple templates',
            'Real-time live preview',
            'Responsive design'
          ]
        },
        {
          label: 'Technologies',
          file: 'tech-stack.json',
          value: [
            'Laravel',
            'Vue.js',
            'Tailwind CSS',
            'MySQL'
          ]
        },
        {
          label: 'Screenshots',
          file: 'screenshots.md',
          value: [
            image('portfolio/cv_builder/dashboard.png'),
            image('portfolio/cv_builder/create_portfolio.png'),
            image('portfolio/cv_builder/builder.png'),
            image('portfolio/cv_builder/public_view.png'),
          ]
        }
      ]
    },
    {
      title: 'Revolving Fund',
      type: 'personal',
      expanded: true,
      children: [
        {
          label: 'Project',
          file: 'project.md',
          value: {
            name: 'Revolving Fund',
            status: 'In Progress',
            period: '2026'
          }
        },
        {
          label: 'Overview',
          file: 'overview.md',
          value: 'A web-based Revolving Fund Management System that streamlines fund requests, approvals, reimbursements, replenishments, and financial tracking.'
        },
        {
          label: 'Features',
          file: 'features.md',
          value: [
            'Cash Advance',
            'Reconciliation',
            'Reimbursements',
            'Replenish',
            'Transaction History',
            'Cash Flow',
            'Export File'
          ]
        },
        {
          label: 'Technologies',
          file: 'tech-stack.json',
          value: [
            'Laravel',
            'ReactJs',
            'Tailwind CSS',
            'MySQL'
          ]
        },
        {
          label: 'Screenshots',
          file: 'screenshots.md',
          value: [
            image('portfolio/revolving_fund/login.png'),
            image('portfolio/revolving_fund/cashflow/cashflow.png'),
            image('portfolio/revolving_fund/transactions/1.png'),
            image('portfolio/revolving_fund/transactions/cash_advance.png'),
            image('portfolio/revolving_fund/transactions/reconciliation.png'),
            image('portfolio/revolving_fund/transactions/replenish.png'),
            image('portfolio/revolving_fund/transactions/transaction_history.png'),
            image('portfolio/revolving_fund/transactions/reimbursements.png'),
          ]
        }
      ]
    },
    {
      title: 'Static Websites',
      type: 'personal',
      expanded: false,
      children: [
        {
          label: 'Websites',
          file: 'websites.json',
          value: [
            {
              name: 'Club Laiya',
              description: 'A responsive resort website featuring accommodations, amenities, galleries, and booking information.',
              github: 'https://kulaskulas.github.io/club-laiya-static-website',
              technologies: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Bootstrap',
                'jQuery'
              ],
              screenshots: [
                image('portfolio/static_website/club_laiya/home.png'),
                // image('portfolio/static/club_laiya/2.png')
              ]
            },
            {
              name: 'Aquaria',
              description: 'A responsive resort website designed to showcase accommodations, amenities, and resort services with an engaging visual experience.',
              live: 'https://username.github.io/restaurant',
              github: 'https://kulaskulas.github.io/aquaria-static-website/',
              technologies: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Bootstrap',
                'jQuery'
              ],
              screenshots: [
                image('portfolio/static_website/aquaria/home.png'),
              ]
            },
            {
              name: 'Aqua',
              description: 'A responsive resort website designed to showcase accommodations, amenities, and services through a modern and visually engaging interface.',
              live: 'https://username.github.io/construction',
              github: 'https://kulaskulas.github.io/aqua-static-website/',
              technologies: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Bootstrap',
                'jQuery'
              ],
              screenshots: [
                image('portfolio/static_website/aqua/home.png'),
              ]
            }
          ]
        },
      ]
    },
    {
      title: '2023 - Present',
      type: 'work',
      expanded: false,
      children: [
        {
          label: 'Projects',
          file: 'projects.json',
          value: [
            {
              name: 'Omnichannel Platform',
              description: 'Part of the development team building an omnichannel platform that integrates multiple communication channels into a unified customer interaction system.',
              role: 'Software Engineer',
              technologies: [
                'Laravel',
                'Vue.js',
                'API Integration',
                'Real-time Data',
                'MySQL'
              ]
            },
            {
              name: 'Unified Portal',
              description: 'Contributed to the development of a unified portal that integrates multiple communication channels.',
              role: 'Software Engineer',
              technologies: [
                'Laravel',
                'Vue.js',
                'API Integration',
                'MySQL'
              ]
            }
          ]
        }
      ]
    },
    {
      title: '2021 - 2023',
      type: 'work',
      expanded: false,
      children: [
        {
          label: 'Projects',
          file: 'projects.json',
          value: [
            {
              name: 'Construction Bidding System',
              description: 'Built a web-based bidding platform that manages project proposals, contractor submissions, evaluation processes, and bidding workflows.',
              role: 'Fullstack Developer',
              technologies: [
                'Laravel',
                'Jquery',
                'Websockets',
                'Real-time Data',
                'MySQL',
                'API Integration'
              ]
            },
            {
              name: 'Hospital Management System',
              description: 'Developed and maintained a hospital system supporting healthcare workflows, data management, and operational processes.',
              role: 'Fullstack Developer',
              technologies: [
                'Laravel',
                'Websockets',
                'Real-time Data',
                'MySQL',
                'Jquery',
                'API Integration'
              ]
            }
          ]
        }
      ]
    },
    {
      title: '2019 - 2021',
      type: 'work',
      expanded: false,
      children: [
        {
          label: 'Projects',
          file: 'projects.json',
          value: [
            {
              name: 'Hotel Management System Migration',
              description: 'Migrated an existing hotel management system from legacy PHP into Laravel, improving code maintainability, application structure, and scalability. Implemented new features and optimized existing workflows for better performance.',
              role: 'Fullstack Developer',
              technologies: [
                'Laravel',
                'PHP',
                'MySQL',
                'JavaScript'
              ]
            },
            {
              name: 'Clinic Management System',
              description: 'Developed a web-based clinic management system to streamline patient records, appointments, and administrative workflows. Built features to improve daily operations and data management.',
              role: 'Fullstack Developer',
              technologies: [
                'Laravel',
                'PHP',
                'MySQL',
                'Bootstrap'
              ]
            }
          ]
        }
      ]
    },
  ])
</script>