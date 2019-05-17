<template>
  <!--主页面显示-->
  <div id="home" class="container">
    <!--左侧页面切换按钮-->
    <div class="left-container">
      <ul class="navbar-nav ml-auto">  <!--左侧主页信息展示-->
        <li  @click="setClass()" class="active"><router-link to="UserInfo" class="nav-link" >个人</router-link></li>
        <li  @click="setClass()"><router-link to="QueryPage" class="nav-link" >查询</router-link></li>
        <li  @click="setClass()"><router-link to="PoemList" class="nav-link" >诗词</router-link></li>
        <li  @click="setClass()"><router-link to="CheckPage" class="nav-link" >审核</router-link></li>
      </ul>
    </div>
    <!--中间诗词展示界面-->
    <div class="center-container">
      <router-view></router-view>
    </div>
    <!--标签页面-->
    <div class="right-container">
      主页面
    </div>
  </div>
</template>

<style lang="scss">
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  /* pages/category/index.wxss */
  .container{
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .left-container{
    background: #f8f8f8;
    width: 80px;
    height: 100%;
    white-space: nowrap;
  }
  .left-container ul li{
    font-size: 16px;
    color: #333;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .active,
  .active a{
    color:red;
    background: #f0fcff;
  }

  .center-container{
    background: #f0fcff;
    width: 200px;
    height: 100%;
  }
  .right-container{
    background: #fff;
    flex:1;
    height: 100%;
  }
</style>
<script>
  import $ from 'jquery'
  export default {
    data() {
      return {
        leftItem: ["个人", "搜索", "诗词", "审核"],
      }
    },

    methods: {
      setClass: function () {
        let li = $('.navbar-nav li');
        let length = li.length;
        // 设置每个li的index
        for (let i = 0; i < length; i++) {
          li[i].index = i;
          li[i].classList.remove("active");
        }
        for (let i = 0; i < length; i++) {
          li[i].onclick = function () {
            this.classList.add("active");
          }
        }

      }
    }
  }
</script>
