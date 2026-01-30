import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import HelloLu from '../views/HelloLu.vue'
import Uganda from '../views/Uganda.vue'

const routes = [
{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/HelloLu',
    name: 'HelloLu',
    component: HelloLu
  },
  {
    path: '/Uganda',
    name: 'Uganda',
    component: Uganda
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
