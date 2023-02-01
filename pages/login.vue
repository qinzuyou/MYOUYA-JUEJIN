<template>
  <div class="login">
    <h3>登录</h3>
    <button @click="loging">登录</button>
    <div class="sass">sass测试</div>
    <div class="sass2">全局sass测试</div>
  </div>
</template>

<script>
// https://pokeapi.co/api/v2/pokemon/${10}/
export default {
  methods:{
    loging(){
      
    }
  }
   
}
</script>

<style lang="scss" scoped>
$bg:#399;
.sass{
  width:100px;
  height: 100px;
  background: $bg;
}
.sass2{
  width:100px;
  height: 100px;
  background: $them-bg;
}

</style>