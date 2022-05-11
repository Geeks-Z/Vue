<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-03 21:29:59
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-10 20:02:40
-->
<template>
  <div>
    <!-- 三级联动全局组件： 三级联动已经注册为全局组件 因此不需要再引入 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  data() {
    return {};
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 触发vuex的异步action调用, 从mock接口请求数据到state中
    // this.$store.dispatch("getBanners");
    // this.$store.dispatch("getFloors");
  },
  activated() {},
};
</script>

<style scoped>
</style>
