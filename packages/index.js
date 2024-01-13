import DButton from "./button/button.vue";

const comps = [
    DButton
]

export default (Vue) => {
  comps.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};
