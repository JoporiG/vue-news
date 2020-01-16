import Vue from 'vue'
import VueRouter from 'vue-router'
import en from '../views/EN.vue'
import ru from '../views/RU.vue'
import pl from '../views/PL.vue'
import cz from '../views/CZ.vue'
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
  },
  {
    path: '/pl',
    name: 'pl',
    component: pl
  },
  {
    path: '/cz',
    name: 'cz',
    component: cz
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
