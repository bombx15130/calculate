<template>
        <li @click="onClick" :class="type">{{ page }}</li>
</template>

<script>
export default {
    props:['page','type'],
    data(){
        return{
        }
    },
    methods:{
        onClick:function (){
            this.$emit('getData', this.page)
        }
    }
}
</script>

<style>
*{
    /* outline: 1px solid #F00; */
}
li{
    padding:10px;
    display:inline-block;
    border:1px solid #CCC;
    font-size: 14px;
    cursor: pointer;
}

</style>


