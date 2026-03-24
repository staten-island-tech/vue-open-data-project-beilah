import { createRouter, createWebHistory } from 'vue-router'
import SquirrelDetail from '@/views/SquirrelDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/Squirrel.vue') },
    {
      path: '/squirrel/:id',
      name: 'squirrel',
      component: SquirrelDetail,
    },
  ],
})

export default router