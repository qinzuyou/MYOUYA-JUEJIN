<template>
  <div class="box">
    <div class="atitle">
      <input type="text" v-model.lazy="articletitle"  placeholder="请输入文章标题...">
      <button @click="tj" class="publish-article ">确认发布 </button>
    
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
      isClient: false,
      articletitle:"",
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
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link', 'image', 'video'],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ["clean"],
          ],
        },
      },
    };
  },
  mounted() {
    console.log("app init, my quill insrance object is:", this.myQuillEditor);
    // setTimeout(() => {
    //   this.content = 'i am changed'
    // }, 3000)
    if (process.client) {
      const { quillEditor } = require("vue-quill-editor");

      this.$options.components = { quillEditor };
   
      this.isClient = true;
    }
  },
  methods: {
    tj() {
      console.log(this.content);
    },
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      for (var i = 0; i < 20; i++) {
        this.content += "<p><br /></p>";
      }
    },
    onEditorChange({ editor, html, text }) {},
  },
};
</script>
    <style lang="scss"  scoped>
    .atitle{
  width: 100%;
  height: 63px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top:61px ;
  button{
    
    height: 33px;
    padding: 0 10px;
    
  }
  input{
    font-size: 24px;
    font-weight: 500;
    width: 80%;
  

    
    height: 33px;
    padding: 0 20px;

    border: 0;  // 去除未选中状态边框
    outline: none; // 去除选中状态边框
    background-color: rgba(0, 0, 0, 0);// 透明背景
  }

}
.container {
  width: 100%;
  margin: 0 0 0 20px;
  position: fixed;
   top:123px;
   height: 100%;
   right: 0;
 

//   padding: 20px 0px;
  background-color: #ffffff;

  ::v-deep .ql-toolbar.ql-snow {
  
    
  }
  ::v-deep .quill-editor {

    height: 100%;
    // background: #ccc;

 
  }
  ::v-deep .ql-container{

  }
  ::v-deep .ql-editor ol, .ql-editor ul {
  
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
.publish-article:hover{
    background: #0967c5;
}
</style>
    
    