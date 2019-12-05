import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局使用axios
import axios from 'axios'
Vue.prototype.axios = axios

//过滤器
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});

//scroll全局组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller);

//Loading全局组件
import Loading from '@/components/Loading'
Vue.component('Loading', Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
