/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-04-30 21:31:41
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-07 21:24:31
 */
module.exports = {
  //关闭eslint
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      }
    }
  }
}