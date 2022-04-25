<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-23 17:04:26
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-25 09:45:06
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
  created() {
    console.log("Home组件被创建了");
  },
  destoryed() {
    console.log("Home组件被销毁了");
  },
};
</script>

<style>
</style>
