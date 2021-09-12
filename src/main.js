import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/styles/index.scss";
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./utils/rem.js"
//在vue中使用elementui
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

