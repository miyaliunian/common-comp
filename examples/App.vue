<!--
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-13 11:43:20
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-15 10:52:27
 * @FilePath: /common-comp/examples/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <d-button desc="按钮标题" ></d-button>
    <d-image  
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
      @imgClick="imgClick"
    ></d-image>
    <d-switch size="24px" @change="switchChange" active-color="#ee0a24" inactive-color="#dcdee0"></d-switch >
  </div>
</template>

<script>
import DButton from '../packages/button/button.vue'
import DImage from '../packages/image/image.vue'
import DSwitch from '../packages/switch/switch.vue'
export default {
  name: 'App',
  components:{
    [DButton.name]: DButton,
    [DImage.name]: DImage,
    [DSwitch.name]: DSwitch,
  },
  methods: {
    imgClick(data){
      console.log("received", data)
    },
    switchChange(data){
      console.log("39",data)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
