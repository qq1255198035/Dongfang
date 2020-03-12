import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/api/axios.js'
import F2 from "@antv/f2/lib/index-all";
Vue.prototype.F2 = F2;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
