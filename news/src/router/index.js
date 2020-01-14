import Vue from 'vue'
import VueRouter from 'vue-router'
import en from '../views/EN.vue'
import ru from '../views/RU.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/en',
    name: 'en',
    component: en
  },
  {
    path: '/',
    name: 'en',
    component: en
  },
  {
    path: '/ru',
    name: 'ru',
    component: ru
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
