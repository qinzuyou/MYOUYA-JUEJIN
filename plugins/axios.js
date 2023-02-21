

// 拦截器
export default function ({
  $axios,
  redirect,
  route,
  store,

}) {

    


  //基本配置
  // $axios.defaults.timeout=10000;

  // 设置API的域名
//   $axios.setBaseURL('https://6u371q5715.zicp.fun')

  //请求拦截

  $axios.onRequest(config => {
    console.log('请求拦截')
    // config.headers.token ="加token";
    //    config.headers['Content-Type']='multipart/form-data'
    //    config.headers['Authorization']='multipart/form-data'
    return config;

  })

  //响应拦截
  $axios.onResponse(res => {
    console.log('响应拦截')

    // if(res.data.err==2 && route.fullPath !== '/login'){
    //     redirect('/login?path='+route.fullPath)
    // }
    return res
  })

  //错误处理
  $axios.onResponse(res => {
    console.log('错误处理')

    return res
  })

}
