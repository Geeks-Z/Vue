/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-26 21:26:31
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-26 21:52:17
 */

// 导入Vue和Router的包
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


// 调用函数 将Router安装为Vue的插件
Vue.use(Router)

// 声明路由匹配规则
const routes = [
  
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  
]

// 创建路由的实例对象
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
}) 

// 向外共享路由的实例对象
export default router
