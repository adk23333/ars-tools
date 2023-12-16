// Composables
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/rmm',
        name: 'ReadmeMaker',
        component: () => import('@/views/ReadmeMaker.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
