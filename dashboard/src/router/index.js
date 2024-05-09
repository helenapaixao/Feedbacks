import { createRouter, createWebHistory } from 'vue-router'

const FeedBacks = () => import('')
const Home = () => import('')
const Credentials = () => import('')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: FeedBacks,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }

  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
