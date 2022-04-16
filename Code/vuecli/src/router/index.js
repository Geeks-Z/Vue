/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-15 09:32:16
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-16 10:43:25
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
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
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
    component: About,meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',//about 前端路由地址
    name: 'User',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },

  },
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history'
})

/**
 * 前置钩子：从from跳转到to
 * from 来的路由
 * to 要去的路由
 */
 router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title //给目标路由的页面的title赋值
  next()//必须调用，不调用不会跳转
})


// 3.将router对象传入到Vue实例
export default router

