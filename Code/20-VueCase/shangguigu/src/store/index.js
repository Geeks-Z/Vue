/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-08 16:22:43
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-11 09:21:34
 */
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

import home from "./home";
import search from "./search";

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  modules: {
    // 模块： 对小仓库进行合并变为大仓库
    home,
    search
  }
})