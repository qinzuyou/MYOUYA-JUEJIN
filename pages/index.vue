<template>
  <div>
   

  </div>
</template>

<script>

export default {
  name: "IndexPage",





  //SSR 服务端运行的钩子
  // middleware:'auth',//页面层级中间件定义
  middleware({redirect}) {
    console.log("middleware pages");
    redirect('/indexList')
  },

};
</script>
