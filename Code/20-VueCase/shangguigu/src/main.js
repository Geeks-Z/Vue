/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-30 20:34:06
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-11 10:02:18
 */
import Vue from 'vue'
import App from './App.vue'

// 引入路由组件
import router from '@/router'
// 三级联动组件
import TypeNav from '@/components/TypeNav'

// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)

// 引入MockServer.js ---mock数据
import '@/mock/mockServe'
// 引入仓库
import store from '@/store'

Vue.config.productionTip = false
// 引入swiper样式
// import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  // 注册路由信息：当这里书写router的时候，组件身上都有$router, $route属性
  router,
  // 注册仓库 组件实例的身上会多一个属性 $store 
  store

}).$mount('#app')
