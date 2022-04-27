<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-27 11:13:50
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-04-27 16:51:28
-->
<template>
  <header>
    <div class="l-content">
      <h1>大型科研仪器购置系统</h1>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="medium">
        <span>
          <img class="userProfile" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "CommomHeader",
  data() {
    return {
      userImg: require("../assets/images/user.png"),
    };
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.r-content {
  .userProfile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
