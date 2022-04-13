/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-12 12:34:47
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-13 21:17:53
 */
// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊,李银河!</h2>')

// 5.使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app'
// import App from './vue/App.vue'

// 5.1
// const app = new Vue({
//   el: "#app",
//   data: {
//     message: "hello webpack and vue"
//   }
// })

//5.2.1 定义一个组件
// const App = {
//   template: `
//   <div>
//     <h2>{{message}}</h2>
//     <button @click='btnClick'>这是一个按钮</button>
//     <h2>{{name}}</h2>
//   </div>
//   `,
//   data() {
//     return {
//       message: "hello webpack and vue",
//       name: 'zzzz'
//     }
//   },
//   methods: {
//     btnClick(){
//       console.log("按钮被点击了")
//     }
//   },
// }

// 5.2.2 将5.2.1抽取到app.js
// 5.2.3.导入app.js
// import App from './vue/app'

// 5.3 使用app.vue分离了模板、行为、样式[]
import App from './vue/App.vue'

new Vue({
  el: "#app",
  //使用组件
  template: '<App/>',
  components: {
    //注册局部组件
    App
  }
})