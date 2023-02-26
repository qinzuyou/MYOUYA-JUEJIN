<template>
  <div>
    <ArticleList :articledata="articledata"></ArticleList>
  </div>
</template>

<script>
import ArticleList from '@/components/articleList.vue'
export default {
    components:{
  ArticleList
},
data(){
  return{
      
  }
},
created(){
  console.log(this.$route.params,2132311233)
  console.log(this.articledata,55645)
},

  async asyncData({params,$axios},){
    console.log(454545,$axios.$get,params)

    if(params.name=="综合"||params.name==undefined){
      const articledata = await $axios.$get('http://127.0.0.1:8081/article/select',{
      params:{
        

        //   condition:{
        //   type:''
        // }, 
        // pagination:{
        //   size:,
        //   page:'',
        
        // }
        
      }
    }
    
    )
      .then((data) => {
        console.log(data, "文章列表999999", );
        return data.respond.data
      })
      .catch((data) => {
        console.log("文章亲求失败");
      });

      return {
        articledata:articledata
      }
    }else{
      const articledata = await $axios.$get('http://127.0.0.1:8081/article/select',{
      params:{
        

          condition:{
          type:params.name
        }, 
        pagination:{
          size:4,
          page:1,
        
        }
        
      }
    }
    
    )
      .then((data) => {
        console.log(data, "文章列表999999", );
        return data.respond.data
      })
      .catch((data) => {
        console.log("文章亲求失败");
      });

      return {
        articledata:articledata
      }
      }


   
  }
}
</script>

<style>

</style>