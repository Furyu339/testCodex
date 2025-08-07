import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Shop from '../views/Shop.vue'
import CustomerService from '../views/CustomerService.vue'
import { useUserStore } from '../stores/user'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/shop', component: Shop, meta: { requiresAuth: true } },
  { path: '/service', component: CustomerService, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
