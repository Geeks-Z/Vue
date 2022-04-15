/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-15 09:32:16
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-15 19:53:01
 */
// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

//懒加载组件
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home'//缺省时候重定向到/home
  },
  //配置路由和组件之间的对应关系
  {
    path: '/home',//home  前端路由地址
    name: 'Home',
    component: Home, //组件名
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',//about 前端路由地址
    name: 'About',
    component: About
  },
  {
    path: '/user/:userId',//about 前端路由地址
    name: 'User',
    component: User
  },
  {
    path: '/profile',
    component: Profile

  },
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history'
})

// 3.将router对象传入到Vue实例
export default router

