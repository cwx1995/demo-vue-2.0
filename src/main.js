// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { fetchGet, fetchPost} from './utils/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import i18n from './i18n'
import Vconsole from 'vconsole';
new Vconsole();
Vue.prototype.$get = fetchGet
Vue.prototype.$post = fetchPost
Vue.use(ElementUI);
Vue.config.productionTip = false
require('./mock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
