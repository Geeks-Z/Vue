<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-15 10:01:29
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-16 10:40:48
-->
<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容, 哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: "hello",
      path: "/home/news",
    };
  },
  created() {
    console.log("created");
    this.$router.push("/home/news");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("调用actived");
    this.$router.push(this.path);
  },
  // deactivated(){
  //   console.log('调用actived')
  //   console.log(this.$route.path)
  //   this.path = this.$route.path
  // },
  beforeRouterLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
};
</script>

<style scoped>
</style>
