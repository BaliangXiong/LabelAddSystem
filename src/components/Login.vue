<template>
	<div class="register_tab">
		<div class="register">
			<!--登录表单-->
			<Form :model="loginForm" status-icon :rules="rules" ref="loginForm" :label-width="100" class="demo-ruleForm">
				<router-link :to="{name:'Register'}" class="nav-link">注册</router-link>
				<h1 class="login_title">唐宋文人数据可视化系统</h1>

				<FormItem label="用户名" prop="username">
					<Input v-model="loginForm.username"></Input>
				</FormItem>

				<FormItem label="密码" prop="password">
					<Input type="password" v-model="loginForm.password" autocomplete="off"></Input>
				</FormItem>

				<FormItem>
					<Button type="primary" @click="submitForm('loginForm')">登录</Button>
					<Button @click="resetForm('loginForm')">清空</Button>
				</FormItem>
			</Form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          let serverUrl = '/api/'  //本地调试时
          this.$axios.post("checkLogin",{
            username:_this.loginForm.username,
						password:_this.loginForm.password
          })
						.then(response =>{
						  if(response.data.length){
								_this.$store.commit('SAVE_USERINFO',response.data[0])
                _this.$Message.success('恭喜你，登陆成功!')

                //跳转到首页
								_this.$router.push('/')
							} else {
                this.$Message.error('登录失败，请确认用户名密码！');
							}
						})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register_tab{
	width: 100%;
	height: 100%;
}
.register{
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.login_title{
	font-size: 30px;
	/*display: flex;*/
	justify-content: center;
	align-items: center;
	margin: 80px -30px 80px 0;
}
.nav-link{
	font-size: 20px;
	color: #2db7f5;
	float: right;
	margin: 0 -200px 0 0;
}

</style>
