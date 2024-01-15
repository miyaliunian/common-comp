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
  </div>
</template>

<script>
import DButton from '../packages/button/button.vue'
import DImage from '../packages/image/image.vue'
import DSwitch from '../packages/switch/switch.vue'
import DInput from '../packages/input/input.vue'
export default {
  name: 'App',
  components:{
    [DButton.name]: DButton,
    [DImage.name]: DImage,
    [DSwitch.name]: DSwitch,
    [DInput.name]: DInput
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
