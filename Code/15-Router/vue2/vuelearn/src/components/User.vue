<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-24 09:16:47
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-24 09:31:14
-->
<template>
  <div class="page-contianer">
    <h2>这是用户界面</h2>
    <p>这里是用户页面的内容。</p>
    <p>用户ID是: {{ userId }}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "User",
  computed: {
    userId() {
      //$route是代表处于激活状态的路由
      return this.$route.params.userId;
    },
  },
};
</script>
<style scoped>
</style>
