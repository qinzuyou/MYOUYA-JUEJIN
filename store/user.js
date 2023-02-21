export const state = () => ({
  // err: 1,
  // msg: '未登录',
  // token: '',
  // data: {name:111}
  userInfo: {},
  token:''
})

export const mutations = {
  // M_UPDATE_USER(user, payload) {
  //   user.err = payload.err;
  //   user.msg = payload.msg;
  //   user.data = payload.data;
  //   user.token = payload.token;
  // }
  setUserInfo(state,data) {
    // 每个 mutation 函数都可以接受到两个参数
    // 第一个是 state 对象本身
    // 第二是调用函数时额外添加的数据
    // 这里需要做的就是改变 state 数据
    // 这样外面调用这个函数, 并且传入数据, 即可改变当前的 userInfo 属性
    state.userInfo = data.data
    state.token=data.token
},
  logOut(state,data){
    state.userInfo ={}
    state.token=''
  }

}

export const actions = {
  A_UPDATE_USER({
    commit,
    user
  }, payload) {
    //异步业务
    commit('M_UPDATE_USER', payload)
  }
}
