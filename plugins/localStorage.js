import createPersistedState from 'vuex-persistedstate'

console.log("locals")
export default ({ store }) => {
    window.onNuxtReady(() => {
        createPersistedState({
            key: "store", // 读取本地存储的数据到store
           
            
        })(store)
    })
}
