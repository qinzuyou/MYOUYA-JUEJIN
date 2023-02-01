<template>
  <div class="box">
    <ul  class="type-list">
      <li @click="actives(index)" :class="{'active':active==index?true:false}"  v-for="(item, index) of list" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        active:'0',
      list: [
        { name: "全部" },
        { name: "后端" },
        { name: "掘金·日新计划" },
        { name: "java" },
      ],
    };
  },
  methods:{
    actives(index){
        this.active=index
        console.log(index)
    }
  }
};
</script>

<style lang="scss" scoped>
.active{
    background: $type-bg !important;
    color: #fff !important;
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