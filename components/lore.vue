<template>
  <div class="lore">
    <div class="lore-top">
      <div @click="login" :class="{lrtop:cut==1}">登录</div>
      <div @click="reg" :class="{lrtop:cut==2}">注册</div>
    </div>
    <div class="lore-content">
      <div style="margin: 10px"></div>
      <div class="login" v-if="cut == 1">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="loginfrom"
          element-loading-text="登录中~"
          v-loading="loading"
        >
          <el-form-item label="账号">
            <el-input
              v-model="loginfrom.account"
              placeholder="请输入账号/邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="loginfrom.password"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="loginsubmit()"
              >立即登录</el-button
            >
            <el-button @click="logincz">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="reg" v-else>
        <el-form
          class="lgfrom"
          :label-position="labelPosition"
          element-loading-text="注册中~"
          v-loading="loading"
          label-width="60px"
          :model="regfrom"
        >
          <el-form-item label="账号">
            <el-input
              v-model="regfrom.account"
              placeholder="请输入账号/邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="regfrom.password"
              placeholder="请输入密码"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input
              v-model="regfrom.nickname"
              placeholder="请输入昵称"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <div class="toux">
              <img :src="imageurl || newimg" alt="" />
            </div>
            <input type="file" @change="uppic" />
          </el-form-item>
          <el-form-item label="爱好">
            <el-input
              v-model="regfrom.antistop"
              placeholder="请输入爱好"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">立即注册</el-button>
            <el-button @click="regcz">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Store } from "vuex";

export default {
  data() {
    return {
   
      newimg:
        "https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5070639578~100x100.awebp",
      loading: false,
      imageurl: "",
      cut: 1,
      labelPosition: "right",
      imgfile: "",
      regfrom: {
        account: "",
        password: "",
        nickname: "",
        antistop: "",
        profile: "",
      },
      loginfrom: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    logincz(){
      this.loginfrom.account=''
      this.loginfrom.password=''
    },
    regcz(){
      this.regfrom.account=''
      this.regfrom.antistop=''

      this.regfrom.password=''

      this.regfrom.nickname=''


      this.imageurl=''
    },
    login() {
      this.cut = 1;
   
    },
    reg() {
      this.cut = 2;
     
    },
    submitForm() {
      if (this.regfrom.account == "") {
        this.$message({ type: "info", message: "请输入账号 " });
        return;
      } else if (this.regfrom.password == "") {
        this.$message({ type: "info", message: "请输入密码 " });
        return;
      } else if (this.regfrom.nickname == "") {
        this.$message({ type: "info", message: "请输入昵称 " });
      } else if (this.regfrom.antistop == "") {
        this.$message({ type: "info", message: "请输入爱好 " });
      } else if (this.imgfile == "") {
        this.$message({ type: "info", message: "请选择头像 " });
      } else {
        let user = new FormData();

        user.append("account", this.regfrom.account);
        user.append("password", this.regfrom.password);
        user.append("nickname", this.regfrom.nickname);
        user.append("antistop", this.regfrom.antistop);
        user.append("profile", this.imgfile);

        console.log(user, user.get("profile"), 11111111666);
        this.loading = true;

        // const res = this.$Api
        //   .postForm(user)
        //   .then((res) => {
        //     console.log(res, 11111122);
        //     this.$message({ type: "info", message: "注册成功 " });
        //     this.loading = false;
        //   })
        //   .catch((err) => {
        //     console.log(err, 56156156);
        //     this.$message({ type: "info", message: "注册失败 " });
        //     this.loading = false;
        //   });

        this.$axios({
          url: "http://127.0.0.1:8081/enroll",
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data=" + new Date().getTime(),
          },
          data: user,
        })
          .then((response) => {
            this.loading = false;
            console.log(response);
            if (response.data.respond.reason.code == 200) {
              // res.respond.data.profile =
              // //   "http://127.0.0.1:8081" + res.respond.data.profile;
              // // this.$store.commit("user/setUserInfo", res.respond);

              this.$message({ type: "info", message: "注册成功" });

              let logindata = {
                account: user.get("account"),
                password: user.get("password"),
              };

              this.$Api
                .postLogin(logindata)
                .then((res) => {
                  this.$message({ type: "info", message: "登录成功 " });
                  console.log(res, 11111122);
                  this.loading = false;
                  res.respond.data.profile =
                    "http://127.0.0.1:8081" + res.respond.data.profile;
                  this.$store.commit("user/setUserInfo", res.respond);

                  console.log(this.$store.state.user);
                  this.$parent.mdshow();
                  this.$parent.loginshows();
                  this.$parent.getuser();
                })
                .catch((err) => {
                  console.log(err, 56156156);
                  this.$message({ type: "info", message: "登录失败 " });
                  this.loading = false;
                });
            } else {
              this.$message({
                type: "info",
                message: response.data.respond.reason.message,
              });
            }
          })
          .catch((error) => {
            console.log(error, this.loading);
            this.loading = false;
            this.$message({ type: "info", message: "注册失败" });
          });
      }
    },

    async loginsubmit() {
      if (this.loginfrom.account == "") {
        this.$message({ type: "info", message: "请输入账号 " });
        return;
      } else if (this.loginfrom.password == "") {
        this.$message({ type: "info", message: "请输入密码 " });
        return;
      } else {
        const data = this.loginfrom;

        this.loading = true;

        const res = await this.$Api
          .postLogin(data)
          .then((res) => {
            console.log(res, 11111122);
            if (res.respond.reason.code == 200) {
              this.$message({ type: "info", message: "登录成功 " });
              this.loading = false;
              res.respond.data.profile =
                "http://127.0.0.1:8081" + res.respond.data.profile;
              this.$store.commit("user/setUserInfo", res.respond);

              console.log(this.$store.state.user);
              this.$parent.mdshow();
              this.$parent.loginshows();
              this.$parent.getuser();
            } else {
              this.loading = false;
              this.$message({
                type: "info",
                message: res.respond.reason.message,
              });
            }
          })
          .catch((err) => {
            console.log(err, 56156156);
            this.$message({ type: "info", message: "登录失败 " });
            this.loading = false;
          });
      }

      // try{
      //   this.$message({ type: "info", message: "登录成功" });
      // }catch(err){
      //   this.$message({ type: "info", message: "登录失败 "})
      //   console.log(err)
      // }

      // if (res.respond.reason.code==200) {
      //   kg=false
      //   this.$message({ type: "info", message: "登录成功" });
      //   res.respond.data.profile="https://6u371q5715.zicp.fun"+res.respond.data.profile
      //   this.$store.commit("user/setUserInfo",res.respond);

      //     console.log(this.$store.state.user)
      //     this.$parent.mdshow()
      //     this.$parent.loginshows()
      //     this.$parent.getuser()
      //   console.log("登录成功");
      // }else{

      //   this.$message({ type: "info", message: "登录失败" });
      // }
    },

    uppic(e) {
      console.log(e);
      let file = e.target.files[0];
      console.log(file);
      this.imageurl = URL.createObjectURL(file);
      console.log(this.imageurl);

      this.imgfile = file;

      // var picdata = new FormData();
      // picdata.append('file',file,file.name);
      // console.log(picdata);
      // this.regfrom.profile=picdata
      // console.log(picdata.get("file"))
    },
  },
};
</script>

<style lang="scss" scoped>
.toux {
  img {
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
.lrtop{
  color: $type-bg;
}
.lore-content {
  padding: 1rem;
}
</style>