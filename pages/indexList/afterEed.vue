<template>
  <div>

   
    <nuxt-link :to="{name:'indexList-afterEed-id',params:{id:'推荐'},query:{a:11,b:12} }">推荐</nuxt-link>
    <nuxt-link :to="{name:'indexList-afterEed-id',params:{id:'最新'},query:{a:11,b:12} }">最新</nuxt-link>
    <nuxt-link :to="{name:'indexList-afterEed-id',params:{id:'热榜'},query:{a:11,b:12} }">热榜</nuxt-link>

    <nuxt></nuxt>
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>