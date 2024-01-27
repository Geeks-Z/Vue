/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-10 10:05:53
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-10 10:09:30
 */
// 引入mockjs模块
import Mock from 'mockjs'

// 引入json数据
import banner from './banner.json'
import floor from './floor.json'

// mock数据 参数1: 请求地址  参数2: 请求数据
Mock.mock("/mock/banner", { code: 200, data: banner }) //模拟首页的轮播图数据
Mock.mock("/mock/floor", { code: 200, data: floor })
