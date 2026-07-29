<template>
  <!-- Mobile Backdrop Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="pageStore.isMobileSidebarOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden"
      @click="pageStore.closeMobileSidebar()"
    ></div>
  </Transition>

  <!-- Sidebar Container (Desktop & Mobile) -->
  <aside 
    class="fixed top-10 left-0 h-[calc(100vh-2.5rem)] bg-obsidian transition-all duration-300 ease-in-out z-50 shadow-2xl md:shadow-none border-r border-steel/20"
    :class="[
      // Desktop positioning
      'md:block',
      pageStore.isSidebarOpen ? 'md:w-80' : 'md:w-15',
      // Mobile positioning (slide in drawer)
      pageStore.isMobileSidebarOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0'
    ]"
  >
    <div class="flex">
      <nav class="flex items-center justify-between w-full p-4">
        <h1 
          v-if="pageStore.isSidebarOpen || pageStore.isMobileSidebarOpen" 
          class="text-white text-xl md:text-2xl font-bold"
        >
          Pages
        </h1>

        <!-- Desktop dock toggle -->
        <button
          class="hidden md:block text-steel hover:text-white transition-colors cursor-pointer"
        >
          <Icon 
            :icon="pageStore.isSidebarOpen ? 'mdi:dock-left' : 'mdi:dock-right'" class="text-xl" 
            @click="pageStore.isSidebarOpen = !pageStore.isSidebarOpen" />
        </button>

        <!-- Mobile close button -->
        <button
          class="md:hidden text-steel hover:text-white transition-colors cursor-pointer"
          @click="pageStore.closeMobileSidebar()"
        >
          <Icon icon="mdi:close" class="text-xl" />
        </button>
      </nav>
    </div>

    <nav class="px-2 md:px-0">
      <ul class="space-y-1 md:space-y-0">
        <li v-for="(nav, index) in navItems" :key="index" @click="pageStore.setActivePage(nav)">
          <router-link
            :to="nav.path"
            @click="pageStore.setActivePage(nav)"
            class="flex items-center gap-3 w-full px-4 py-2.5 text-white hover:bg-slate rounded-lg md:rounded-none transition-colors"
            :class="{ 'bg-slate font-medium': isActivePage(nav.name) }"
          >
            <template v-if="pageStore.isSidebarOpen || pageStore.isMobileSidebarOpen">
              <Icon :icon="isActivePage(nav.name) ? nav.icon_opened : nav.icon" class="text-xl shrink-0" />
              <span class="text-sm md:text-base">{{ nav.name }}</span>
            </template>
            <template v-else>
              <div class="relative mt-1 group">
                <Icon :icon="nav.icon_toggle" class="text-lg shrink-0"/>
                <span
                  class="absolute left-full top-1/2 ml-3 -translate-y-1/2
                    whitespace-nowrap rounded-md bg-white px-2 py-1
                    text-xs font-medium text-gray-900 shadow-xl
                    opacity-0 -translate-x-1
                    transition-all duration-200
                    group-hover:opacity-100 group-hover:translate-x-0
                    pointer-events-none z-50"
                >{{ nav.name }}</span>
              </div>
            </template>
          
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Bottom Contact -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 blur-sm translate-y-2"
      enter-to-class="opacity-0 blur-0 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-0 blur-0 translate-y-0"
      leave-to-class="opacity-0 blur-sm translate-y-2"
    >
      <div
      v-if="pageStore.isSidebarOpen || pageStore.isMobileSidebarOpen"
      class="absolute bottom-0 left-0 w-full border-t border-steel/20 bg-obsidian p-5"
    >
      <p class="mb-4 text-xs uppercase tracking-widest text-steel">
        Connect
      </p>

      <div class="space-y-4">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=karlcabangon24@email.com"
          class="group flex items-start gap-3"
        >
          <Icon
            icon="mdi:email-outline"
            class="mt-0.5 shrink-0 text-lg text-orchid"
          />

          <div class="min-w-0">
            <p class="text-xs text-steel">Email</p>
            <p class="break-all text-sm text-white transition-colors group-hover:text-orchid">
              karlcabangon24@gmail.com
            </p>
          </div>
        </a>

        <a
          href="https://github.com/kulaskulas"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-start gap-3"
        >
          <Icon
            icon="mdi:github"
            class="mt-0.5 shrink-0 text-lg text-orchid"
          />

          <div class="min-w-0">
            <p class="text-xs text-steel">GitHub</p>
            <p class="break-all text-sm text-white transition-colors group-hover:text-orchid">
              github.com/kulaskulas
            </p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/karl-cabangon-47aaa71b6/"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-start gap-3"
        >
          <Icon
            icon="mdi:linkedin"
            class="mt-0.5 shrink-0 text-lg text-orchid"
          />

          <div class="min-w-0">
            <p class="text-xs text-steel">LinkedIn</p>
            <p class="break-all text-sm text-white transition-colors group-hover:text-orchid">
              linkedin.com/in/karl-cabangon-47aaa71b6
            </p>
          </div>
        </a>
      </div>
    </div>
  
    </Transition>
    

  </aside>
</template>


<script setup>
  import { usePageStore } from '@/stores';
  import { Icon } from "@iconify/vue";
  import { computed } from 'vue';

  const pageStore = usePageStore();

  const isActivePage = (name) => pageStore.activePage === name;

  const navItems = [
    { name: 'Home', href: '#', path: '/home', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened', icon_toggle: 'lucide:house'  },
    { name: 'About', href: '#', path: '/about', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened', icon_toggle: 'lucide:user' },
    { name: 'Experience', href: '#', path: '/experience', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened', icon_toggle: 'lucide:briefcase-business' },
    { name: 'Projects', href: '#', path: '/projects', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened', icon_toggle: 'lucide:blocks' },
    { name: 'Skills', href: '#', path: '/skills', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened', icon_toggle: 'lucide:cpu' },
  ];
</script>