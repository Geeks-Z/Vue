<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-03 21:30:07
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-06 09:06:27
-->

<template>
  <div>
    <h1>params参数{{ $route.params.keyword }}</h1>
    <h1>query参数{{ $route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  activated() {},
};
</script>

<style scoped>
</style>
