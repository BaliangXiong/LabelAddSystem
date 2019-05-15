import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    userInfo:JSON.parse(sessionStorage.getItem('userInfo'))
  },
  getters:{

  },
  mutations: {
    SAVE_USERINFO(state,userInfo){

      //把用户信息存入本地存储
      sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
      state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    },
  },
  actions: {

  }
})



//mutations  操作state
const mutations = {
  SAVE_USERINFO(state,userInfo){

    //把用户信息存入本地存储
    sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
    state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

  },
}
