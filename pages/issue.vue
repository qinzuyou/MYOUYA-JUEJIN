<template>
  <div class="issue" style="margin-top: 61px">
    
    <div class="atitle">
      <input type="text" v-model.lazy="articletitle"  placeholder="请输入文章标题...">
      <el-button type="primary" @click="goissue()">确认发布</el-button>
    </div>
 
    <template>
  <div class="editor-box">
    <div
      class="quill-editor"
      :content="content"
      v-quill:myQuillEditor="options"
      ref="myQuillEditor" 
     
      @change="handleEditorChange"
    >
    </div>
  </div>
</template>


  </div>
</template>

<script>

  export default {
    props: {
      // 内容
      content: {
        type: String,
        default: '<h1>122</h1>  '
      },
      // 配置项
      options: {
        type: Object,
        default () {
          return {}
        }
      },
      // 自定义样式
      cusStyle: {
        type: String,
        default: ''
      },
      // 宽度
      toolBarwidth: {
        type: String,
        default: '100%'
      },
      maxLength: {
        type: Number,
        default: 100
      }
    },
    data () {
      return {
        articletitle:"",
        editorOption: {
         
          /* quill options */
          modules: {
            toolbar: [
              // ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
              // // ['blockquote', 'code-block'], //引用，代码块
              // // [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
              // [{ list: 'ordered' }, { list: 'bullet' }], //列表
              // // [{ script: 'sub' }, { script: 'super' }], // 上下标
              // // [{ indent: '-1' }, { indent: '+1' }], // 缩进
              // // [{ direction: 'rtl' }], // 文本方向
              // // [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
              // // [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
              // // [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
              // // [{ font: [] }], //字体
              // // [{ align: [] }], //对齐方式
              // // ['link', 'image', 'video']
              // // ['clean'], //清除字体样式
            ],
          }
        }
      }
    },
    mounted () {
     
      // let quillEditor = document.querySelectorAll('.ql-container')

      // let newArr = Array.from(quillEditor)
      // if (newArr.length < 3) return
      // newArr.forEach(item => {
      //   item.appendChild(this.createSpan())
      // })
      
      this.$nextTick(() => {
        let quill = document.querySelectorAll('.ql-toolbar')
        Array.from(quill).forEach(item => {
          item.style.width = this.toolBarwidth
        })
      })
      
    },
    methods: {


      goissue(){
        console.log(this.content)
      },
      createSpan () {
        let spana = document.createElement('span')
        spana.className = 'suffix-counter'
        let ema = document.createElement('em')
        ema.innerHTML = `${this.textLength}`
        let txt = document.createTextNode(`/${this.maxLength}`)
        spana.appendChild(ema)
        spana.appendChild(txt)
        return spana
      },
      handleEditorFocus (event) {
        // console.log(event);
        // event.enable(true)
        // if (this.textLength >= this.maxLength) {
        //   event.enable(false) // 在获取焦点的时候禁用
        // }
      },
      handleEditorChange (event) {
        // this.textLength = event.text.length - 1
        // if (this.textLength >= this.maxLength) {
        //   event.quill.enable(false)
        //   return
        // }
        console.log(this.$quill)
        this.$emit('change', event)
      }
    }
  }
</script>


<style lang="scss" scoped>
.atitle{
  width: 100%;
  height: 63px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
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
.editor-box {
  background: #fff;
  position:fixed;
  top:222px;
  width:100%;
  right: 0;
  height: 100%;
  v-deep .ql-toolbar.ql-snow {
    width: 100%;
    
  }
  v-deep .ql-editor {
   height: 100%;
   
  }
  v-deep .ql-editor ol, .ql-editor ul {
    padding-left: 0;
  }
 
}
// .ql-toolbar.ql-snow {
//   width: 500px;
// }
// .ql-editor ol, .ql-editor ul {
//   padding-left: 0;
// }

.suffix-counter {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 4px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  color: #ccc;
}

</style>

