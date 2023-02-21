<template>
  <div class="box">
    <ul  class="type-list">
    
      <li @click="actives(index)" :class="{'active':active==index?true:false}"  v-for="(item, index) of  articletype.slice(0,8)" :key="index">{{ item.typename }}</li>
      <li v-show="len" @click="actives(index+8)" :class="{'active':active==index+8?true:false}"  v-for="(item, index) of  articletype.slice(8,articletype.length)" :key="index+8">{{ item.typename }}</li>
     
      <li class="lent" @click="zank()" > <span v-if="!len">展开 <i class="el-icon-caret-bottom"></i></span>   <span v-else>收起 <i class="el-icon-caret-top"></i></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:["type"],

  data() {
    return {
        active:'0',
        len:false,
        articletype: [
      
      ],
    };
  },
  methods:{
    actives(index){
        this.active=index
        console.log(index)
  
    },
    zank(){
      this.len=!this.len
    }
  },
  created(){
    this.articletype=this.type
    console.log(this.type,555)



  },



};
</script>

<style lang="scss" scoped>
.active{
    background: $type-bg !important;
    color: #fff !important;
}
.lent:hover{
  color:$type-bg !important;
}
.type-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.6rem;
    background-color: #fff;
    border-radius: 1rem;
    font-size: 0.8rem;
    color: #8a9aa9;
    padding: 0 0.7rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}
</style>