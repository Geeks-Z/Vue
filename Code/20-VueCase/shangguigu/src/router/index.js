/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-03 21:31:05
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-05 09:11:15
 */
//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//  使用插件
Vue.use(VueRouter)
// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
// 配置路由
const routes = [

  {
    path: '/home',
    component: Home,
    meta: { show: true },
  },
  {
    path: '/search/:keyword',
    component: Search,
    meta: { show: true },
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false },
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false },
  },
  {
    // 重定向
    path: '/',
    redirect: '/home'
  },
]
  


const router = new VueRouter({
  mode: "history",
  routes,
})


export default router