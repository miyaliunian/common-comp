
// import Component from "./button/button.vue";
// import config from './package.json'
// Component.install = function (Vue) {
//   Vue.component(`${config.name}`, Component);
// };

// // 默认导出组件
// export {
//   Component,
// };


import Component from "./image/image.vue";
import config from './package.json'
Component.install = function (Vue) {
  Vue.component(`${config.name}`, Component);
};

// 默认导出组件
export {
  Component,
};