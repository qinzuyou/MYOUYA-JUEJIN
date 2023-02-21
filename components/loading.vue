<template>
  <div>
    <div  class="ld"  v-if="loading">
        <img src="~/assets/img/loading.gif" alt="">
    </div>
   
  </div>
</template>

<script>
export default {
    data:()=>({
        loading:false,

    }),
    methods:{
        start(){
            this.loading = true
   
                this.$store.commit('cutloding',true)
        },
        finish(){
            this.$store.commit('cutloding',false)
 
           this.loading=false
           
        },


    }
}
</script>

<style lang="scss" scoped>
.ld{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99999;
    img{
      width: 100px;
      height: 100px;
    }
}

</style>