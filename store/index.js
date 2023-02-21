//主模块
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)
export const state=()=>({
    bNav:true,
    bLoading:false
});

//mutations  
export const mutations = {

    cutloding(state,data){
        state.bNav=data
    },
 
    M_UPDATE_NAV(state,payload){
        state.bNav = payload;
    },
    M_UPADTE_LOADING(state,payload){
        state.bLoading = payload
    }
}



//actions
//服务端运行的钩子nuxtServerInit
export const actions ={                                                                   
    nuxtServerInit(store,context){
//初始化东西到store当中
console.log('nuxtServerInit')

    }
}

//getters
export const getters ={
    getNav(state){
        return state.bNav?'显示':'隐藏'
    }
}