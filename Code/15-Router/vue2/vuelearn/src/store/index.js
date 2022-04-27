/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-27 20:21:12
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-27 22:02:13
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({

  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 10}
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state,count) {
      state.counter += count
    }
  },
  actions: {
    
  },
  getters: {
    more20stu(state) {
      return state.students.filter((s) => s.age > 20);
    },
    more20stuLen(state,getters) {
      return getters.more20stu.length
    },
    moreAgestu(state) {
      // return function (age) {
      //   return state.students.filter((s) => s.age > age);
      // }
      return age => {return state.students.filter((s) => s.age > age)}
    },
  },
  modules: {
    
  }
})

export default store