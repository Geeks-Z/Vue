<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-21 21:00:34
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-21 21:15:46
-->
<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn />
  </div>
</template>

<script>
import Cpn from "./Cpn";

export default {
  name: "App",
  components: {
    Cpn,
  },
  data() {
    return {
      message: "Hello Webpack",
      name: "coderwhy",
    };
  },
  methods: {
    btnClick() {},
  },
};
</script>

<style scoped>
.title {
  color: green;
}
</style>