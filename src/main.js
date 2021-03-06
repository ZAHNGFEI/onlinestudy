import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// 导入ui库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//安装
Vue.use(ElementUI);

//全局事件
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')