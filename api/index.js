

export default ($axios) => {
    return {
      getData: () => $axios.get('/api/get_index_data'),
      // 有参数的情况
      postData: data => $axios.post('/api/get_index_data', data),
      postForm: data => $axios.post('/test',{'Content-Type':'multipart/form-data='+new Date().getTime()},data),
      getData: params => $axios.get('/api/get_index_data', {params}),

      //登录
      postLogin: data=>$axios.post('/login',data),
      //查询用户数据
      getselect:params =>$axios.get('/users/select',params),

      //文章发布
      postpublish: data=>$axios.post('/article/publish',data),
      
      //文章查询
      getarticleselect: params=>$axios.get('/article/select',params),

      //文章类型查询
      getarticletypes: params=>$axios.get('/article/types',params),

      

      
  
    }
  }
  