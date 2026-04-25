import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue' 

const routes = [
  { path: '/', name: 'home', component: App },
  { path: '/about', name: 'about', component: App },
  { path: '/legalitas', name: 'legalitas', component: App },
  { path: '/services', name: 'services', component: App },
  { path: '/contact', name: 'contact', component: App }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scrollMap = {
      '/about': '#AboutSection',
      '/legalitas': '#legalitySection',
      '/services': '#services-and-gallery',
      '/contact': '#contactSection'
    }

    if (scrollMap[to.path]) {
      return {
        el: scrollMap[to.path],
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router