import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog/index.vue')
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: () => import('../views/blog/create.vue')
    },
    {
      path: '/blog/edit/:id',
      name: 'blog-edit',
      component: () => import('../views/blog/edit.vue')
    },
    {
      path: '/portfolios',
      name: 'portfolios',
      component: () => import('../views/portfolio/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/admin/Dashboard.vue')
    },
  ]
})

export default router
