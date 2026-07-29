<template>
  <div class="flex w-full h-10 bg-charcoal items-center justify-between px-4 fixed top-0 left-0 z-50 border-b border-steel/20">
    <div class="flex items-center gap-3">
      <!-- Mobile sidebar toggle -->
      <button 
        @click="pageStore.toggleMobileSidebar()" 
        class="md:hidden text-steel hover:text-white p-1 rounded focus:outline-none cursor-pointer"
        aria-label="Toggle menu"
      >
        <Icon :icon="pageStore.isMobileSidebarOpen ? 'mdi:close' : 'mdi:menu'" class="text-xl" />
      </button>

      <router-link
        to="/home"
        class="inline-flex items-center gap-1 text-white font-semibold text-sm sm:text-base tracking-wide transition-colors"
      >
        <span class="text-orchid">{{ logo }}</span>
        <span class="hidden md:block">KARL CABANGON</span>
      </router-link>
    </div>

    <!-- Status badge on right -->
    <div class="flex items-center gap-3 text-xs text-steel">
      <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        Available for Work
      </span>
    </div>
  </div>
</template>

<script setup>
  import { usePageStore } from '@/stores';
  import { Icon } from "@iconify/vue";
  const pageStore = usePageStore();
  const logo = `<kc/>`;
</script>