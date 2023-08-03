import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddData from '../views/AddData.vue'
import SettingPay from '../views/SettingPay.vue'
import test from '../views/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true,
    },
    {
      path: '/adddata',
      name: 'adddata',
      component: AddData,
      props: true
    },
    {
      path: '/settingpay',
      name: 'setpay',
      component: SettingPay,
      props: true
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      props: true
    },
    
  ]
})

export default router
