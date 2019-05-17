import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import QueryPage from "./components/QueryPage.vue"
import PoemList from "./components/PoemList.vue"
import UserInfo from "./components/UserInfo.vue"
import CheckPage from "./components/CheckPage.vue"

//异步加载组件
const Login = () => import('@/components/Login')
const Register = () => import('@/components/Register')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/QueryPage',
          name: 'QueryPage',
          component: () => import(/* webpackChunkName: "about" */ './components/QueryPage.vue')
        },
        {
          path: '/PoemList',
          name: 'PoemList',
          component: PoemList
        },
        {
          path: '/UserInfo',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: '/CheckPage',
          name: 'CheckPage',
          component: CheckPage
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },

  ],
  mode:"hash"
})
