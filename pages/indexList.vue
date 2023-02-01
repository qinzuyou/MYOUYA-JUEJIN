<template>
  <div class="indexList">
    <div class="index-nav"  :class="{ is_fixed: isFixed, is_fixed2: isFixed2 }">
      <ul>
        <li
          @click="cut(index)"
          :class="{ active: activs == index }"
          v-for="(item, index) of list"
          :key="index"
        >
          <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
        </li>
        <!-- <li><nuxt-link to="/indexList/attention">关注</nuxt-link></li> -->

        <!-- <nuxt-link to="/indexList/afterEed">后端</nuxt-link>
        <nuxt-link to="/indexList/leadingEed">前端</nuxt-link> -->
      </ul>
    </div>

    <div class="centent">
      <TypeList></TypeList>
      <div class="centent_top">
        <div class="left-article"><nuxt /></div>

        <div class="right-news">
          <Broadside></Broadside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Broadside from "@/components/broadside.vue";
import TypeList from "@/components/typelist.vue";
export default {
  components: {
    Broadside,
    TypeList,
  },
  data() {
    return {
      activs: 0,
      offsetTop: 0,
      isFixed: false,
      isFixed2: false,
      list: [
        { name: "综合", path: "/indexList/synthesize" },
        { name: "关注", path: "/indexList/attention" },
        { name: "后端", path: "/indexList/afterEed" },
        { name: "前端", path: "/indexList/leadingEed" },
      ],
    };
  },
  methods: {
    cut(index) {
      this.activs = index;
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
.is_fixed {
  transform: translate3d(0, -155%, 0);
  transition: all 0.2s;
}
.is_fixed2 {
  transform: translate3d(0, 0, 0);
  transition: all 0.2s;
}
.active {
  a {
    color: $type-bg !important;
  }
}
.index-nav {
  position: fixed;
  top: 61px;
  z-index: 1;

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
      width: 3.2rem;
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