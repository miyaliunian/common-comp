// DButton
import Component from "./button.vue";
import config from './package.json'
Component.install = function (Vue) {
  Vue.component(`${config.name}.${config.version}`, (resolve)=>{
    console.log("resolve", Component)
    resolve(Component);
  });
};

export {
  Component,
};