<template>
  <div>
    <h1 v-if="error.statusCode">
        页面不存在{{ error.message }}
    </h1>
    <h1 v-else>
        应用发生异常
    </h1>
    <button @click="$router.replace('/')">回首页</button>
  
  </div>
</template>

<script>
export default {

    // 接收错误信息 error {statusCode,message}
    props:['error']
}   
</script>

<style>

</style>