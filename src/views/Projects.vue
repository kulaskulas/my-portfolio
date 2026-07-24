<template>
  <div
    class="absolute inset-0 pointer-events-none
      bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)]
      bg-[size:56px_100%]">
  </div>
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
          value: 'A customizable portfolio builder that allows developers to create portfolio websites using reusable sections and blocks.'
        },
        {
          label: 'Features',
          file: 'features.md',
          value: [
            'Dynamic page builder',
            'Multiple templates',
            'Live preview',
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
            'https://placehold.co/1200x700/1f2937/ffffff?text=Developer+Portfolio',
            'https://placehold.co/1200x700/0f172a/ffffff?text=Ecommerce+Dashboard',
            'https://placehold.co/1200x700/111827/22c55e?text=Laravel+%2B+Vue.js'
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
            '../../public/assets/images/portfolio/revolving_fund/login.png',
            '../../public/assets/images/portfolio/revolving_fund/cashflow/cashflow.png',
            '../../public/assets/images/portfolio/revolving_fund/transactions/1.png',
            '../../public/assets/images/portfolio/revolving_fund/transactions/cash_advance.png',
            '../../public/assets/images/portfolio/revolving_fund/transactions/reconciliation.png',
            '../../public/assets/images/portfolio/revolving_fund/transactions/replenish.png',
            '../../public/assets/images/portfolio/revolving_fund/transactions/transaction_history.png',
            '../../public/assets/images/portfolio/revolving_fund/replenishments/replenishments.png',
          ]
        }
      ]
    }
  ])
</script>