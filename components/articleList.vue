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
      <ul  v-if="!articledata.length==0">
        <li
          @click="toarticle(item.id)"
          id="cnetent-list"
          @mouseenter="cutclose(index)"
          @mouseleave="cutend"
          :class="{ dlan: index == dlans + 1 }"
          v-for="(item, index) of articledata"
          :key="index"
        >
          <div
            class="close"
            @click.stop="dleteat(index)"
            v-if="elclose == index && closeshow"
          >
            <i class="el-icon-close"></i>
          </div>
          <div>
            <p>
              <span>{{ item.author }}</span> <span>{{ item.releasetime | formatDate('yyyy年MM月dd日') }}</span
              ><span>{{ item.type }}</span
              >
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
                <div>{{ item.give || 0}}</div>
              </div>
              <div>
                <div>
                  <i class="el-icon-edit"></i>
                </div>
                <div>{{item.hits || 0}}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="nulldata" v-else>
        <p>暂无数据</p>
      </div>
      <div><el-skeleton v-if="$store.state.bLoading" class="skel" :rows="6" animated /></div>
     
    </div>
  </div>

</template>

<script>
export default {
  props:["articledata"],
  data() {
    return {
      loading:false,
      elclose: "no",
      closeshow: true,
      dlans: "no",
      active: 0,
      navlist: [{ name: "推荐" }, { name: "最新" }, { name: "热榜" }],
      articlelist: [
       
      
   
      ],
    };
  },
  created(){
    console.log(this.articledata,46465456111)

  },
  mounted(){
  
  },
  methods: {

    start(){
            this.loading = true
        },
        finish(){
            this.loading = false
        },


    actives(index) {
      this.active = index;
      if (index == 0) {
        this.closeshow = true;
      } else {
        this.closeshow = false;
      }
    },
    cutclose(index) {
      this.elclose = index;
    },
    dleteat(index) {
      this.dlans = index;

      setTimeout(
        (index) => {
          this.articledata.splice(index, 1);
          this.dlans = "no";
        },

        500
      );
    },
    cutend() {
      this.elclose = "no";
        

    },
    
    toarticle(id) {
      this.$router.push({
        path: "/article",
        query: {
          id: id,
        },
      });
    },
  },

  // async asyncData($axios) {
  //   $axios.$Api
  //     .getarticleselect()
  //     .then((data) => {
  //       console.log(data,"文章列表")
  //     })
  //     .catch((data) => {});
  // },
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
.skel{
  padding:0.8rem;
}
.nulldata{
  text-align:center;
  padding: 2rem;
  p{
   color: #000 !important;
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
.dlan {
  transform: translate3d(0, -100%, 0);
  // opacity: 0;
  transition: all 0.5s;
}

#cnetent-list {
  position: relative;
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1rem;
  }
  .close:hover {
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