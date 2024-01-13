<template>
    <div @click="handleClick">
        <van-button type="primary">{{ desc }}</van-button>
    </div>
</template>
<script>
import { Button } from 'vant';
export default {
    name: 'd-button',
    props: {
        desc: String,
        // eslint-disable-next-line vue/require-prop-type-constructor
        required: true
    },
    components:{
        [Button.name]: Button,
    },
    methods: {
        handleClick(){
            console.log("按钮点击被调用")
        }
    }
}
</script>