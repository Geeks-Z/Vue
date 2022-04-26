/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-26 20:54:51
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-26 21:05:05
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

import router from './router';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
