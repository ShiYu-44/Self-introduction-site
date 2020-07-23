import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/profiles/About.vue')
  },
  {
    path: '/hobby',
    name: 'hobby',
    component: () => import( /* webpackChunkName: "about" */ '../views/profiles/Hobby.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import( /* webpackChunkName: "about" */ '../views/profiles/Skills.vue')
  },
  {
    path: '/CuriosityList',
    name: 'CuriosityList',
    component: () => import( /* webpackChunkName: "about" */ '../views/profiles/CuriosityList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router