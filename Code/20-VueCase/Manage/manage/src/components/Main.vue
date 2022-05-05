<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-26 21:29:30
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-27 11:54:39
-->
<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-23 17:04:26
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-25 09:45:06
-->
<template>
  <el-container style="height: 100%">
    <el-header>
      <commom-header />
    </el-header>
    <el-container>
      <el-aside width="auto">
        <commom-aside />
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer
          >Copyright © 2016 国家科技基础条件平.. All rights
          reserved.台中心.</el-footer
        >
      </el-container>
    </el-container>
  </el-container>
</template>


<script>
import CommomAside from "./CommonAside.vue";
import CommomHeader from "./CommonHeader.vue";
export default {
  name: "Main",
  components: {
    CommomAside,
    CommomHeader,
  },
};
</script>

<style lang="less" scope>
.el-header {
  background-color: #4381e6;
  text-align: left;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  // background-image: "../assets/topbar.png";
}

.el-main {
  padding-top: 0;
}
</style>
