<!--
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-13 11:46:00
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-15 10:42:47
 * @FilePath: /common-comp/packages/button/button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div >
        <van-button type="primary" v-on="$listeners">{{ desc }}</van-button>
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
        // handleClick(){
        //     console.log("按钮点击被调用")
        // }
    }
}
</script>