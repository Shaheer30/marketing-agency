// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProfessionalSeoServiceSearchEngineMarketing from '@/views/Blogs/ProfessionalSeoServiceSearchEngineMarketing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
    {
    path: '/Blog/:slug',
    name: 'ProfessionalSeoServiceSearchEngineMarketing',
    component: ProfessionalSeoServiceSearchEngineMarketing,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router