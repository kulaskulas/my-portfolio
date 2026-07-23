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
            :class="{ 'bg-slate': pageStore.activePage === nav.name }"
          >
            <Icon :icon="nav.icon" class="text-lg shrink-0" />
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

  const pageStore = usePageStore();

  const navItems = [
    { name: 'Home', href: '#', path: '/home', icon : 'vscode-icons:default-folder' },
    { name: 'About', href: '#', path: '/about', icon : 'vscode-icons:default-folder' },
    // { name: 'Contact', href: '#', path: '/contact', isActive : false },
  ];
</script>