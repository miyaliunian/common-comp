// DButton
// import Component from "./button/button.vue";
// import config from './package.json'
// Component.install = function (Vue) {
//   Vue.component(`${config.name}`, Component);
// };

// // 默认导出组件
// export {
//   Component,
// };


// DImage
// import Component from "./image/image.vue";
// import config from './package.json'
// Component.install = function (Vue) {
//   Vue.component(`${config.name}`, Component);
// };

// // 默认导出组件
// export {
//   Component,
// };



// DSwitch
import Component from "./switch/switch.vue";
import config from './package.json'
Component.install = function (Vue) {
  Vue.component(`${config.name}`, Component);
};

// 默认导出组件
export {
  Component,
};