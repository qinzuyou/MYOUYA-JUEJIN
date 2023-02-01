<template>
  <div>
    <h4>评论</h4>
    <nuxt-link :to="{name:'goods-comment-uid',params:{uid:1},query:{a:11,b:12} }">评论1</nuxt-link>
    <nuxt-link :to="{name:'goods-comment-uid',params:{uid:2},query:{a:11,b:12} }">评论2</nuxt-link>
    <nuxt></nuxt>   
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>