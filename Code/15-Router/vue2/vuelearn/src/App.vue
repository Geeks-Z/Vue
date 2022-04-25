<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-23 17:02:13
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-24 10:43:12
-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <router-link to="/home">首页</router-link>
    <router-link :to="/user/ + userId">用户</router-link>
    <!-- 使用button代替<router-link/> 并添加点击事件-->
    <button @click="profileClick">档案</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan",
      profileInfo: {
        name: "Geeks_Z",
        age: 24,
        height: 180,
      },
    };
  },
  methods: {
    profileClick() {
      let profileInfo = this.profileInfo;
      this.$router.push({
        path: "/profile",
        query: {
          profileInfo,
        },
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  color: red;
}
</style>