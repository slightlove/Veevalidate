import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Regisration from '@/feature/Regisration.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Regisration',
    component: Regisration
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
