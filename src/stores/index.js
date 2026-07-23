import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'




export const usePageStore = defineStore('pageStore', () => {


  const router = useRouter();
  const activePage = ref(getCurrentActivePage());
  const pinnedPages = reactive(getCurrentPinnedPages()); // it serves as tabs
  // const selectedBlock = ref(null);
  const routeHistory = ref([])

  function setActivePage(page) {
    activePage.value = page.name;
    setPreviousPage(page)
    if (!pinnedPages.some(p => p.name === page.name)) {
      pinnedPages.push(page);
      localStorage.setItem('pinnedPages', JSON.stringify(pinnedPages));
    }
  }

  // function pinPage(page) {
  //   if (!pinnedPages.some(p => p.name === page.name)) {
  //     pinnedPages.push(page);
  //   } 
  // }

  function unpinPage(page) {
    console.log('activePage', activePage.value === page.name)
    const index = pinnedPages.findIndex(p => p.name === page.name); 
    if (index !== -1) {
      pinnedPages.splice(index, 1);
      localStorage.setItem('pinnedPages', JSON.stringify(pinnedPages));

      if(activePage.value === page.name ) {
        const last = routeHistory.value.at(0)
        const redirectToPath = last.path;
        router.push(redirectToPath)
        setActivePage(last)
      }

      
    }
    
  }

  function getCurrentActivePage() {
    // localstorage
    return localStorage.getItem('activePage');
  }

  function getCurrentPinnedPages() {
    // localstorage
    return JSON.parse(localStorage.getItem('pinnedPages') || '[]');
  }

  function setPreviousPage(page) {
    const last = routeHistory.value.at(-1)
    if (!last || last.path !== page.path) {
      routeHistory.value = routeHistory.value.filter(
        item => item.path !== page.path
      )

      routeHistory.value.push(page)
    }
    
  }

  return {
    activePage,
    pinnedPages,
    unpinPage,
    setActivePage,
  }
})