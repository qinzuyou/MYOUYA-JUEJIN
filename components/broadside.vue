<template>
  <div>
    <div class="top">
      <div class="top_left">
        <h1>下午好！</h1>
        <p>点亮在社区的每一天</p>
      </div>
      <div class="top_right">
        <div><span> 去签到</span></div>
      </div>
    </div>
    <div class="advertising">
      <div
        v-for="(item, index) of advertisinglist"
        :key="index"
        @mouseover="mous(index)"
      >
        <div v-if="cut == index" @click="close(index)">关闭</div>
        <img :src="item.imgag" alt="" />
      </div>
    </div>

    <div class="app-link">
      <div class="app-img">
        <img
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
          alt=""
        />
      </div>
      <div class="app-title">
        <p>下载稀土掘金APP</p>
        <p>一个帮助开发者成长的社区</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cut: "-1",
      advertisinglist: [
        {
          imgag:
            "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8eeabe9914c5403088d45326638209e9~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
        },
        {
          imgag:
            "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8eeabe9914c5403088d45326638209e9~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
        },
      ],
    };
  },
  methods: {
    mous(index) {
      this.cut = index;
    },
    close(index) {
      this.advertisinglist.splice(index, 1);
      this.cut = -1;
    },
  },
};
</script>

<style lang="scss" scoped>
.advertising {
  > div {
    position: relative;
    margin-top: 16px;

    img {
      width: 240px;
      height: 200px;
    }
    > div {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
.top {
  background: #fff;
  display: flex;
  .top_left {
    flex: 5;
    padding: 0.8rem;
    h1 {
      color: #1d2129;
      font-size: 16px;
      font-weight: 600;
      height: 16px;
     
 
    line-height: 24px;
    }
    p {
      color: #8a919f;
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
    }
  }
  .top_right {
    flex: 4;
    display: flex;
    align-items: center;
    // justify-content: center;
    div {
      border-radius: 4px;
      height: 36px;
      width: 74px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(30, 128, 255, 0.3);
      background-color: rgba(30, 128, 255, 0.05);
      span {
        color: #1e80ff;
        font-size: 14px;
        font-weight: 400;
        white-space: nowrap;
      }
    }
    div:hover {
      background-color: rgba(1, 42, 96, 0.05);
    }
  }
}
.app-link {
    margin-top:16px ;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: #fff;
  .app-img {
    > img {
      margin-right: 16px;

      width: 3rem;
      height: 3rem;
    }
  }
  .app-title {
    p:nth-child(1) {
      font-weight: 500;
      font-size: 14px;
  
      color: #1d2129;
    }
    p:nth-child(2) {
      margin-top: 0.5rem;
      font-size: 12px;
  
      color: #86909c;
    }
  }
}
</style>