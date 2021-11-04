import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout.vue'
import noLayout from '@/components/noLayout.vue'

// 解决element菜单重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Layout,
      redirect:'/firstMod/dispatchManage',
    },
  //  菜单一
    {
      path:'/firstMod',
      component:Layout,
      redirect:'/firstMod/dispatchManage',
      children:[
         // 调度管理
        {
        path: 'dispatchManage',
        name: 'dispatchManage',
        component: ()=>import('@/views/firstMod/dispatchManage/index.vue')
      },
      //调度管理增加
      {
        path: '/firstMod/dispatchManageAdd',
        name: 'dispatchManageAdd',
        component: ()=>import('@/views/firstMod/dispatchManage/components/add.vue')
      },
      // 双表格
        {
          path: 'doubleTable',
          name: 'doubleTable',
          component: ()=>import('@/views/firstMod/doubleTable/index.vue')
        }
      ]
    },
    // 菜单二
    {
      path:'/secondMod',
      component:Layout,
      redirect:'/secondMod/dispatcherTask',
      children:[
        // 调度任务执行日志
        {
        path: 'dispatcherTask',
        name: 'dispatcherTask',
        component: ()=>import('@/views/secondMod/dispatcherTask/index.vue')
      },
      // 无
      {
        path: 'dispatcherTaskList',
        name: 'dispatcherTaskList',
        component: ()=>import('@/views/secondMod/dispatcherTask/components/list.vue')
      },
      // 饼图
      {
        path: 'pieDemo',
        name: 'pieDemo',
        component: ()=>import('@/views/secondMod/pieDemo/index.vue')
      }]
    },
    //  综合练习
    {
      path:'/testOne',
      component:Layout,
      redirect:'/testOne/index',
      children:[{
        path: 'index',
        name: 'testOne',
        component: ()=>import('@/views/test/testOne.vue')
      },] 
    },
    // 菜单三
    {
      path:'/threeMod',
      component:Layout,
      redirect:'/threeMod/i18nTest',
      children:[{
        path: 'i18nTest',
        name: 'i18nTest',
        component: ()=>import('@/views/threeMod/test1/index.vue')
      },]
     
    },
    // 记录文档
    {
      path:'/readMe',
      component:Layout,
      redirect:'/readMe/index',
      children:[{
        path: 'index',
        name: 'readMe',
        component: ()=>import('@/views/readMe/index.vue')
      }]
     
    },
    // baidu
    {
      path:'/baidu',
      component:noLayout,
      redirect:'/baidu/index',
      children:[{
        path: 'index',
        name: 'baidu',
        component: ()=>import('@/views/baidu/index.vue')
      }]
     
    }
  ]
})
