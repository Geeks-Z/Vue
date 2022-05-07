/*
 * @Descripttion: API统一管理
 * @version: 1.0
 * @Author: Geeks_Z
 * @Date: 2022-05-07 20:50:01
 * @LastEditors: Geeks_Z
 * @LastEditTime: 2022-05-07 21:07:15
 */
import requests from "./request";

// 三级联动接口  /api/product/getBaseCategoryList  get 无参数
// 发送请求：axios发送请求返回结果Promise对象
export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})
