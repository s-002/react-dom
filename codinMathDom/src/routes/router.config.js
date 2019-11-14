// 加载一级路由
import IndexPage from '@/views/IndexPage'
import GovList from '@/views/gov/index'


export default {
  routes: [{
    component: IndexPage,
    path: '/main',
    children: [
    // 机构路由
    {
      path:'/main/GovList',
      component:GovList
    },
    {
      path: '/main/addGov',
      component: ()=><p>新增机构页面</p>,
    },{
      path: '/main/editGov/:id?',
      component: ()=><p>编辑机构</p>,
    },{
      path: '/main/govDetail/:id?',
      component: ()=><p>机构详情</p>,
    },
    // 课程路由
    {
      path: '/main/addPro',
      component: ()=><p>新建课程</p>,
    },{
      path: '/main/editPro/:id?',
      component: ()=><p>编辑课程</p>,
    },{
      path: '/main/addGov',
      component: ()=><p>异常提示</p>,
    },
    // 班级路由
    {
      path: '/main/addClass',
      component: ()=><p>新建班级</p>,
    },{
      path: '/main/editClass/:id?',
      component: ()=><p>编辑班级</p>,
    }, {
      path: '/main/classDetail',
      component: ()=><p>班级详情</p>,
    },
    // 学生路由
    {
      path: '/main/addstudy',
      component: ()=><p>新建学生</p>,
    },{
      path: '/main/editstudy/:id?',
      component: ()=><p>编辑学生</p>,
    },
    //招生路由
    {
      path: '/main/addJous',
      component: ()=><p>报名册管理</p>,
    },
    // APP bannner图路由
    {
      path:'/main/addBanner',
      component:()=><p>新增 APP bannner图管理</p>
    },{
      path:'/main/editBanner/:id?',
      component:()=><p>编辑 APP bannner图管理</p>
    },
    //PC主站广告位路由
    {
      path:'/main/addPc',
      component:()=><p>PC主站广告位管理</p>
    }]
  },{
    path: '/',
    redirect: '/main/addGov'
  }],
  pages: [{
    title: '机构管理',
    icon: '',
    children: [{
      title: '机构列表',
      path: '/main/GovList',
      show: true
    },{
      title: '新增机构',
      path: '/main/addGov',
      show: true
    },{
      title: '编辑机构',
      path: '/main/editGov/:id?',
      show: true
    },{
      title: '机构详情',
      path: '/main/govDetail/:id?',
      show: true
    }]
  },{
    title: '教务管理',
    icon: '',
    children: [{
      title: '课程管理',
      children: [{
        title: '新建课程',
        path: '/main/addPro',
        show: true
      },{
        title: '编辑课程',
        path: '/main/editPro/:id?',
        show: true
      },{
        title: '异常提示',
        path: '/main/proError',
        show: true
      }]
    },{
      title: '班级管理',
      children: [{
        title: '新建班级',
        path: '/main/addClass',
        show: true
      },{
        title: '编辑班级',
        path: '/main/editClass/:id?',
        show: true
      },{
        title: '班级详情',
        path: '/main/classDetail',
        show: true
      }]
    },{
      title: '学生管理',
      children: [{
        title: '新建学生',
        path: '/main/addstudy',
        show: true
      },{
        title: '编辑学生',
        path: '/main/editstudy/:id?',
        show: true
      }]
    }]
  },{
    title:'招生中心',
    icon:'',
    children:[{
      title:'报名册管理',
      path:'/main/addJous',
      show:true
    }]
  },{
    title:'运营管理',
    icon:'',
    children:[{
      title:'App bannner图管理',
      children: [{
        title: '新增',
        path: '/main/addBanner',
        show: true
      },{
        title: '编辑',
        path: '/main/editBanner/:id?',
        show: true
      }]
    },{
      title:'PC主站广告位管理',
      path:'/main/addPc',
      show:true,
    }]
  },{
    title:'基础管理',
    icon:'',
    children:[]
  },{
    title:'账号权限',
    icon:'',
    children:[]
  }]
}
