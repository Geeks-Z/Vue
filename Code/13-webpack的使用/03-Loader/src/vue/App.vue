<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-13 21:12:45
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-13 21:37:24
-->
<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <!-- 使用Cpn组件 -->
    <Cpn />
  </div>
</template>

<script>
//导入Cpn组件
import Cpn from "./Cpn";
export default {
  components: {
    Cpn, //注册Cpn组件
  },
  data() {
    return {
      message: "hello webpack and vue",
      name: "zzzz",
    };
  },
  methods: {
    btnClick() {
      console.log("按钮被点击了");
    },
  },
};
</script>

<style scoped>
.title {
  color: green;
}
</style>