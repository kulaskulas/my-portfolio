<template>
  <aside class="fixed top-10 left-0 bg-obsidian h-screen w-80">
    <nav class="p-4">
      <h1 class="text-white text-2xl font-bold">Pages</h1>
    </nav>

    <nav>
      <ul>
        <li v-for="(nav, index) in navItems" :key="index" @click="pageStore.setActivePage(nav)">
          <router-link
            :to="nav.path"
            @click="pageStore.setActivePage(nav)"
            class="flex items-center gap-3 w-full px-4 py-2 text-white hover:bg-slate"
            :class="{ 'bg-slate': isActivePage(nav.name) }"
          >
            <Icon :icon="isActivePage(nav.name) ? nav.icon_opened : nav.icon" class="text-lg shrink-0" />
            <span>{{ nav.name }}</span>
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
    { name: 'Home', href: '#', path: '/home', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened' },
    { name: 'About', href: '#', path: '/about', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened' },
    { name: 'Experience', href: '#', path: '/experience', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened' },
    { name: 'Projects', href: '#', path: '/projects', icon : 'vscode-icons:default-folder', icon_opened: 'vscode-icons:default-folder-opened' },
  ];
</script>