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
      path: '/portfolios',
      name: 'portfolios',
      component: () => import('../views/portfolio/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },

    //Authentication
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    },

    //Dashboard Admin
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/admin/Dashboard.vue')
    },
    //Blog
    {
      path: '/dashboard/blogs',
      name: 'blog-dashboard',
      component: () => import('../views/admin/blog/Index.vue')
    },
    {
      path: '/dashboard/blog/create',
      name: 'blog-create',
      component: () => import('../views/admin/blog/Create.vue')
    },
    {
      path: '/dashboard/blog/edit/:id',
      name: 'blog-edit',
      component: () => import('../views/admin/blog/Edit.vue')
    },

    //Portfolio Admin
    {
      path: '/dashboard/portfolio',
      name: 'portfolio-dashboard',
      component: () => import('../views/admin/portfolio/Index.vue')
    },
  ]
})

export default router
