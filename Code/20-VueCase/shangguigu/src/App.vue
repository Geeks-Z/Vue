<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-30 20:34:06
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-10 16:15:50
-->
<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// let a;
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  // mounted:  组件挂载完毕：向服务器发请求
  mounted() {
    // ==》通知Vuex发请求 获取数据 存储于仓库中
    // 派发一个action ｜｜ 获取商品分类的三级列表（App.vue只执行一次，放在此处可减少请求）
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style>
</style>
