<template>
	<div class="login">
		<!--登录表单-->
		<Form :model="registerForm" status-icon :rules="rules2" ref="registerForm" :label-width="100" class="demo-ruleForm">
			<router-link :to="{name:'Login'}" class="nav-link">登录</router-link>
			<h1 class="login_title">唐宋诗词标签系统</h1>
			<FormItem label="用户名" prop="username">
				<Input v-model="registerForm.username"></Input>
			</FormItem>

			<FormItem label="密码" prop="password">
				<Input type="password" v-model="registerForm.password" autocomplete="off"></Input>
			</FormItem>

			<FormItem label="确认密码" prop="checkPass">
				<Input type="password" v-model="registerForm.checkPass" autocomplete="off"></Input>
			</FormItem>

			<FormItem>
				<Button type="primary" @click="submitForm('registerForm')">提交</Button>
				<Button @click="resetForm('registerForm')">重置</Button>
			</FormItem>
		</Form>
	</div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.checkPass !== '') {
            this.$refs.registerForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        registerForm: {
          username: '',
          password: '',
          checkPass: ''
        },
        rules2: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' },
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this;

            let param = new URLSearchParams();
            param.append('username', _this.registerForm.username);
            param.append('password', _this.registerForm.password);
            this.$axios.post("register",param)
              .then(response =>{
                if(response.data === "success"){
                  _this.$Message.success('恭喜你，注册成功!')

                  //跳转到登录界面
                  _this.$router.push('/Login')
                } else if(response.data === "exist") {
                  this.$Message.error('该用户名已存在！');
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
	.login{
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
