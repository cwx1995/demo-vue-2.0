import Vue from 'vue'
import Router from 'vue-router'
import firstMod from '@/views/firstMod/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstMod',
      name: 'firstMod',
      component: firstMod
    }
  ]
})
