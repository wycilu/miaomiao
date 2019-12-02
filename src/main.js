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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
