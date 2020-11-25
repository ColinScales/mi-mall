/*
 * @Description: file content
 * @Author: sunkl
 * @Date: 2020-10-29 00:40:38
 * @LastEditors: sunkl
 * @LastEditTime: 2020-11-26 02:48:49
 */
let baseUrl = ''

switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = '/mi-product'
    break
  case 'production':
    baseUrl = '/mi-product'
    break
}

export default {
  baseUrl
}