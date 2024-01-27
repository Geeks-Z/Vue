/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-23 17:02:13
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-27 20:23:09
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //挂载路由模块
  store,  //
  render: h => h(App)
})
