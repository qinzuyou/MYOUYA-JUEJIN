<template>
  <div>
 

    <div class="article">
      <ul class="give">
      <li>
        <div>{{articledata.give || 0}}</div>
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


      <div class="centent" >
        <div class="title">
          {{articledata.title}}
        </div>

        <div class="author">
          <img
            :src="userdata.profile"
            alt=""
          />
          <div class="author-left">
            <div class="name">
              <span>{{userdata.nickname}}</span>
              <img
                src="../assets/img/lv-5.png"
                alt=""
              />
            </div>
            <div class="name-bottom">
              <span>{{articledata.releasetime | formatDate('yyyy年MM月dd日')}}</span>
              <span>·</span>
              <span>阅读</span>
              <span>{{articledata.hits || 0}}</span>
            </div>

            <div class="ssgz">
              <el-button type="primary" plain>  <i class="el-icon-plus"></i>关注</el-button>
            </div>
          </div>
        </div>

        <!-- <h1>文章id{{ articledata.id}}</h1> -->

        <div class="contentbox"  v-html="articledata.content" ref="aContent">
          
        </div>
      </div>
      <div class="article-right">
        <div class="broadside-top">
          <div class="author2">
            <img
            :src="userdata.profile"
              alt=""
            />
            <div class="author-left">
              <div class="name">
                <span>{{userdata.account}}</span>
                <img
                src="../assets/img/lv-5.png"
                  alt=""
                />
              </div>
              <div class="name-bottom">
                <span>{{userdata.antistop}}</span>
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
                <span>{{ item.give || 0}}点赞</span><span>·</span
                ><span>{{ item.pl  || 0}}评论</span>
              </p>
            </li>
          </ul>
        </div>

        <div class="catalogue">
          <p class="ca-title">目录</p>
          <!-- <ul>
            <li
              class="ca-li"
              v-for="(item, index) of catalist"
              :key="index"
              @click="cutca(index)"
              :class="{ cutcas: cutcas == index }"
            >
              <a href="javaScript:void(0);">{{ item.title }}</a>
            </li>
          </ul> -->

          <el-tree
            :data="tocData2"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </div>

        <div class="next-article">
          <div class="ne-top">
            <p class="ne-title" @click="nextacrticle(articledata.id)">下一篇</p>
            <div><i class="el-icon-s-unfold"></i></div>
          </div>
          <div class="next-next">
            <p v-if="nextw" @click="toarticle(nextw.id)">{{nextw.title}}</p>
            <p v-else>没有更多了</p>
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
     
      nextw:'',
      defaultProps: {
        children: "children",
        label: "label",
      },
      tocData2: [],
      tocData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
   
      ],

      cutcas: "0",
      aticleid: "",
      corrlist: [
        { title: "秃了秃了", dz: 14, pl: 18 },
        { title: "秃了秃了", dz: 14, pl: 18 },
      ],
      catalist: [{ title: "酷酷酷" }, { title: "酷酷酷" }, { title: "酷酷酷" }],
    };
  },
  methods: {

    toarticle(id) {
    let{href}=  this.$router.resolve({
        path: "/article",
        query: {
          id: id,
        },
      });

      window.open(href, "_blank")
      // setTimeout(function () {
      //    window.location.reload();
      //   }, 100);
    },


  async  alllist(){
      let params={
      condition:{
          type:this.articledata.type
        }, 
   
    }
    const res =await this.$Api.getarticleselect(params).then(data=>{
      // console.log(data)
      return data.respond.data
    }).catch(data=>{
      console.log("请求失败")
    })

    return res

    },



   async nextacrticle(){
    let id = this.$route.query.id
    let res = await this.alllist()

    let newindex =res.map((item,index)=>{
      if(item.id==id){
        return index
      }else{
        return
      }
    })
  let cnewindex=0


    for(let i=0;i<newindex.length;i++){
      if(newindex[i]){
        cnewindex=newindex[i]
      }
    }
    
    return cnewindex

 
     },

    cutca(index) {
      this.cutcas = index;
    },
    handleNodeClick(data) {
      console.log(data);
    },

    toTree(data) {
      // 删除 所有 children,以防止多次调用
      data.forEach(function (item) {
        delete item.children;
      });

      // 将数据存储为 以 id 为 KEY 的 map 索引数据列
      var map = {};
      data.forEach(function (item) {
        map[item.id] = item;
      });
      var val = [];
      data.forEach(function (item) {
        // 以当前遍历项的pid,去map对象中找到索引的id
        var parent = map[item.p_id];
        // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
          val.push(item);
        }
      });
      console.log(val);
      return val;
    },

    /**
     * 生成目录
     * */
    makeToc() {
      if (process.client) {
        this.$nextTick(() => {
          // 定义参与目录生成的标签
          const tocTags = ["H1", "H2", "H3", "H4", "H5", "H6"];

          // 目录树结果
          const tocArr = [];

          // 获取所有标题标签
          const headDoms = Array.from(this.$refs.aContent.childNodes).filter(
            (item) => tocTags.includes(item.tagName)
          );

          // 遍历标题标签
          headDoms.forEach((item, index, arr) => {
            // 给标题添加id
            item.id = `h-${index + 1}`;
            // 获取当前节点前面的节点
            let prevs = arr.filter((i, j) => j < index);
            // 过滤前面的节点为合理节点
            // 如 h3节点前  只能为 h1 h2 h3
            prevs = prevs.filter((i) =>
              tocTags
                .filter(
                  (i, j) => j <= tocTags.findIndex((i) => i == item.tagName)
                )
                .includes(i.tagName)
            );
            // 对前面的节点进行排序，距离自身节点近的排在前面
            // 如 div > p > span > img  当前为img
            // 常规获取节点为 [div,p,span,img]
            // 排序后获取节点为 [img,span,p,div]
            prevs = prevs.sort(
              (a, b) => -a.id.replace("h-", "") - b.id.replace("h-", "")
            );
            // 查询距离自身节点最近的不同于当前标签的节点
            const prev = prevs.find((i) => i.tagName != item.tagName);

            tocArr.push({
              id: index + 1, // 抛出id
              tag: item.tagName, // 抛出标签名称
              label: item.innerText, // 抛出标题
              p_id:
                item.tagName == "H1" ? 0 : Number(prev.id.replace("h-", "")), // 抛出父级id
            });
          });

          // 使用上述方法生成树 最后在el-tree的data中使用 tocData即可
          this.tocData2 = this.toTree(tocArr);
        });
      }
    },
  },
  async created() {

    


    this.aticleid = this.$route.query.id;
    console.log(this.articledata,"wz")
    console.log(this.userdata,"wz")
    console.log(await this.nextacrticle(),'nnnnn')

    let nextws= await this.alllist()
    this.corrlist=nextws
  if(nextws[await this.nextacrticle()+1]){
    this.nextw=nextws[await this.nextacrticle()+1]
  }else{
    this.nextw=''
  }
    
  console.log(this.nextw,'ggggg')

  },
  mounted() {
    this.makeToc();
  },

  async asyncData({query,$axios},){
    console.log("文章页",$axios.$get,query,455)

    const articledata = await $axios.$get('http://127.0.0.1:8081/article/select',{
      params:{
          condition:{
         id:query.id
        }, 
        pagination:{
          size:1,
          page:1,
        
        }
        
      }
    }
    )
      .then((data) => {
        console.log(data, "文章页999999", );
        return data.respond.data[0] 
      })
      .catch((data) => {
        console.log("文章亲求失败");
      });


      const userdata = await $axios.$get('http://127.0.0.1:8081/users/select',{
      params:{    
            account:articledata.author,
        
        // pagination:{
        //   size:1,
        //   page:1,
        
        // }
      }
    }
    )
      .then((data2) => {
        console.log(data2, "用户查询999999", );
        return data2.respond.data[0]
      })
      .catch((data2) => {
        console.log("用户查询失败");
      });

      userdata.profile="http://127.0.0.1:8081"+userdata.profile




      return {
        articledata:articledata,
        userdata:userdata

      }
  }
};


</script>

<style lang="scss" scoped>

@media screen and (max-width: 1180px){
.centent{
 
}
.article-right{
  display: none;
}
.article{
  width: 100% !important;
}

.ssgz{
  display: block !important;
}
}
.el-tree {
  overflow: hidden !important;

text-overflow: ellipsis !important;

white-space: nowrap !important; 

}
.report {
  margin-top: 40px;
}
.give {
  position:absolute;
  left: -100px;
  top: 140px;

  .give-bottom::after {
    content: "";
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
      font-size: 0.7rem;
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

    i {
      font-size: 1.7rem;
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
  position: relative;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;

  .ssgz{
      position: absolute;
      right: 0;
      top: 50%;
      display: none;
      button{
        
        width: 70px;
        height: 30px;
        padding: 0;
      }
    }
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
  position: relative;
  display: flex;
  width: 70%;
  margin: 0 auto;
  margin-top: 80px;

  .centent {
    // width: 820px;
    flex: 6;
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
    // width: 300px;
    flex: 1;
  }
}
</style>