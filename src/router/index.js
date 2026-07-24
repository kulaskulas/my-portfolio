import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { defineAsyncComponent } from 'vue'
// const Home = defineAsyncComponent(() =>
//   import('@/views/Home.vue')
// )

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('@/views/Experience.vue'),
    },
  ],
})

export default router
