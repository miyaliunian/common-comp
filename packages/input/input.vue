<template>
    <van-field :value="value"  @input="$emit('input', $event)"  v-bind="$attrs"/>
</template>
<script>
import { Field } from 'vant';
export default {
    name:'d-input',
    props: ['value'],
    components:{
        [Field.name]: Field
    },
    methods: {
    }
}
</script>