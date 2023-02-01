<template>
  <div
    class="nav"
    id="boxFixed"
    :class="{ is_fixed: isFixed, is_fixed2: isFixed2 }"
  >
    <el-menu
      :default-active="activeIndex"
      @select="handleSelect"
      active-text-color="#399"
      mode="horizontal"
      class="navtop"
    >
      <el-menu-item>
        <img
          src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg
"
          alt=""
        />
      </el-menu-item>

      <el-menu-item
        :class="{ actives: active == index ? true : false }"
        @click="handmove(index)"
        v-for="(item, index) of navs"
        :key="index"
        :index="index + ''"
        >{{ item.title }}</el-menu-item
      >
    </el-menu>
  </div>

  <!-- 
  <nav>
    <nuxt-link to="/index" active-class="app_header--active">首页</nuxt-link>
    <nuxt-link to="/goods" active-class="app_header--active">商品</nuxt-link>
    <nuxt-link to="/user" active-class="app_header--active">用户</nuxt-link>
    <nuxt-link to="/reg" active-class="app_header--active">注册</nuxt-link>
    <nuxt-link to="/login" active-class="app_header--active">登录</nuxt-link>
  </nav> -->
</template>

<script>
export default {
  data() {
    return {
      active: "-1",
      activeIndex: "0",
      offsetTop: 0,
      isFixed: false,
      isFixed2: false,
      navs: [
        {
          path: "/indexList",
          title: "首页",
        },
        {
          path: "/goods",
          title: "商品",
        },
        {
          path: "/user",
          title: "用户",
        },
        {
          path: "/login",
          title: "登录",
        },
        {
          path: "/reg",
          title: "注册",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      if (key == null) {
        // console.log(this.navs[0].path)
        this.$router.push(this.navs[0].path);
        return;
      }
      this.$router.push(this.navs[key].path);
    },
    handmove(key) {
      this.active = key;
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
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
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        console.log(route);
        let find = false;

        this.navs.map((item, index) => {
          console.log(index, item.path);
          if (item.path == "/") {
            this.$router.push({ name: "root" });
          }
          if (route.path == item.path) {
            console.log("true");
            this.activeIndex = index + "";
            find = true;
          }
        });

        // if (!find) this.activeIndex = "-1";
      },
    },
  },
};
</script>

<style lang="scss"  scoped>
/* .app_header--active {
  background: #399;
  color: #fff;
} */

.is_fixed {
  transform: translate3d(0, -100%, 0);
  transition: all 0.2s;
}
.is_fixed2 {
  transform: translate3d(0, 0, 0);
  transition: all 0.2s;
}
.nav {
  position: fixed;
  top: 0;
  z-index: 1;

  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.4rem 0;
}
.navtop {
  width: 1440px;
  height: 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: none !important;
  img {
    width: 107px;
    height: 22px;
    line-height: 3em;
  }
  li {
    font-size: 1rem !important;
    border: none !important;
    height: 3rem;
    line-height: 3rem;
    font-size: 0.9rem !important;
  }
  .is-active {
    color: $type-bg !important;
    border: none !important;
  }
}

.actives::before {
  content: "";
  width: 2rem;
  height: 0.2rem;
  background: $type-bg;
  position: absolute;
  margin: 0 auto;
  bottom: 0;
}
</style>

