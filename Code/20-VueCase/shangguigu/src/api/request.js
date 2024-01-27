/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-07 16:16:24
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-08 16:17:29
 */
// 对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"
// start：开始  done：结束

const requests = axios.create({
  // 配置对象
  // 基础路径 发送请求时，路径当中会出现api
  baseURL: "/api",
  // 请求超时时间
  timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use(config => {
  // config 配置对象 包含header属性
  // 进度条开始动
  nprogress.start()
  return config;
})


// 响应拦截器
requests.interceptors.response.use((res) => {
  // 进度条结束
  nprogress.done();
  return res.data
}), (error) => {
  return Promise.reject(new Error('fail'))
}
// 对外暴露
export default requests