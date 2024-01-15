// DSwitch
import Component from "./switch.vue";
import config from './package.json'
Component.install = function (Vue) {
  Vue.component(`${config.name}-${config.version}`, Component);
};

// 默认导出组件
export {
  Component,
};
