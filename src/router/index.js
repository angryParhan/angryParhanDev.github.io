import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home'
import Add from '@/components/Ads/Add'
import AddList from '@/components/Ads/AddList'
import NewAdd from '@/components/Ads/Newadd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add/:id',
    props: true,
    name: 'add',
    component: Add
  },
  {
    path: '/list',
    name: 'addlist',
    component: AddList,
    beforeEnter: AuthGuard
  },
  {
    path: '/new',
    name: 'new',
    component: NewAdd,
    beforeEnter: AuthGuard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    beforeEnter: AuthGuard
  }

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
