<template>
  <div>
    <ul class="give">
      <li>
        <div>77</div>
        <i class="el-icon-star-on"></i>
      </li>
      <li>
        <i class="el-icon-star-on"></i>
      </li>
      <li>
        <i class="el-icon-star-on"></i>
      </li>
      <li class="give-bottom">
        <i class="el-icon-star-on"></i>
      </li>
      <li class="report">
        <i class="el-icon-star-on"></i>
      </li>
      <li>
        <i class="el-icon-star-on"></i>
      </li>
    </ul>

    <div class="article">
      <div class="centent">
        <div class="title">
          练习时长长达两年半的前端练习生——折腾半生，归来仍是菜鸡🥬🐤
        </div>

        <div class="author">
          <img
            src="https://p3-passport.byteimg.com/img/user-avatar/b6bfc3ccd6d610412b216b9c346ef533~100x100.awebp"
            alt=""
          />
          <div class="author-left">
            <div class="name">
              <span>秃了秃了</span>
              <img
                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png"
                alt=""
              />
            </div>
            <div class="name-bottom">
              <span>2023年02月2日11:00</span>
              <span>·</span>
              <span>阅读</span>
              <span>10000</span>
            </div>
          </div>
        </div>

        <h1>文章id{{ aticleid }}</h1>
      </div>
      <div class="article-right">
        <div class="broadside-top">
          <div class="author2">
            <img
              src="https://p3-passport.byteimg.com/img/user-avatar/b6bfc3ccd6d610412b216b9c346ef533~100x100.awebp"
              alt=""
            />
            <div class="author-left">
              <div class="name">
                <span>秃了秃了</span>
                <img
                  src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png"
                  alt=""
                />
              </div>
              <div class="name-bottom">
                <span>关键字</span>
              </div>
            </div>
          </div>

          <div class="nu">
            <el-button type="primary">关注</el-button>
            <el-button type="primary" plain>私信</el-button>
          </div>
          <div class="sts">
            <div class="sts-top">
              <div class="tub"><i class="el-icon-star-on"></i></div>
              <div class="sts-title">
                <span>获得点赞</span><span>11111</span>
              </div>
            </div>
            <div class="sts-top">
              <div class="tub"><i class="el-icon-star-on"></i></div>
              <div class="sts-title">
                <span>获得点赞</span><span>11111</span>
              </div>
            </div>
          </div>
        </div>
        <div class="advertising">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/sign-in.d6891e5.png"
            alt=""
          />
        </div>

        <div class="correlation qbsy">
          <p class="co-top">相关文章</p>
          <ul>
            <li class="co-li" v-for="(item, index) of corrlist" :key="index">
              <p class="co-title">{{ item.title }}</p>
              <p class="co-p">
                <span>{{ item.dz }}点赞</span><span>·</span
                ><span>{{ item.pl }}评论</span>
              </p>
            </li>
          </ul>
        </div>

        <div class="catalogue">
          <p class="ca-title">目录</p>
          <ul>
            <li
              class="ca-li"
              v-for="(item, index) of catalist"
              :key="index"
              @click="cutca(index)"
              :class="{ cutcas: cutcas == index }"
            >
              <a href="javaScript:void(0);">{{ item.title }}</a>
            </li>
          </ul>
        </div>

        <div class="next-article">
          <div class="ne-top">
            <p class="ne-title">下一篇</p>
            <div><i class="el-icon-s-unfold"></i></div>
          </div>
          <div class="next-next">
            <p>秃秃秃秃秃秃秃秃秃秃秃秃</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cutcas: "0",
      aticleid:'',
      corrlist: [
        { title: "秃了秃了", dz: 14, pl: 18 },
        { title: "秃了秃了", dz: 14, pl: 18 },
      ],
      catalist: [{ title: "酷酷酷" }, { title: "酷酷酷" }, { title: "酷酷酷" }],
    };
  },
  methods: {
    cutca(index) {
      this.cutcas = index;
    },
  },
  created(){
    this.aticleid=this.$route.query.id
  }
};
</script>

<style lang="scss" scoped>
.report{
    margin-top:40px ;
}
.give {
  position: fixed;
  left: 190px;
  top: 140px;
  z-index: 2;
  .give-bottom::after{
   content: '';
   display: block;
   width: 30px;
   height: 1px;
   background: #ccc;
   position: absolute;
   bottom: -20px;
  }
  li {
    > div {
      position: absolute;
      right: -10px;
      top: 0px;
      background: #8a919f;
      background-color: #c2c8d1;
      color: #fff;
      border-radius: 9px;
      width: 25px;
      height: 20px;
      font-size:0.7rem ;
      line-height: 20px;
      text-align: center;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(158, 146, 146);
    position: relative;
    margin-bottom: 1.4rem;
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;
    
    i{
        font-size:1.7rem ;
    }
  }
}

.qbsy {
  border-radius: 4px;
  background: #fff;
  padding: 1.2rem 1rem;
}
.next-article {
  margin-top: 20px;
  border-radius: 4px;
  background: #fff;
  padding: 1.2rem 1rem;
  .next-next {
    font-size: 14px;
    margin-top: 1rem;
    line-height: 22px;
    color: #515767;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .ne-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    > div:hover {
      background: rgb(228, 223, 223);
      border-radius: 4px;
    }
  }
  .ne-title {
    font-size: 16px;
    line-height: 2rem;
    color: #1d2129;
    font-weight: 500;
    // padding-bottom: 0.8rem;
  }
  .ne-title::after {
    content: " ";
    display: block;
    width: 20px;
    position: relative;
    left: 0;
    bottom: 0;
    height: 2px;
    background: rgb(150, 148, 148);
    margin-top: 14px;
  }
}
.cutcas::before {
  content: "";
  position: relative;

  top: 0px;
  left: 0px;
  display: block;
  width: 4px;
  height: 16px;
  background: #1e80ff;
  border-radius: 0 4px 4px 0;
}
.catalogue {
  ul {
    margin-top: 10px;
  }
  margin-top: 20px;
  border-radius: 4px;
  background: #fff;
  padding: 1.2rem 0;
  .ca-li {
    font-size: 0.9rem;

    height: 44px;
    display: flex;
    align-items: center;
    width: 100%;
    a {
      color: #000;

      display: block;
      margin: 0 auto;
      margin: 0 1rem;
      height: 38px;
      line-height: 38px;
      padding: 0 8px;
      width: 100%;
    }
    a:hover {
      background: #eceaea;
      border-radius: 4px;
    }
  }
  .ca-title {
    padding: 0 1rem;
    font-size: 16px;
    line-height: 2rem;
    color: #1d2129;
    font-weight: 500;
    border-bottom: 1px solid #e4e6eb;
    padding-bottom: 0.8rem;
  }
}
.correlation {
  .co-top {
    font-size: 16px;
    line-height: 2rem;
    color: #1d2129;
    font-weight: 500;
    border-bottom: 1px solid #e4e6eb;
    padding-bottom: 0.8rem;
  }
  .co-title {
    line-height: 22px;
    font-size: 0.9rem;
    font-weight: 400;
    color: #252933;
  }
  .co-p {
    color: #8a919f;
    font-weight: 400;
    font-size: 0.9rem;
    margin-top: 6px;
    span:nth-child(2) {
      margin: 0 0.6rem;
    }
  }
  .co-li {
    padding: 1rem 0 0 0;
  }
  .co-li:hover .co-title {
    color: $type-bg;
  }
}
.advertising {
  img {
    width: 300px;
    height: 90px;
    margin-bottom: 20px;
    display: inline-block;
    margin-top: 20px;
  }
}
.sts {
  border-top: solid 2px $juejin-gray-1-1;
  margin-top: 16px;
  .sts-top {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .sts-title {
      font-size: 0.9rem;
      color: #252933;
      font-weight: 400;
      span:nth-child(1) {
        margin: 0 10px;
      }
    }
    .tub {
      span:nth-child(1) {
        margin: 0 4px;
      }
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: rgb(140, 197, 241);
      color: #0d73c1;
      font-size: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.author {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  img {
    flex: 0 0 auto;
    margin-right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  .author-left {
    .name {
      display: flex;
      align-items: center;
      img {
        width: 35px;
        height: 16px;
      }
      span {
        font-size: 1rem;
        display: inline-block;
        vertical-align: top;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .name-bottom {
      font-size: 0.9em;
      color: #8a919f;
      margin-top: 3px;
      line-height: 22px;
      span:nth-child(2) {
        margin: 0 2px;
      }
      span:nth-child(3) {
        margin-right: 1px;
      }
    }
  }
}
.broadside-top {
  border-radius: 4px;
  background: #fff;
  padding: 1.2rem 1rem;

  .nu {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    button {
      border-radius: 4px;
      width: 122px;
      height: 36px;
      font-size: 14px;
    }
  }
}
.author2 {
  display: flex;
  align-items: center;
  img {
    flex: 0 0 auto;
    margin-right: 1rem;
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 50%;
  }
  .author-left {
    .name {
      display: flex;
      align-items: center;
      img {
        width: 35px;
        height: 16px;
      }
      span {
        font-size: 1rem;
        display: inline-block;
        vertical-align: top;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .name-bottom {
      margin-top: 4px;
      font-size: 0.9rem;
      color: #515767;
      font-weight: 400;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.article {
  display: flex;
  width: 1140px;
  margin: 0 auto;
  margin-top: 80px;

  .centent {
    width: 820px;
    margin-right: 20px;
    background: #fff;
    border-radius: 4px 4px 0 0;
    padding: 2rem;
    .title {
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.31;
      color: #252933;
    }
  }
  .article-right {
    width: 300px;
  }
}
</style>