/*
 * @Descripttion: API统一管理
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-07 20:50:01
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-11 10:05:24
 */
import requests from "./request";
import mockRequests from "./mockRequest";

// 三级联动接口  /api/product/getBaseCategoryList  get 无参数
// 发送请求：axios发送请求返回结果Promise对象
export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})
// 获取banner（home首页轮播图接口）
export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
// 获取floor数据
// export const reqFloorList = () => mockRequests.get('/floor')

//获取搜索模块数据 地址：/api/list post 当前这个接口 给服务器传递参数params 至少是一个空对象
export const reqGetSearchInfo = (params) => requests({url:'/list',method:"post",data: params})
