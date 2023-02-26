<template>
  <div>
    <div
      v-if="navshow"
      class="box bg"
      
      :class="{ is_fixed: isFixed, is_fixed2: isFixed2 }"
    >
      <div class="nav" id="boxFixed">
        <div class="logo">
          <img
            src="../assets/img/logo.png"
            alt=""
          />
          <p>稀土掘金</p>
        </div>
        <el-menu
          :default-active="activeIndex"
          @select="handleSelect"
          active-text-color="#399"
          mode="horizontal"
          class="navtop bg"
        >
          <el-menu-item
          class="navfont"
            :class="{ actives: active == index ? true : false }"
            @click="handmove(index)"
            v-for="(item, index) of navs"
            :key="index"
            :index="index + ''"
            >{{ item.title }} <span v-if="item.title=='沸点'">考研der</span></el-menu-item
          >
        </el-menu>

        <div class="nav-bottom">
          <p class="active2" @click="nav2show">
            {{ newtitle }}
            <span
              ><i class="el-icon-caret-bottom" :class="{ xuan: xuan }"></i
            ></span>
          </p>

          <div class="nav-modal">
          <ul v-if="nshow">

            <li
              :class="{ active2: active2 == index }"
              @click="toppage(index)"
              v-for="(item, index) of navs"
              :key="index"
            >
              {{ item.title }}
            </li>

          </ul>
        </div>
        </div>

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

          <li class="login" v-if="loginshow">
            <el-button type="primary" plain @click="mdshow">登录</el-button>
            <el-button type="primary" plain>注册</el-button>
          </li>
          <li v-else class="fb">
            <el-button type="primary" @click="exitlogin">退出登录</el-button>
          </li>
          <li class="profile">
            <img
              :src="userlist.profile ? userlist.profile : ldimg"
              :onerror="onerrimg(tempimg)"
              alt=""
            />
            <p>{{ userlist.nickname }}</p>
          </li>

          <li class="theme">
                <i class="el-icon-sunny" v-if="cuttheme" @click="setTheme('light')"></i>
                <i class="el-icon-moon" v-else @click="setTheme('')"></i>
               
          </li>
        </ul>
      </div>

    
    </div>
    <div  class="gotopbox" :class="{gotopshow:gotopshow}" @click="gotop">
      <div  class="gotop">
             <i class="el-icon-top"></i>
      </div>
   
      </div>
    <div class="modal" v-if="modolshow">
      <div class="modal-content">
        <div class="mdclose" @click="mdshow"><i class="el-icon-close"></i></div>
        <Lore :modolshow="modolshow"></Lore>
      </div>
    </div>
  </div>
</template>

<script>
import Lore from "@/components/lore.vue";

export default {
  components: {
    Lore,
  },
  data() {
    return {
      cuttheme:true,
      navshow: true,
      tempimg:
        "https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5070639578~100x100.awebp",
      ldimg:
        "https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5070639578~100x100.awebp",
      xuan: false,
      modolshow: false,
      loginshow: true,
      userlist: [],
      gotopshow:false,
      active: "-1",
      active2: "0",
      newtitle: "首页",
      activeIndex: "0",
      offsetTop: 0,
      isFixed: false,
      isFixed2: false,
      cuts: false,
      nshow: false,
      content: "",
      navs: [
        {
          path: "/indexList",
          title: "首页",
        },
        {
          path: "/point",
          title: "沸点",
        },
  
      ],
    };
  },

  methods: {
    setTheme(value){
      console.log(value)
      window.document.documentElement.setAttribute("data-theme", value)
      this.cuttheme=!this.cuttheme
    },

    gotop(){
      document.documentElement.scrollTop=0
    },
    onlodaimg(img) {
      return "this.src=" + '"' + img + '";this.οnlοad=null';
    },
    onerrimg(img) {
      return "this.οnerrοr=null;this.src=" + '"' + img + '";';
    },
    exitlogin() {
      localStorage.clear();
      this.$store.commit("user/logOut");
      this.$message({ type: "info", message: "退出成功" });
 
      this.userlist = "";
      this.loginshow = true;
    },
    loginshows() {
      this.loginshow = false;
    },
    toissue() {
      if (this.$store.state.user.token) {
        this.$router.push({
          path: "/issue2",
        });
      } else {
        this.$message({ type: "info", message: "请先登录" });
      }
    },
    mdshow() {
      this.modolshow = !this.modolshow;
    },
    getuser() {
      if (this.$store.state.user.token) {
        this.loginshow = false;

        this.userlist = this.$store.state.user.userInfo;
      }
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

    toppage(index) {
      this.$router.push(this.navs[index].path);
      this.active2 = index;
      this.newtitle = this.navs[index].title;
    },
    nav2show() {
      this.nshow = !this.nshow;
      this.xuan = !this.xuan;
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

      this.gotopshow = scrollTop > 400 ? true : false;
     
    },
  },

  async asyncData($axios, $store) {
    // console.log(store,9999999999,this.store.state)
    let content = 121212;
    return {
      content,
    };
  },

  created() {
    // console.log(this.$store.state.user.token,5465)
    // this.userlist=this.$store.state.user.userInfo
    // console.log(this.$store.state)
    // console.log(this.$store.state.user.userInfo.account,488)
    // console.log(this.userlist,5555)
  },

  fetch({ store }) {
    // this.userlist=store.state.user.userInfo
  },

  mounted() {
    let store = JSON.parse(localStorage.getItem("store")).user;

    this.userlist = store.userInfo;
    console.log(this.userlist, 6666);
    if (store.token) {
      this.loginshow = false;
    }

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
        console.log(route, 7777777777);
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

        if (route.path == "/issue2") {
          console.log(888888888888);
          this.navshow = false;
        } else {
          this.navshow = true;
        }

        // if (!find) this.activeIndex = "-1";
      },
    },
  },
};
</script>

<style lang="scss"  scoped>
@media screen and (max-width: 1450px) {
  .search {
    margin: 0 !important;

  }
}
@media screen and (max-width: 1160px) {
  //  .nav{
  //   width: 100% !important;
  //   margin: 0 auto !important;

  //  }
  .search {
    margin: 0 !important;
    width: 100% !important;
  }
.profile{
  display: none;
}
}
@media screen and (max-width: 1102px) {
  //  .nav{
  //   width: 100% ;
  //  }
  .logo{
    p{
      display: none;
    }
  }
  .navtop {
    display: none !important;
   background: none !important;
  
  }
  .nav-bottom {
    display: block !important;
  }
}

@media screen and (max-width: 1022px) {
  .fb {
    display: none !important;
  }

}

.theme{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left:2rem ;
  i{
   font-size:2rem ;
  }
}
.navfont{
  position: relative;
  span{
    position: absolute;
    top: 0px;
    right: -24px;
    z-index: 9;
    white-space: nowrap;
    padding: 2px 7px;
    background-color: #ee502f;
    border-radius: 50px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    transform: scale(.5);
    line-height: 18px;
    color: #fff;
  }
}
.gotopbox{
  position: fixed;
  bottom: 20px;
  right: 20px;
  // display: none;  
  opacity: 0;
  transition: all 0.5s;
}
.gotopshow{
  opacity: 1;
 
  // display: block !important;
}
.gotop {
  

  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size:2rem ;

  justify-content: center;

  color: #909090;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 50%;
}
.xuan {
  transform: rotate(180deg);
}
.active2 {
  color: $type-bg;
}
.logo {
  display: flex;
  p{
    font-size: 1.2rem;
  }
  img {
    width: 34px;
    height: 30px;
  }
  justify-content: center;
  align-items: center;
}
.nav-bottom {
  width: 100px;

  line-height: 50px;
  margin-left: 4rem;
  display: none;
  position: relative;
  i {
    transition: all 0.2s;
  }
  ul {
    display: block;
    position: absolute;
    top: 50px;

    padding: 0.667rem;
    width: 8rem;
    z-index: 3;
    background-color: #fff;
    box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
    border: 1px solid #ebebeb;
    border-radius: 4px;
    font-size: 0.9rem;
    text-align: center;
    li {
      padding: 20px 0;
    }
  }
}
.mdclose {
  position: absolute;
  right: 10px;
  top: 14px;
  font-size: 1.2rem;
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

  .modal-content {
    position: fixed;
    top: 20%;
    background-color: #fff;
    border-radius: 8px;
    width: 500px;
  }
}

.cut {
  width: 320px !important;
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
    text-align: center;
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
   margin:0 130px;
 ;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    position: relative;
    height: 2rem;
    border: 1px solid #c2c8d1;
    transition: width 0.4s;
    width:240px;
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

  position: fixed;
  top: 0;
  z-index: 1;
  padding: 0.4rem 2rem;
}
.nav {
  // width: 100%;

  width: 80%;
  height: 50px;
  display: flex;
  // width: 1440px;
  justify-content: center;
  margin: 0 auto;

  // justify-content: space-between;

  align-content: center;
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

