import React from 'react'
import Main from '../view/mian'
import Home from '../view/main/home'
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
            component:()=><p>购物车</p>
        },{
            path:'/main/my',
            component:()=><p>我的</p>
        }]
    },{
        path:'/detail',
        component:()=><p>详情</p>
    }]
}