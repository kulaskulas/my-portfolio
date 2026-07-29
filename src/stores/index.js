import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

export const usePageStore = defineStore('pageStore', () => {
  const router = useRouter();
  const activePage = ref(getCurrentActivePage());
  const pinnedPages = reactive(getCurrentPinnedPages()); // it serves as tabs
  const routeHistory = ref([]);
  const isSidebarOpen = ref(true);
  const isMobileSidebarOpen = ref(false);

  function toggleMobileSidebar() {
    isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
  }

  function closeMobileSidebar() {
    isMobileSidebarOpen.value = false;
  }

  function setActivePage(page) {
    activePage.value = page.name;
    setPreviousPage(page);
    closeMobileSidebar();
    if (!pinnedPages.some(p => p.name === page.name)) {
      pinnedPages.push(page);
      localStorage.setItem('pinnedPages', JSON.stringify(pinnedPages));
    }
    // persist active page
    localStorage.setItem('activePage', page.name);
  }

  function unpinPage(page) {
    const idx = pinnedPages.findIndex(p => p.name === page.name);
    if (idx !== -1) {
      pinnedPages.splice(idx, 1);
      localStorage.setItem('pinnedPages', JSON.stringify(pinnedPages));
      // Clean up route history
      routeHistory.value = routeHistory.value.filter(p => p.name !== page.name);
      // If the closed page was active, navigate to last pinned or Home
      if (activePage.value === page.name) {
        const targetPage = pinnedPages.length
          ? pinnedPages[pinnedPages.length - 1]
          : { name: 'Home', path: '/home' };
        router.push(targetPage.path);
        setActivePage(targetPage);
      }
    }
  }

  function getCurrentActivePage() {
    return localStorage.getItem('activePage');
  }

  function getCurrentPinnedPages() {
    return JSON.parse(localStorage.getItem('pinnedPages') || '[]');
  }

  function setPreviousPage(page) {
    const last = routeHistory.value.at(-1);
    if (!last || last.path !== page.path) {
      routeHistory.value = routeHistory.value.filter(item => item.path !== page.path);
      routeHistory.value.push(page);
    }
  }

  return {
    activePage,
    pinnedPages,
    isSidebarOpen,
    isMobileSidebarOpen,
    toggleMobileSidebar,
    closeMobileSidebar,
    getCurrentPinnedPages,
    unpinPage,
    setActivePage,
  };
});