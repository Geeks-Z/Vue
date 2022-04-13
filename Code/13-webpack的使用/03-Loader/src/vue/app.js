/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-13 21:07:20
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-13 21:14:09
 */
export default {
  template: `
  <div>
    <h2>{{message}}</h2>
    <button @click='btnClick'>这是一个按钮</button>
    <h2>{{name}}</h2>
  </div>
  `,
  data() {
    return {
      message: "hello webpack and vue",
      name: 'zzzz'
    }
  },
  methods: {
    btnClick(){
      console.log("按钮被点击了")
    }
  }
}