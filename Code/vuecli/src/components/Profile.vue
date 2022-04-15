<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-15 20:04:26
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-15 20:04:26
-->
<template>
  <div>
    <h2>我是profile</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>