<template>
  <div class="article">
    <div class="nav">
      <ul>
        <li
          v-for="(item, index) of navlist"
          :key="index"
          @click="actives(index)"
          :class="{ active: active == index }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="centent">
      <ul>
        <li @click="toarticle(index)" id="cnetent-list" @mouseenter="cutclose(index)"  :class="{dlan:index==dlans+1}" v-for="(item, index) of articlelist" :key="index">
          <div class="close" @click.stop="dleteat(index)"  v-if="elclose==index"><i class="el-icon-close"></i></div>
          <div>
            <p>
              <span>{{ item.name }}</span> <span>{{ item.time }}</span
              ><span>{{ item.type }}</span
              ><span>·</span><span>程序员</span>
            </p>
            <p class="title">{{ item.title }}</p>
            <p>
              {{ item.centent }}
            </p>
            <div class="centnet-buttom">
              <div>
                <div>
                  <i class="el-icon-edit"></i>
                </div>
                <div>11111</div>
              </div>
              <div>
                <div>
                  <i class="el-icon-edit"></i>
                </div>
                <div>11111</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elclose:'',
      dlans:'no',
      active: 0,
      navlist: [{ name: "推荐" }, { name: "最新" }, { name: "热榜" }],
      articlelist: [
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
        {
          name: "秃了秃了",
          title: "可怕的35岁-大龄程序员2022年终总结",
          centent:
            "35岁是程序员的一道坎，几年前第一次听说时内心就充满了焦虑。总是想着要做些什么改变好从容的面对。但是",
          time: "4天前",
          type: "后端",
        },
      ],
    };
  },
  methods: {
    actives(index) {
      this.active = index;
    },
    cutclose(index){
        this.elclose=index
    },
    dleteat(index){

      this.dlans=index
    
   setTimeout((index)=>{
     this.articlelist.splice(index,1)
     this.dlans='no'
   },
    
500);

   
    },
    toarticle(index){
      this.$router.push({
        path:'/article',
        query:{
          id:index
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: $type-bg !important;
}
.article {
  background-color: #fff;
  .nav {
    padding: 1rem 1rem;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
    ul {
      display: flex;
      list-style: none;

      li {
        font-size: $Font-Size;
        padding: 0 0.6rem;
        border-right: 1px solid hsla(0, 0%, 59.2%, 0.1);
      
      }
      li:nth-child(3) {
        border: none;
      }
      li:hover {
        color: $type-bg;
      }
    }
  }
}
.centent {
  ul {
    li {
      background-color: #fff;
      padding: 1rem 1rem 0 1rem;
      display: flex;
      align-items: center;

      //   max-width: 162px;
      font-size: 13px;

      line-height: 22px;
      color: #4e5969;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      span:nth-child(1) {
        padding-right: 0.4rem;
        border-right: 0.1rem solid rgba(59, 58, 58, 0.1);
      }
      span:nth-child(2) {
        padding: 0 0.4rem;
        border-right: 0.1rem solid rgba(59, 58, 58, 0.1);
      }
      span:nth-child(3) {
        padding: 0 0.4rem;
      }
      span:nth-child(4) {
        padding: 0 0.1rem;
      }
      span:nth-child(5) {
        padding: 0 0.2rem;
      }

      .title {
        margin: 0.5rem 0;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #1d2129;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
  }
}
.centnet-buttom {
  display: flex;
  > div {
    display: flex;
    margin-right: 1.5rem;
    padding: 0.5rem 0;
  }
}
.dlan{
  transform: translate3d(0, -100%, 0);
// opacity: 0;
  transition: all 0.5s;
}

#cnetent-list {
  position: relative;
  .close{
    position: absolute;
    top: 1rem;
    right:1rem;
   font-size:1rem ;
  }
  .close:hover{
    color: $type-bg;
  }
  > div {
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  }
}
#cnetent-list:hover {
  background: #f1f3f8;
}
</style>