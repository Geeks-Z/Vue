/*
 * @Descripttion: home模块的仓库
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-09 09:34:43
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-10 19:57:06
 */

import { reqCategoryList,reqGetBannerList } from '@/api'

const state = {
  // state中数据默认初始值根据接口的返回值初始化
  // home仓库中存储三级菜单的数据
  categoryList: [],
  // 轮播图的数据
  bannerList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  }
  
}
const actions = {
  // 通过API里的接口函数调用，向服务器发送请求，获取服务器的数据
  async getCategoryList({commit}) {
    let result = await reqCategoryList()
    if (result.code == 200) {
      // .slice(0,-1)截取最后一组是为了保持和老版本一致
        commit("CATEGORYLIST", result.data.slice(0,-1))
      }
  },
  async getBannerList({commit}) {
    // await等待返回的结果
    let result = await reqGetBannerList()
    console.log(result);
    if (result.code == 200) {
        commit("BANNERLIST", result.data)
      }
  },
  
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}