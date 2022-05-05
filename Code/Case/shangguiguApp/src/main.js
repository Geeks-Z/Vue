/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-30 20:34:06
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-03 21:39:20
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
