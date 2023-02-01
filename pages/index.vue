<template>
  <div>

    <div class="indexList">
    <nuxt-link to="/indexList/synthesize">综合</nuxt-link>
    <nuxt-link to="/indexList/attention">关注</nuxt-link>
    <nuxt-link to="/indexList/afterEnd">后端</nuxt-link>
    <nuxt-link to="/indexList/leadingEnd">前端</nuxt-link>
    <nuxt-link to="/indexList">quan</nuxt-link>

    <nuxt/>
  </div>



    <!-- <Tutorial/> -->
    <h1>首页</h1>
    {{ a }}/{{ b }}

    <h4>vux操作</h4>
    <button @click="getStore">编程式</button>

    <div>index getters:{{ getNav }}</div>
    <div>index state{{ bNav }}</div>
    <div>user state{{ data }}</div>

    <el-button type="primary">el按钮</el-button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
import { state } from "~/store";
export default {
  name: "IndexPage",



  methods: {
    getStore() {
      //编程式访问vuex

      //发出actions请求给user模块
      // this.$store.dispatch("user/A_UPDATE_USER", {
      //   err: 0,
      //   msg: "登录成功",
      //   token: "假token",
      //   data: {
      //     title: "user actions提交的数据",
      //   },
      // });

      this.M_UPDATE_USER({
        err: 0,
        msg: "登录成功",
        token: "假token",
        data: {
          title: "user metations提交的数据",
        },
      });

      this.A_UPDATE_USER({
        err: 0,
        msg: "登录成功",
        token: "假token",
        data: {
          title: "user actions提交的数据",
        },
      });
    },

    ...mapActions("user", ["A_UPDATE_USER"]),
    ...mapMutations("user", ["M_UPDATE_USER"]),
  },

  computed: {
    xx() {},
    ...mapGetters(["getNav"]),
    ...mapState(["bNav"]),
    ...mapState("user", ["data"]),
    ...mapState({ home: (state) => state.home.data }),
  },

  //SSR 服务端运行的钩子
  // middleware:'auth',//页面层级中间件定义
  middleware({redirect}) {
    console.log("middleware pages");
    redirect('/indexList')
  },

  //参数的有效性
  validate({ params, query }) {
    //校验业务
    console.log("validate");
    return true;
  },

  //读数据，返回组件
  asyncData(context) {
    //异步业务逻辑，读取服务端数据
    console.log("asyncData");

    return {
      b: 2,
    };
  },

  //读数据，返回给vuex
  async fetch({ store, $axios, error }) {
    //异步处理业务逻辑，读取服务端数据提交给vuex
    console.log("fatch");

    let res = await $axios({ url: `https://pokeapi.co/api/v2/pokemon/${10}/` });

    res.data &&
      store.commit("home/M_UPDATE_HOME", { err: 0, data: res.data.name });
  },

  //SSR && CSR 服务端和客户端同时运行的钩子
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("create");
  },

  //CSR  客户端运行的钩子  可以读取window和this指向组件
  beforeMount() {},
  mounted() {
    console.log("mounted", window, this);
  },
  beforeUpdate() {},
  updated() {
    console.log("updated");
  },
  beforeDestroy() {},
  destroyed() {},

  // //服务器渲染、激活、失活 不存在

  // activated(){},
  // deactivated(){},

  data() {
    return {
      a: 4,
    };
  },
};
</script>
