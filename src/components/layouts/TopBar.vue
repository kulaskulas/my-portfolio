<template>
  <header class="hidden md:block bg-steel shrink-0 z-30 overflow-x-auto no-scrollbar border-b border-steel/30">
    <div class="flex items-end px-2 md:ml-5 h-10 md:h-12 min-w-max">
      <template v-for="(page, index) in pageStore.pinnedPages" :key="index">
        
          <div 
            class="flex items-center justify-between w-36 sm:w-52 md:w-64 self-end px-3 sm:px-4 py-1.5 sm:py-2 rounded-tl-xl sm:rounded-tl-2xl rounded-tr-md sm:rounded-tr-lg text-white transition-all duration-300 ease-in-out shrink-0"
            :class="{
              'bg-active-tab font-medium': pageStore.activePage === page.name,
              'bg-carbon hover:bg-carbon/80': pageStore.activePage !== page.name
            }"
          >
            <router-link :to="page.path" 
              class="flex-1 min-w-0 pr-2"
              @click.stop="
              [
                pageStore.setActivePage(page)
              ]"
              >
              <p class="truncate text-xs sm:text-sm">{{ page.name }}</p>
            </router-link>
            <span
              v-if="pageStore.pinnedPages.length > 1"
              class="ml-1 text-xs text-steel hover:text-white cursor-pointer px-1 py-0.5 rounded hover:bg-steel/30"
              @click.stop="pageStore.unpinPage(page)" >✕</span>
          </div>
      </template>
    </div>
  </header>
</template>

<script setup>
  import { usePageStore } from '@/stores';
  import { useRoute, useRouter } from 'vue-router'
  import { watch } from 'vue'
   import { onMounted } from 'vue';

  const pageStore = usePageStore();
  const route = useRoute()

  // onMounted(() => {
  //   const pinnedPages = JSON.parse(localStorage.getItem('pinnedPages') || '[]')

  //   if (!pinnedPages.length) return

  //   // pageStore.P(pinnedPages)

  //   const currentPage = pinnedPages.find(
  //     page => page.path === route.path
  //   )

  //   getCurrentActivePage

  //   pageStore.setActivePage(currentPage || pinnedPages[0])
  // })
  </script>