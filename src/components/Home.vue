<template>
  <!--主页面显示-->
  <div id="home" class="container">
    <!--左侧页面切换按钮-->
    <div class="left-container">
      <ul class="navbar-nav ml-auto">  <!--左侧主页信息展示-->
        <li  @click="selectedindex = 1" :class="{'active': selectedindex === 1}"><router-link to="UserInfo" class="nav-link" >用户信息</router-link></li>
        <li  @click="selectedindex = 2" :class="{'active': selectedindex === 2}"><router-link to="QueryPage" class="nav-link" >查询诗词</router-link></li>
        <li  @click="selectedindex = 3" :class="{'active': selectedindex === 3}"><router-link to="PoemList" class="nav-link" >诗词列表</router-link></li>
        <li  @click="selectedindex = 4" :class="{'active': selectedindex === 4}"><router-link to="CheckPage" class="nav-link" >审核界面</router-link></li>
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


<script>
  export default {
    data() {
      return {
        leftItem: ["个人", "搜索", "诗词", "审核"],
        selectedindex: 1,
      }
    },

    methods: {
      // setClass: function () {
      //   let li = $('.navbar-nav li');
      //   let length = li.length;
      //   // 设置每个li的index
      //   for (let i = 0; i < length; i++) {
      //     li[i].index = i;
      //     li[i].classList.remove("active");
      //   }
      //   for (let i = 0; i < length; i++) {
      //     li[i].onclick = function () {
      //       this.classList.add("active");
      //     }
      //   }
      //
      // }
    }
  }
</script>

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
    width: 60px;
    height: 100%;
    white-space: nowrap;
    background-color: #2c3e50;
  }
  .left-container ul li{
    background-color: #2c3e50;
    border-bottom: 1px solid #99a9bf;
    border-top: 1px solid #d7eaec;
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    line-height: 22px;
    text-align: center;
    padding: 8px;
    white-space:normal;
    word-break : break-all;
    word-wrap: break-word;
    a{
      color: #ececec;
    }
  }

  .left-container ul .active{
    background-color: #ebebeb;
    a{
      color: #404a59;
    }
  }

  .center-container{
    background: #ffffff;
    width: 15%;
    min-width: 200px;
    height: 100%;
    background:url('../assets/background1.png') no-repeat -25px -40px;
  }
  .right-container{
    background: #e6edf2;
    flex:1;
    height: 100%;
  }
</style>
