<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-14 19:52:27
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-16 10:37:19
-->
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--<router-link :to="'/user/'+userId">用户</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi",
    };
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // push => pushState
      // this.$router.push('/home')
      this.$router.replace("/home");
      console.log("homeClick");
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace("/about");
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kobe",
          age: 19,
          height: 1.87,
        },
      });
    },
  },
};
</script>

<style>
</style>
