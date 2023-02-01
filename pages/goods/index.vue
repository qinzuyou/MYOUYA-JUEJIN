<template>
    <div class="goods">
      <h3>商品</h3>
  
      <nuxt-link to="/goods/1?a=1&b=2">商品01</nuxt-link>
      <nuxt-link to="/goods/1?a=1&b=2">商品02</nuxt-link>
      <nuxt-link :to="{name:'goods-id',params:{id:3},query:{a:1,b:222}}">商品03</nuxt-link>
      <nuxt-link to="/goods/comment">评论</nuxt-link>
          <nuxt/>
    </div>
  </template>
  <!-- 当一个目录下存在index.vue，则 这一目录发生跳转时会在本级目录层显示 -->
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>