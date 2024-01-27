/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-23 17:02:13
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-24 10:39:49
 */

// 导入Vue和Router的包
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Home = () => import('../components/Home.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const User = ()=> import('../components/User.vue')

// 调用函数 将Router安装为Vue的插件
Vue.use(Router)

// 声明路由匹配规则
const routes = [
  // 路由重定向 当用户访问 / 时，通过redirect属性跳转到 /home对应的路由规则
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'message',
        component: HomeMessage
      },
      {
        path: 'news',
        component: HomeNews
      }
    ]
  },
  {
    path: '/user/:userId',
    name: 'User',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/components/Profile')
  }
]

// 创建路由的实例对象
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
}) 

// 前置守卫
/**
 * 前置钩子：从from跳转到to
 * from 来的路由
 * to 要去的路由
 */
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next() //必须调用，不调用不会跳转
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log('----');
})

// 向外共享路由的实例对象
export default router
