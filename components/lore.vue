<template>
  <div class="lore">
    <div class="lore-top">
      <div @click="login">登录</div>
      <div @click="reg">注册</div>
    </div>
    <div class="lore-content">
      <div style="margin: 10px"></div>
      <div class="login" v-if="cut == 1">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="账号">
    <el-input v-model="loginfrom.account"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="loginfrom.password"></el-input>
  </el-form-item>

  <el-form-item>
            <el-button type="primary" @click="loginsubmit()"
              >立即登录</el-button
            >
            <el-button>重置</el-button>
          </el-form-item>

</el-form>
    </div>
      <div class="reg" v-else>
        <el-form
          class="lgfrom"
          :label-position="labelPosition"
          label-width="60px"
          :model="formLabelAlign"
        >
          <el-form-item label="账号">
            <el-input v-model="regfrom.account"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="regfrom.password"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="regfrom.nickname"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <div class="toux">
                <img src="https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5070639578~100x100.awebp" alt="">
            </div>
          </el-form-item>
          <el-form-item label="关键词">
            <el-input v-model="regfrom.antistop[0]"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()"
              >立即注册</el-button
            >
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cut: 1,
      labelPosition: "right",
      regfrom: {
        account: "",
        password: "",
        nickname: "",
        antistop: [1],
        profile: "",
      },
      loginfrom:{
        account:'',
        password:''
        
      }
    };
  },
  methods: {
    login() {
      this.cut = 1;
    },
    reg() {
      this.cut = 2;
    },
    submitForm(){

    },
    loginsubmit(){

    }
  },
};
</script>

<style lang="scss" scoped>
.toux{
    img{
        width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    }
    
}
.lore {
}
.lgfrom {
  width: 360px;
  margin: 0 auto;
}
.lore-top {
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: center;
  div {
    flex: 1;
    text-align: center;
  }
  div:hover {
    color: $type-bg;
  }
}
.lore-content {
  padding: 1rem;
}
</style>