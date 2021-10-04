import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/styles/index.scss";
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入rem
import "./utils/rem.js"
// 引入moment
import moment from 'moment'//导入文件
Vue.prototype.$moment = moment;//赋值使用

Vue.config.productionTip = false
new Vue({
  router,
  store,
  ElementUI,
  render: h => h(App)
}).$mount('#app')

