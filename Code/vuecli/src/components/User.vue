<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-15 10:34:20
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-15 20:24:37
-->
<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息, 嘿嘿嘿</p>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
};
</script>

<style scoped>
</style>
