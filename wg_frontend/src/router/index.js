import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddData from '../views/AddData.vue'
import SettingPay from '../views/SettingPay.vue'

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
    
  ]
})

export default router
