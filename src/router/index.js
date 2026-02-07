import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import HelloLu from '../views/HelloLu.vue'
import Uganda from '../views/Uganda.vue'
import SanValentin from '../views/SanValentin.vue'
import Flores from '../views/Flores.vue'

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
  },
  {
    path: '/SanValentin',
    name: 'SanValentin',
    component: SanValentin
  },
  {
    path: '/Blumen',
    name: 'Flores',
    component: Flores
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
