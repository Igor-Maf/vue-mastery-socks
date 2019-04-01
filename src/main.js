import Vue from 'vue'
import 'nprogress/nprogress.css'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
