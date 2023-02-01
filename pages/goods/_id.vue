<template>
  <div class="detail">
    <h3>详情页</h3>
  </div>
</template>

<script>

export default {
    name:'detail',
    // validate({params,query}){
    //     console.log(params,query)
    //     return typeof params.id === 'number'
    // },
    // transition:'动画名'
   transition:'test'

}
</script>

<style scoped>
    .test-enter-active, .test-leave-active{
        transition: 0.5 ease all;
    }
    .test-enter, .test-leave-active{
        margin-left:-1000px ;
    }
</style>