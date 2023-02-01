<template>
  <h1>注册</h1>
</template>

<script>
export default {
    beforeRouteLeave(to,from,next){
        let bl = window.confirm('是否要离开');
        next(bl)
    }
}
</script>

<style>

</style>