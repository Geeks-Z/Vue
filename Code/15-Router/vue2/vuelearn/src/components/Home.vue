<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-23 17:04:26
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-27 19:56:05
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
    return { path: "/home/news" };
  },
  created() {
    console.log("Home组件被创建了");
    this.$router.push("/home/news");
  },
  destoryed() {
    console.log("Home组件被销毁了");
  },
  activated() {
    console.log("调用actived");
    this.$router.push(this.path); //在活跃的时候将保存的路由给当前路由
  },
  // deactivated() {
  //   console.log("调用actived");
  //   console.log(this.$route.path);
  //   this.path = this.$route.path; //变成不活跃状态，将最后的路由保存起来
  // },
  beforeRouterLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
};
</script>

<style>
</style>
