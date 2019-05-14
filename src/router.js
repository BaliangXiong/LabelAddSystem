import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

//异步加载组件
const Login = () => import('@/components/Login')
const Register = () => import('@/components/Register')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
