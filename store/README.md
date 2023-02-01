# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

打包

生命周期
    nuxtServerInit
        适用场景是对store 操作
    middleware
        中间件执行流程顺序
        nuxt.config.js->匹配布局->匹配页面
    validte
        参数校验，校验失败则跳转到错误也页面

路由
    约定式
        展示区 <nuxt/>
        声明式跳转
         <nuxt-link :to="{name:'goods-id',params:{id:3},query:{a:1,b:222}}">商品03</nuxt-link>

         name:路由名 目录名-其他目录-文件名
         params:key 要对等文件名

         子路由
            目录代表子路由，子路由由内部同级文件，代表是同一级目录
         展示区层级
            pages/一级展示/二级展示
                /index.vue 会在一级展示
                /index.vue为空文档时，代表默认页为空

    路由守卫
        前置
            依赖中间件middleware，插件
            全局守卫：nuxt.congif 指向middleware
                     layouts定义中间件
            组件独享守卫：
                     middleware
            后置
            使用vue的 beforeRouter
        配置
