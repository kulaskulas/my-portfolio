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

      <main class="flex-1 bg-graphite overflow-auto" id="main-content">
        <RouterView />


        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="translate-y-full opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition-all duration-300"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-full opacity-0"
        >
          <footer
            v-if="showFooter"
            class="fixed bottom-0 left-80 right-0 h-10 bg-charcoal border-t border-steel/30 flex items-center justify-between px-6 text-sm text-steel z-50"
          >
            <div class="text-sage">
              © {{ new Date().getFullYear() }} Karl Cabangon
            </div>

            <div class="flex items-center text-sage text-sm">
              <span>Software Engineer</span>

              <span class="mx-4 h-4 w-px bg-steel/40"></span>

              <span>
                Built with
                <span class="text-keyword">Vue 3</span> &
                <span class="text-keyword">Tailwind CSS</span>
              </span>

              <span class="mx-4 h-4 w-px bg-steel/40"></span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=karlcabangon24@email.com"
                target="_blank"
                class="text-orchid font-medium cursor-pointer"
              >
                Open to Opportunities
              </a>
            </div>
          </footer>
        </Transition>
      </main>

      

    </div>
  </div>
</template>

<script setup>
  import TopBar from './components/layouts/TopBar.vue';
  import SideBar from './components/layouts/SideBar.vue';
  import Header from './components/layouts/Header.vue';
  import { useRoute } from 'vue-router'
  import { watch, ref, onMounted, onUnmounted } from 'vue';
  import { usePageStore } from './stores';

  const pageStore = usePageStore();
  const route = useRoute()

  const showFooter = ref(false)

  watch(
    () => ({ name: route.name, path: route.path }),
    ({ name, path }) => {
      showFooter.value = false

      requestAnimationFrame(() => {
        handleScroll()
      })

      if (!name) return

      localStorage.setItem("activePage", name)

      if (path === "/home") {
        pageStore.setActivePage({
          name: "Home",
          href: "#",
          path: "/home",
        })
        return
      }

      const currentPinnedPages = pageStore.getCurrentPinnedPages()

      if (!currentPinnedPages?.length) {
        pageStore.setActivePage({ name, path })
      }
    },
    { immediate: true }
  )
  

  

  const handleScroll = () => {
    const main = document.querySelector('#main-content')
    if (!main) return

    showFooter.value =
      main.scrollTop + main.clientHeight >= main.scrollHeight - 10
  }

  onMounted(() => {
    const main = document.querySelector('#main-content')
    main?.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    const main = document.querySelector('#main-content')
    main?.removeEventListener('scroll', handleScroll)
  })
  
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
