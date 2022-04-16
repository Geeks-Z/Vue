<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-16 10:52:25
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-16 14:40:17
-->
<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "./components/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
