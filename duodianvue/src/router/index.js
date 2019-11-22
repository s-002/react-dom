import Vue from 'vue'
import VueRouter from 'vue-router'
//一级路由
import Main from '../views/main'
import Edit from '../views/edit'
import List from '../views/list'
//二级路由
import Home from '../views/main/home.vue'
import Classify from '../views/main/classify.vue'
import Vip from '../views/main/vip.vue'
import Cart from '../views/main/cart.vue'
import My from '../views/main/my.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/main/home'
  },
  {
    path: '/main',
    component:Main,
    children:[{
      path:'home',
      component:Home
    },{
      path:'classify',
      component:Classify
    },{
      path:'my',
      component:My
    },{
      path:'cart',
      component:Cart
    },{
      path:'vip',
      component:Vip
    }]
  },
  {
    path: '/list',
    component:List
  },
  {
    path: '/edit',
    component:Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
