<template>
  <div>
    <div v-if="loading">
        loading...
    </div>
   
  </div>
</template>

<script>
export default {
    data:()=>({
        loading:false
    }),
    methods:{
        start(){
            this.loading = true
        },
        finish(){
            this.loading = false
        }
    }
}
</script>

<style>

</style>