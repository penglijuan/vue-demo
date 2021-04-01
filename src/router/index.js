import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/tabbar'
import Index from '@/components/index'
import Order from '@/components/order'
import Mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
