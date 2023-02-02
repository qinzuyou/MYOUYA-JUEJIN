<template>
  <div>1112</div>
</template>

<script>
export default {
        //SSR 服务端运行的钩子
  // middleware:'auth',//页面层级中间件定义
  middleware({redirect}) {
 
    redirect('/indexList/synthesize')
  },
}
</script>

<style>

</style>