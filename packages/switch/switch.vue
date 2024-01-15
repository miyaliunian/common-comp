<template>
    <van-switch v-model="checked"  v-bind="$attrs"  v-on="$listeners"/>
</template>
<script>
import { Switch } from 'vant';
export default {
     name:'d-switch',
     components:{
       [Switch.name]:Switch 
     },
      data() {
        return {
            checked: true,
        };
    },

}
</script>