import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态
const state={
  userInfo:JSON.parse(sessionStorage.getItem('userInfo')),
  traces:[],
  poetTraces:[],
  tracesInfo:[],
  poemsData:[],
  poemsInfo:[],
  mode:'轨迹'

}

//mutations  操作state
const mutations = {
  SAVE_USERINFO(state,userInfo){

    //把用户信息存入本地存储
    sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
    state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

  },
  setTraces (state,tracesData){
    state.traces = []
    state.tracesInfo = []
    tracesData.forEach(function (value) {
      let {startx,starty,endx,endy} = value
      let {作家,朝代,年份,起始点,目的地省,目的地市县} = value
      state.traces.push([[startx,starty],[endx,endy]])
      let traceInfo = {
        作家,
        朝代,
        年份,
        起始点,
        目的地省,
        目的地市县
      }
      //console.log(traceInfo)
      state.tracesInfo.push(traceInfo)
    })
    // console.log(state.traces)
    //console.log(state.tracesInfo)
  },
  setPTraces (state,tracesData){
    state.poetTraces = []
    state.tracesInfo = []
    tracesData.forEach(function (poet) {
      let poetTrace = []
      poet.forEach(function (value) {
        let {startx,starty,endx,endy} = value
        let {作家,朝代,年份,起始点,目的地省,目的地市县} = value
        poetTrace.push([[startx,starty],[endx,endy]])
        let traceInfo = {
          作家,
          朝代,
          年份,
          起始点,
          目的地省,
          目的地市县
        }
        //console.log(traceInfo)
        state.tracesInfo.push(traceInfo)
      })
      state.poetTraces.push(poetTrace)
    })
    // console.log(state.poetTraces)
    // console.log(state.tracesInfo)
  },
  setPoems(state,poemsData){
    state.poemsData = []
    state.poemsInfo = poemsData
    poemsData.forEach(function (value) {
      state.poemsData.push({
        name: value.地点,
        value: [value.经度,value.纬度,value.count]
      })
    })
    //console.log(JSON.parse(JSON.stringify(state.poemsData)))
  },
  changeMode(state,newMode){
    state.mode = newMode
    console.log(state.mode)
  }

}

const store = new Vuex.Store({
  state,
  mutations
});

export default store
