<template>
  <div>
    <!-- 跳转 声明式跳转 router-link -->
  
        <app-header></app-header>
   
      <!-- 展示区 router-view -->
    <nuxt></nuxt>
  </div>
</template>

<script>
import appHeader from './app-header.vue'
export default {
  components: { appHeader },
    // middleware:'auth',//页面层级中间件定义
    middleware(store,router,redirect,params,query){
        console.log('middleware layout')
        // redirect('/login')

    }
}
</script>

<style lang="scss" >
body{
  background: #e4e6eb;
  margin: 0 ;
  padding: 0;
  ul,p,li,span {
    margin: 0;padding: 0;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
 
}
</style>