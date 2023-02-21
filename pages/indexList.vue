<template>
  <div class="indexList">
    <div class="index-nav" :class="{ is_fixed: isFixed, is_fixed2: isFixed2 }">
      <ul>
        <li
          @click="cut(index)"
          :class="{ active: activs == index }"
          v-for="(item, index) of articletype2.slice(0, 10)"
          :key="index"
        >
          <nuxt-link
            :to="{
              name: 'indexList-name',
              params: { name: item.typename },
              query: {},
            }"
            >{{ item.typename }}</nuxt-link
          >
        </li>
        <li class="gengduo" @click="cutgengduo" v-if="articletype2.length > 10">
          <a href="#">更多</a>

          <div v-if="gdd">
            <p
              v-for="(item, index) of articletype2.slice(
                10,
                articletype2.length
              )"
              @click="cut2(index)"
              :class="{ active: activs2 == index }"
              :key="index"
            >
           
              <nuxt-link
            :to="{
              name: 'indexList-name',
              params: { name: item.typename },
              query: {},
            }"
            >{{ item.typename }}</nuxt-link
          >
            </p>
          </div>
        </li>

        <!-- <li><nuxt-link to="/indexList/attention">关注</nuxt-link></li> -->

        <!-- <nuxt-link to="/indexList/afterEed">后端</nuxt-link>
        <nuxt-link to="/indexList/leadingEed">前端</nuxt-link> -->
      </ul>
    </div>

    <div class="centent">
      <TypeList v-if="typelistshow" :type="articletype"></TypeList>
      <div class="centent_top">
        <div class="left-article"><nuxt-child></nuxt-child></div>

        <div class="right-news">
          <Broadside :userdata="userdata"></Broadside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Broadside from "@/components/broadside.vue";
import TypeList from "@/components/typelist.vue";
import articleListVue from "~/components/articleList.vue";
export default {
  components: {
    Broadside,
    TypeList,
  },
  data() {
    return {
      gdd:false,
      typelistshow: false,
      activs: 0,
      activs2: 0,
      offsetTop: 0,
      isFixed: false,
      isFixed2: false,
      articletype: "",
      list: [
        { name: "综合", path: "synthesize", type: false },
        { name: "关注", path: "attention", type: false },
        { name: "后端", path: "afterEed", type: true },
        { name: "前端", path: "leadingEed", type: true },
      ],
    };
  },
  methods: {
    cutgengduo(){
      this.gdd=!this.gdd
    },
    toarticlelist(index) {
      this.$router.push({
        name: "indexList-id",
        params: { name: this.list[index].path },
        query: {},
      });
    },
    cut(index) {
      // this.typelistshow=this.articletype2[index].type
      // this.activs = index;


    if(!(index==0) && !(index==1)){
     
      if(!(this.articletype2[index]==this.articletype[0])){
            this.articletype.splice((index-2),1)
    this.articletype.unshift(this.articletype2[index])
    console.log(index,this.articletype,'das1')
      }

    }
  

    },
    cut2(index){
this.activs2 = index;
    },
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > 400 ? true : false;
      this.isFixed2 = scrollTop <= 400 ? true : false;
    },
  },

  async asyncData($axios) {
    const articletype = await $axios.$Api
      .getarticletypes()
      .then((data) => {
        console.log(data.respond.data, 99999999999999);
        return data.respond.data;
      })
      .catch((err) => {
        console.log("请求失败");
      });
    console.log(articletype, 66564545646);
    let newarticletype = articletype.map((item) => {
      return {
        type: true,
        ...item,
      };
    });

    let articletype2 = [...newarticletype];
    let zg = [
      { typename: "综合", id: "synthesize", type: false },
      { typename: "关注", id: "attention", type: false },
    ];

    articletype2.unshift(...zg);

    const articledata = await $axios.$Api
      .getarticleselect()
      .then((data) => {
        console.log(data, "文章列表", 1111111111111111111111188);
        return data.respond.data;
      })
      .catch((data) => {
        console.log("文章亲求失败");
      });


      const userdata =await $axios.$Api.getselect().then(data=>{
          console.log(data.respond.data)
          return (data.respond.data).map(item=>{
            return{
              ...item,
              profile:'http://127.0.0.1:8081'+item.profile,
            
            }
          })

      }).catch(data=>{
        console.log('请求失败')
      })

    return {
      articletype: newarticletype,
      articletype2: articletype2,
      articledata: articledata,
      userdata:userdata
    };
  },

  created() {
    // let data=[
    // { typename: "综合", id: "synthesize", type: false },
    //   {typename: "关注", id: "attention" ,type:false}
    // ]
    // this.articletype.unshift(...data)
      console.log(this.userdata,'lllllll')

    if (this.$route.path == "/indexList") {
      this.activs = 0;
    }
    this.articletype2.map((item, index) => {
      let co = decodeURI(this.$route.path);
      if (`/indexList/${item.typename}` == co) {
        console.log(index, 111111111);
        this.activs = index;

        this.typelistshow = item.type;
        console.log(11111111, this.typelistshow);
      }
    });
  },

  watch: {
    $route: {
      handler(route) {
        let j = decodeURI(route.path);

        if (route.path == "/indexList") {
          this.activs = 0;
        }

        console.log(route.path, j);

        this.articletype2.map((item, index) => {
          let co = decodeURI(route.path);
          if (`/indexList/${item.typename}` == co) {
            console.log(index, 111111111);
            this.activs = index;

            this.typelistshow = item.type;
            console.log(11111111, this.typelistshow);
          }
        });
      },
    },
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight);
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 972px) {
  .right-news {
    display: none;
  }
  .left-article {
    width: 100% !important;
  }
}
.is_fixed {
  transform: translate3d(0, -155%, 0);
  transition: all 0.2s;
}
.is_fixed2 {
  transform: translate3d(0, 0, 0);
  transition: all 0.2s;
}
.active {
  color: $type-bg !important;
  a {
    color: $type-bg !important;
  }
}
.gengduo {
  p{
    color: #71777c;
  }
  display: flex;
  align-items: center;
  position: relative;
  div {
    width: 100px;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 0 1px #d0d0d0;
    background: #fff;
    position: absolute;
    top: 30px;
    left: 50px;
  }
}
.index-nav {
  position: fixed;
  top: 61px;
  z-index: 2;

  width: 100%;
  height: 2.5rem;
  background: #fff;
  ul {
    list-style: none;
    display: flex;
    width: 960px;
    margin: 0 auto;
    align-items: center;
    height: 2.5rem;
    font-size: $Font-Size;
    li {
      height: 2.5rem;
      // width: 3.2rem;
      padding: 0 0.6rem;
    }
    a {
      text-decoration: none;
      display: block;
      color: $word-color;
      width: 100%;
      height: 2.5rem;
      line-height: 2.5rem;
    }
    a:hover {
      color: $type-bg;
    }
  }
}
.right-news {
  height: 200px;

  width: 240px;
  margin-left: 20px;
}
.centent {
  width: 960px;
  margin: 0 auto;
  margin-top: 7.2rem;
  position: relative;
  // z-index: -1;
  .centent_top {
    display: flex;
  }
}
.left-article {
  background: #fff;
  width: 700px;
  height: 200px;
}
</style>