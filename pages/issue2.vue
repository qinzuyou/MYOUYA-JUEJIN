<template>
  <div class="box">
    <div class="atitle">
      <input
        type="text"
        v-model.lazy="articletitle"
        placeholder="请输入文章标题..."
      />
      <button @click="articlessubmit" class="publish-article">确认发布</button>
    </div>
    <div class="select-title"> 
      <p>文章类型:</p>
	<div class="select">
		<select name="cars" v-model="newarticletype" @change="newtype">

			<option  v-for="(item,index) of articletype" :key="index"  :value="item.typename">{{item.typename}}</option>
      
			
		</select>
	</div>
    </div>
    <section class="container">
      <quill-editor
        v-if="isClient"
        v-model.lazy="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange($event)"
      >
      </quill-editor>
      <!-- <div>
        <input
          type="button"
          class="publish-article"
          @click="tj"
          value="提交短文"
        />
      </div> -->
    </section>

    <div class="catalogue">
      <p class="cat-title">目录</p>
      <ul>
        <li
          v-for="(item, index) of catalist"
          :key="index"
          v-html="item.outerHTML"
        ></li>
      </ul>
    </div>
  </div>
</template>
    
    
    <script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "@/assets/css/editor.css";

export default {
  data() {
    return {
      newarticletype:'',
      articletype:[],
      catalist: [],
      data: [
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
      isClient: false,

      articletitle: "",
      content: "<p>开始你的短文书写 . . .</p><p> -  - </p>",
      editorOption: {
        // some quill options
        modules: {
          // toolbar: true
          toolbar: [
            //    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            //   ['bold', 'italic', 'underline', 'strike'],
            //   ['blockquote', 'code-block']
            //   [{ 'font': [] }],
            //   [{ 'align': [] }],
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, true] }],
            ["link", "image", "video"],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ["clean"],
          ],
        },
      },
    };
  },
 async asyncData($axios){
  // const articletype = await $axios.$get('https://6u371q5715.zicp.fun/article/types');
  const articletype =  await $axios.$Api.getarticletypes().then(data=>{
    console.log(data,666)
    return data.respond.data
  }).catch(err=>{
    console.log('请求失败')
  })
    console.log(articletype,66564545646)
    console.log()
      return{
        articletype:articletype,
        newarticletype:articletype[0].typename
      }
  },
  mounted() {
    console.log("app init, my quill insrance object is:", this.myQuillEditor);
    // setTimeout(() => {
    //   this.content = 'i am changed'
    // }, 3000)
    if (process.client) {
      const { quillEditor } = require("vue-quill-editor");

      const { Button } = require("element-ui");

      this.$options.components = { quillEditor, Button };
      console.log(this.$options);

      this.isClient = true;
    }
  },
  methods: {
    newtype(){
      console.log(this.newarticletype)
    },
  

     async articlessubmit(){

        if(this.content==''){
          alert("文章内容不能为空")
          return
        }else if(this.articletitle==''){
          alert("文章标题不能为空")
          return
        }else{

            
        const data={
          author:this.$store.state.user.userInfo.account,
          content:this.content,
          title:this.articletitle,
          type:this.newarticletype
        }




         const res =  await this.$Api.postpublish(data)

         if(res.respond.reason.code==200){


              this.content=''
              this.articletitle=''
            alert("恭喜你发表成功")
         }

         console.log(res)
         const article= await this.$Api.getarticleselect()
         console.log(article)

        }



       
      },
    tj() {
      // console.log(this.content);
      //  console.log(this.toTree(this.data))
      let val = document.getElementsByClassName("ql-editor")[0];
      var aLi = val.childNodes;
      console.log(val);
      console.log(aLi);
      let titlelist = ["H1", "H2", "H3", "H4", "H5", "H6"];

      let newtlist = [];
      console.log(aLi[0].nodeName);
      console.log(aLi[0].nodeName == titlelist[0]);
      for (let i = 0; i < aLi.length; i++) {
        for (let j = 0; j < titlelist.length; j++) {
          if (aLi[i].nodeName == titlelist[j]) {
            newtlist.push(aLi[i]);
          }
        }
      }

      this.catalist = newtlist;

      console.log(newtlist);
    },
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // for (var i = 0; i < 20; i++) {
      //   this.content += "<p><br /></p>";
      // }
    },
    onEditorChange({ editor, html, text }) {
      // console.log(html);
      this.tj();
      
    },

  },
};
</script>
    <style lang="scss"  scoped>
    .select-title{
      display: flex;
      padding: 20px;
      // width: 100%;
      background: #fff;
      padding-left:80px ;
      align-items: center;
      .select{
       margin-left:20px ;
        select{
          width: 100px;
          height: 30px;
          option{
            padding: 20px;
          }
        }
        select:hover{
          border: solid 1px #0967c5;
          box-shadow:0px 0px 2px #8ebae6;
        }
      }

   
    }
.atitle {
  width: 100%;
  height: 63px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  

  button {
    height: 33px;
    padding: 0 10px;
  }
  input {
    font-size: 24px;
    font-weight: 500;
    width: 80%;

    height: 33px;
    padding: 0 20px;

    border: 0; // 去除未选中状态边框
    outline: none; // 去除选中状态边框
    background-color: rgba(0, 0, 0, 0); // 透明背景
  }
}

.catalogue {
  position: fixed;
  width: 15%;
  height: 100%;
  right: 0;
  background: #fff;
  ul {
    padding: 2rem;
  }

  li {
    ::v-deep h1 {
      font-size: 14px;
      color: #959da5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    ::v-deep h2 {
      padding-left: 20px;
      font-size: 14px;
      color: #959da5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    ::v-deep h3 {
      padding-left: 40px;
      font-size: 14px;
      color: #959da5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    ::v-deep h4 {
      padding-left: 60px;
      font-size: 14px;
      color: #959da5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    ::v-deep h5 {
      padding-left: 80px;
      font-size: 14px;
      color: #959da5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    ::v-deep h6 {
      padding-left: 100px;
      font-size: 14px;
      color: #959da5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .cat-title {
    text-align: center;
    height: 41px;
    line-height: 41px;
  }
}
.container {
  width: 85%;

  // margin: 0 0 0 20px;
  position: fixed;
  top: 134px;
  height: 660px;
  left: 0;
  bottom: 0px;
  margin-bottom:100px ;

  //   padding: 20px 0px;
  background-color: #f6f6f6;

  ::v-deep .ql-toolbar.ql-snow {
  }
  ::v-deep .quill-editor {
    height: 100%;
    // background: #ccc;
  }
  ::v-deep .ql-container {
  }
  ::v-deep .ql-editor ol,
  .ql-editor ul {
  }
}

.title {
  padding-bottom: 20px;
  background-color: transparent;
}
.title-box {
  height: 4rem;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}
.publish-article {
  margin-top: 20px;
  background-color: $type-bg;
  color: #ffffff;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
}
.publish-article:hover {
  background: #0967c5;
}

</style>
    
    