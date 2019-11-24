import React from 'react'

import Main from '../view/mian'
import Detail from '../view/detail'

import Home from '../view/main/home'
import Cart from '../view/main/cart'
export default {
    routes:[{
        path:'/',
        redirect:'/main/home'
    },{
        path:'/main',
        component:Main,
        children:[{
            path:'/main/home',
            component:Home
        },{
            path:'/main/about',
            component:()=><p>分类</p>
        },{
            path:'/main/vip',
            component:()=><p>会员</p>
        },{
            path:'/main/cart',
            component:Cart
        },{
            path:'/main/my',
            component:()=><p>我的</p>
        }]
    },{
        path:'/detail',
        component:Detail
    }]
}