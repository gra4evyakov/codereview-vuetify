// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/HomeLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('@/views/HomeView.vue'),
      }
    ]
  },
  {
    path: '/jobs',
    component: () => import('@/layouts/JobsLayout.vue'),
    children: [
      {
        name: 'Jobs',
        path: '',
        component: () => import('@/views/JobsView.vue'),
      },
      {
        name: 'Vacancy',
        path: 'vacancy/:id',
        component: () => import('@/views/VacancyView.vue'),
        props: true
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
