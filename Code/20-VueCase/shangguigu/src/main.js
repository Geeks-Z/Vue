/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-30 20:34:06
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-07 21:25:45
 */
import Vue from 'vue'
import App from './App.vue'

// 引入路由组件
import router from '@/router'
// 三级联动组件
import TypeNav from '@/pages/Home/TypeNav'

// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)

// 测试
import { reqCategoryList } from '@/api'
reqCategoryList()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由信息：当这里书写router的时候，组件身上都有$router, $route属性
  router,
}).$mount('#app')
