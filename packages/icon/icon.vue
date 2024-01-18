<!--
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-17 14:51:53
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-18 09:25:18
 * @FilePath: /common-comp/packages/icon/icon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div style="display:flex;background-Color:red">
        <span>按钮祖航</span>
        <span class="iconfont iconiconfontyoujiantou-copy-copy-copy" style="font-size:200px"></span>
        <div>依赖注入的内容</div>
        <p style="background-color: aliceblue;color: #000;">:{{ this.parentName.value }}</p>
    </div>
</template>
<script>
 export default {
   name: 'DIcon',
   inject: ['parentName'],
   watch: {
     parentName: {
       handler: function (val, oldVal) {
         console.log("val", val)
         console.log("oldVal", oldVal)
       },
       immediate: true
     }
   },
  }
</script>
<style> 
@import './assets/fonts/iconfont.css'
</style>