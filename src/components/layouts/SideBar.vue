<template>
  <aside 
    class="fixed top-10 left-0 h-screen bg-obsidian transition-[width] duration-300 ease-in-out"
    :class="pageStore.isSidebarOpen ? 'w-80' : 'w-15'"
    >
    <div class="flex">
      <nav class="flex items-center justify-between w-full p-4">
        <h1 v-if="pageStore.isSidebarOpen" class="text-white text-2xl font-bold">
          Pages
        </h1>

        <button
          class="text-steel hover:text-white transition-colors cursor-pointer"
        >
          <Icon 
            :icon="pageStore.isSidebarOpen ? 'mdi:dock-left' : 'mdi:dock-right'" class="text-xl" 
            @click="pageStore.isSidebarOpen = !pageStore.isSidebarOpen" />
        </button>
      </nav>
    </div>
    <nav>
      <ul>
        <li v-for="(nav, index) in navItems" :key="index" @click="pageStore.setActivePage(nav)">
          <router-link
            :to="nav.path"
            @click="pageStore.setActivePage(nav)"
            class="flex items-center gap-3 w-full px-4 py-2 text-white hover:bg-slate"
            :class="{ 'bg-slate': isActivePage(nav.name) }"
          >
            <template v-if="pageStore.isSidebarOpen">
              <Icon :icon="isActivePage(nav.name) ? nav.icon_opened : nav.icon" class="text-lg shrink-0" />
              <span>{{ nav.name }}</span>
            </template>
            <template v-else>
              <div class="relative mt-2 group">
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
            
            <!-- <Icon :icon="isActivePage(nav.name) ? nav.icon_opened : nav.icon" class="text-lg shrink-0" /> -->
            <!-- <span>{{ nav.name }}</span> -->
          </router-link>
        </li>
      </ul>
    </nav>
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