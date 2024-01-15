<template>
    <van-image 
      v-bind="$attrs"
      @click="imgClick"
    />
</template>
<script>
import { Image } from 'vant'
export default {
    name:'d-image',
    components:{
        [Image.name]: Image
    },
    methods: {
        imgClick(){
            this.$emit("imgClick", {data: "d-image回传的数据"});
        }
    }
}
</script>