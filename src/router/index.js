import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout.vue'

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
      redirect:'/firstMod/index',
    },
    {
      path:'/firstMod',
      component:Layout,
      redirect:'/firstMod/index',
      children:[{
        path: 'index',
        name: 'firstMod',
        component: ()=>import('@/views/firstMod/index.vue')
      },{
        path: 'components/add',
        name: 'firstMod',
        component: ()=>import('@/views/firstMod/components/add.vue')
      }]
    },
    {
      path:'/secondMod',
      component:Layout,
      redirect:'/secondMod/index',
      children:[{
        path: 'index',
        name: 'secondMod',
        component: ()=>import('@/views/secondMod/index.vue')
      },{
        path: 'components/list',
        name: 'secondMod',
        component: ()=>import('@/views/secondMod/components/list.vue')
      }]
    },
    {
      path:'/pieDemo',
      component:Layout,
      redirect:'/pieDemo/index',
      children:[{
        path: 'index',
        name: 'pieDemo',
        component: ()=>import('@/views/pieDemo/index.vue')
      },]
    },
    {
      path:'/doubleTable',
      component:Layout,
      redirect:'/doubleTable/index',
      children:[{
        path: 'index',
        name: 'doubleTable',
        component: ()=>import('@/views/doubleTable/index.vue')
      },]
     
    },
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
    {
      path:'/i18nTest',
      component:Layout,
      redirect:'/i18nTest/index',
      children:[{
        path: 'index',
        name: 'i18nTest',
        component: ()=>import('@/views/threeMod/test1/index.vue')
      },]
     
    }

    
  ]
})
