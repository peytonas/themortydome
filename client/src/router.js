import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Boards from './views/Boards.vue'
// @ts-ignore
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'boards',
    component: Boards
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: "*",
    redirect: '/'
  }
  ]
})