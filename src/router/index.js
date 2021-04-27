import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout.vue'

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
      }]
    }
    
    
    
  ]
})
