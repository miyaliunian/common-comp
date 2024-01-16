/*
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-15 13:11:55
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-16 08:47:09
 * @FilePath: /common-comp/packages/image/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// DImage
import Component from "./image.vue";
import config from './package.json'
Component.install = function (Vue) {
  Vue.component(`${config.name}.${config.version}`, Component);
};

// 默认导出组件
export {
  Component,
};

