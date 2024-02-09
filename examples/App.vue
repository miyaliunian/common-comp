<!--
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-15 10:14:47
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-02-09 09:29:41
 * @FilePath: /common-comp/examples/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <d-button desc="按钮标题" ></d-button>
    <d-image  
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
      @imgClick="imgClick"
    ></d-image>
    <d-switch size="24px" @change="switchChange" active-color="#ee0a24" inactive-color="#dcdee0"></d-switch >
    <d-input label="文本" v-model="value"  placeholder="请输入用户名" :border="true"></d-input> 
    <p>输入的内容{{ value }}</p>
    <d-icon></d-icon>
  </div>
</template>

<script>
import DButton from '../packages/button/button.vue'
import DImage from '../packages/image/image.vue'
import DSwitch from '../packages/switch/switch.vue'
import DInput from '../packages/input/input.vue'
import DIcon from '../packages/icon/icon.vue'
export default {
  name: 'App',
  components:{
    [DButton.name]: DButton,
    [DImage.name]: DImage,
    [DSwitch.name]: DSwitch,
    [DInput.name]: DInput,
    [DIcon.name]: DIcon
  },
   provide() {
    return {
      parentName: this
      //  parentName: () => this.value
    }
  },
  data(){
    return {
      value: '输入框默认值'
    }
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
