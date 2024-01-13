import Component from "./button/button.vue";
import config from './package.json'

// const comps = [
//     DButton
// ]

// export default (Vue) => {
//   comps.forEach((comp) => {
//     Vue.component(comp.name, comp);
//   });
// };
Component.install = function (Vue) {
  Vue.component(`${config.name}`, Component);
};

// 默认导出组件
export {
  Component,
};