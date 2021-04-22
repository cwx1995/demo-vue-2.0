// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { fetchGet, fetchPost} from './utils/http'

Vue.prototype.$get = fetchGet
Vue.prototype.$post = fetchPost

Vue.config.productionTip = false
require('./mock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
