import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/createLogg')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/listLogg')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/editLogg')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router