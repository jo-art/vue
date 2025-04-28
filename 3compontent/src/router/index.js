import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('../views/NestedComponet.vue'),
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('../views/ParentComponent.vue'),
    },
    {
      path: '/emp',
      name: 'emp',
      component: () => import('../views/EmpView.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/ToDoView.vue'),
    }

  ],
})

export default router
