<template>
  <div>
用户页{{ title }}
  </div>
</template>

<script>
export default {

   async asyncData({$axios}){
        let res = await $axios({url:'/data/list.json'})
        console.log('读取到的静态资源',res)
       


        let res2 = await $axios({url:`https://pokeapi.co/api/v2/pokemon/${10}/`})

        // let res3 = await $axios({url:'https://eolink.o.apispace.com/34324/air/v001/aqi?areacode=101010100'})
        console.log('宝可梦数据',res2.data)
        // console.log('测速测数',res3)

 return{
            title:res.data.title
        }
    },


   


    // async fetch({$axios}){
    //     let res = await $axios({url:'/data/list.json'})
    //     console.log('读取到的静态资源',res)
       
    // },
    

    middleware(){
        console.log('middleware pages user 组件前置独享守卫')

    },
}
</script>

<style>

</style>