<template>
  <header class="bg-steel gap-1 sticky top-10">
    <div class="flex items-end ml-5 h-15">
      <template v-for="(page, index) in pageStore.pinnedPages" :key="index">
        
          <div 
            class="flex justify-between w-70 self-end px-5 py-3 b rounded-tl-2xl rounded-tr-lg text-white"
            :class="{
              'bg-active-tab': pageStore.activePage === page.name,
              'bg-carbon': pageStore.activePage !== page.name
            }"
          >
            <router-link :to="page.path" 
              @click.stop="
              [
                pageStore.setActivePage(page)
              ]"
              >
              <p class="pr-30">{{ page.name }}</p>
            </router-link>
            <span
              v-if="pageStore.pinnedPages.length > 1"
              class="ml-2 cursor-pointer"
              @click.stop="pageStore.unpinPage(page)" >x</span>
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