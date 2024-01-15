/*
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-13 11:43:20
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-15 09:40:37
 * @FilePath: /common-comp/examples/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
// import RemoteComp from 'common-remote-comp'
// import 'common-remote-comp/common-remote-comp/common-remote-comp.css'
// Vue.use(RemoteComp);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
