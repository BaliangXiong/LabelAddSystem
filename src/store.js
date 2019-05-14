import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态
const state={
  userInfo:JSON.parse(sessionStorage.getItem('userInfo'))

}

//mutations  操作state
const mutations = {
  SAVE_USERINFO(state,userInfo){

    //把用户信息存入本地存储
    sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
    state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

  },


}

const store = new Vuex.Store({
  state,
  mutations
});

export default store
