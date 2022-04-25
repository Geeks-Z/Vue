<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-24 10:39:06
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-24 10:44:38
-->
<template>
  <div class="page-contianer">
    <h2>这是档案界面</h2>
    <p>这里是档案页面的内容。</p>
    <p>档案的名字是: {{ profileInfo.name }}</p>
    <p>档案的年龄是: {{ profileInfo.age }}</p>
    <p>档案的身高是: {{ profileInfo.height }}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "Profile",
  computed: {
    profileInfo() {
      return this.$route.query.profileInfo;
    },
  },
};
</script>
<style scoped></style>