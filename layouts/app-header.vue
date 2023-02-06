<template>
  <div>
    <div class="box" :class="{ is_fixed: isFixed, is_fixed2: isFixed2 }">
      <div class="nav" id="boxFixed">
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

        <ul class="nav-right">
          <li class="search" :class="{ cut: cuts }">
            <input type="text" @blur="cutend" @focus="cutstart" />
            <div>
              <i class="el-icon-zoom-in"></i>
            </div>
          </li>
          <li class="fb" :class="{ cut2: cuts }">
            <el-button type="primary" @click="toissue">发布文章</el-button>
          </li>

          <li class="login">
            <el-button type="primary" plain  @click="mdshow">登录</el-button>
            <el-button type="primary" plain>注册</el-button>
          </li>
          <li class="profile">
            <img
              src="https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5070639578~100x100.awebp"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="modal" v-if="modolshow">
      <div class="modal-content">
        <div class="mdclose" @click="mdshow"><i class="el-icon-close"></i></div>
        <Lore></Lore>
      </div>
    </div>
  </div>
</template>

<script>
import Lore from '@/components/lore.vue'
export default {
  components:{
    Lore
  },
  data() {
    return {
      modolshow:false,
      active: "-1",
      activeIndex: "0",
      offsetTop: 0,
      isFixed: false,
      isFixed2: false,
      cuts: false,
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
    toissue(){
      this.$router.push({

        path:'/issue2',
      }
      )
    },
    mdshow(){
        this.modolshow=!this.modolshow
    },
    cutstart() {
      console.log("获取焦点");
      this.cuts = true;
    },
    cutend() {
      console.log("失去焦点");
      this.cuts = false;
    },
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
.mdclose{
  position: absolute;
  right: 10px;
  top: 14px;
  font-size:1.2rem ;

}
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content{
    position: relative;
    top: -20%;
    background-color:#fff;
    border-radius: 8px;
    width:500px;

  }
}

.cut {
  width: 400px !important;
  border: 1px solid $type-bg !important;
  > div {
    background: #eaf2ff !important;
  }
  i {
    color: $type-bg !important;
  }
  input {
    width: 60% !important;
  }
}
.cut2 {
  width: 0 !important;

  button {
    width: 0 !important;
    border: 0 !important;
  }
}
.nav-right {
  display: flex;
  align-items: center;
  .profile {
    margin-left: 24px;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
  }
  .login {
    display: flex;
    margin-left: 24px;
    button {
      width: 60px;
      height: 34px;
      padding: 0;
      span {
      }
    }
  }
  .fb {
    margin-left: 24px;
    width: 100px;
    transition: all 0.4s;
    button {
      transition: all 0.4s;
      width: 100px;
      height: 34px;
      padding: 0;
    }
  }
  .search {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    position: relative;
    height: 2rem;
    border: 1px solid #c2c8d1;
    transition: width 0.4s;
    width: 270px;
    padding: 1px;
    div {
      position: absolute;
      right: 2px;
      width: 44px;
      height: 30px;
      background: $juejin-bg;
      border-radius: 2px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    input {
      border: none;
      width: calc(100% - 44px);
      padding: 0.6rem 0 0.6rem 1rem;
      box-shadow: none;
      outline: none;
      font-size: 1.1rem;
      color: #8a919f;
      background-color: transparent;
      transition: width 0.3s;
    }
  }
}
.is_fixed {
  transform: translate3d(0, -100%, 0);
  transition: all 0.2s;
}
.is_fixed2 {
  transform: translate3d(0, 0, 0);
  transition: all 0.2s;
}
.box {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.4rem 0;

  position: fixed;
  top: 0;
  z-index: 1;
}
.nav {
  // width: 100%;

  // width: 100%;

  display: flex;
  width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
}
.navtop {
  // width: 1440px;
  height: 3rem;
  // margin: 0 auto;
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

