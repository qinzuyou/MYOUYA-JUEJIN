//全局守卫
//app == vue实例


export default ({app,redirect})=>{
    console.log('插件')
    app.router.beforeEach((to,from,next)=>{
            console.log('插件配置 全局前置',to)

            if(to.name =='login' || to.name =='use'){
                next()
            }else{
                // alert('请先登录')
                // redirect({name:'login'})
                next()
            }
    })
    app.router.afterEach((to,from)=>{
        console.log("插件全局后置守卫")
    })
}