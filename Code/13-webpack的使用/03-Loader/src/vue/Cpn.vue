<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-13 21:06:24
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-13 21:37:14
-->
<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容, 哈哈哈</p>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: "CPN组件的name",
    };
  },
};
</script>

<style scoped>
</style>