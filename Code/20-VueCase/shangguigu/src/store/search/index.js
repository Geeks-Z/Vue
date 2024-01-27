/*
 * @Descripttion: search模块的仓库
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-09 09:32:37
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-11 16:14:59
 */
import {reqGetSearchInfo} from '@/api'
const state = {
  // 初始化仓库
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  // 获取search模块数据
  async getSearchList({commit}, params={}) {
    let result = await reqGetSearchInfo(params)
    if (result.code = 200) {
      commit("GETSEARCHLIST",result.data)
    }
  }
}

// 项目中 getters是用来简化仓库种风格数据（简化数据）
const getters = {
  // 当前形参state 当前仓库中的state，并非大仓库中的state 
  goodsList(state) {
    return state.searchList.goodsList
  },
  trademarkList(state) {
    return state.searchList.trademarkList
  },
  attrsList(state) {
    return state.searchList.attrsList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
