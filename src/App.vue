<!-- <template>
  <div class="flex w-full h-10 bg-top items-center fixed">
    <div class="px-4">
      <p class="text-white"><span class="text-text-attribute">{{ logo }}</span>&nbsp;KARL CABANGON</p>
    </div>
  </div>
  <SideBar />
  <TopBar />
  <Content />
</template> -->

<template>
  <Header />
  <div class="flex pt-10 h-screen">
    <SideBar />

    <div class="flex-1 ml-80 flex flex-col">
      <TopBar />

      <main class="flex-1 bg-graphite overflow-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
  import TopBar from './components/layouts/TopBar.vue';
  import SideBar from './components/layouts/SideBar.vue';
  import Header from './components/layouts/Header.vue';
  import { useRoute } from 'vue-router'
  import { watch } from 'vue';
  import { usePageStore } from './stores';

  const pageStore = usePageStore();
  const route = useRoute()

  watch(
  () => ({ name: route.name, path: route.path }),
    ({ name, path }) => {
      if (!name) return;

      localStorage.setItem("activePage", name);

      if (path === "/home") {
        pageStore.setActivePage({
          name: "Home",
          href: "#",
          path: "/home",
        });
        return;
      }

      const currentPinnedPages = pageStore.getCurrentPinnedPages();

      if (!currentPinnedPages?.length) {
        pageStore.setActivePage({ name, path });
      }
    },
    { immediate: true }
  );
  
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
