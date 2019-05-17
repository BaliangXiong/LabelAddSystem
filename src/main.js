// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://47.92.251.238:9090//labeladd';
//axios.defaults.baseURL = 'http://localhost:9090//pq';
/*暂时先注释 方便书写*/
/*router.beforeEach((to,from,next) =>{
  if(sessionStorage.getItem('userInfo')){
    next()
  }
  else if(to.path == '/Login' || to.path == '/Register' ){
    next()
  } else{
    alert("还没有登陆，请先登录");
    next('/Login')
  }

})*/
// 我删掉它了哦
// 我删掉它了哦
// 我删掉它了哦
// 我删掉它了哦
//

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
