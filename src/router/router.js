import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes/index'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [...Routes]
})

export default router
