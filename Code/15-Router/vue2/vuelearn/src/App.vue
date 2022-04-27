<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-23 17:02:13
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-27 22:03:27
-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <router-link to="/home">首页</router-link>
    <router-link :to="/user/ + userId">用户</router-link>
    <!-- 使用button代替<router-link/> 并添加点击事件-->
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view />
    </keep-alive>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <h2>----------getters---------</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLen }}</h2>
    <h2>{{ $store.getters.moreAgestu(12) }}</h2>
    <h2>----------HelloVuex---------</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
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
    add() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      this.$store.commit("incrementCount", count);
    },
  },
  computed: {},
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