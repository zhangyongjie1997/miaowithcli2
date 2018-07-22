<template>
  <div class="container">
    <el-form :model="registerForm" :rules="rules" label-position="left"  label-width="70px">
      <el-form-item prop="name" label="昵称">
            <el-input v-model="registerForm.name" placeholder="请输入你的昵称"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
            <el-input v-model="registerForm.password" type="password" placeholder="请输入6位以上的密码"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
            <el-input v-model="registerForm.email" type="email" placeholder="请输入您的常用邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="验证码">
            <el-input v-model="registerForm.code" placeholder="请输入验证码">
              <template slot="append">
                <el-button>获取验证码</el-button>
              </template>
            </el-input>
      </el-form-item>
    </el-form>
    <div class="register-foot">
      <div class="register-info">
        点击注册账号表示同意<a href="javascript:void(0)">服务条款</a>和<a href="javascript:void(0)">隐私条款</a>
      </div>
      <div class="register-btn">
        <el-button size="medium" type="danger">立即注册</el-button>
      </div>
      <div class="register-info" style="padding-top:20px;">
        已有账号，立即 <a href="javascript:void(0)" @click="jump">登录</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        registerForm:{
          name:'',
          password:'',
          email:'',
          code:''
        },
        rules:{
          name:[
            {required:true,message:'请输入正确的昵称',trigger: 'blur'},
            { min:3,max:16,message:'请输入正确的昵称',trigger: 'blur'}
          ],
          password:[
            {required:true,message:'请输入正确的密码',trigger: 'blur'},
            { min:6,max:16,message:'请输入正确的密码',trigger: 'blur'}
          ],
          email:[
            {required:true,message:'请输入完整的邮箱地址',trigger: 'blur'},
          ],
          code:[
            {required:true,message:'请输入验证码',trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      jump(){
        this.$emit('jump','login');
      }
    }
  }
</script>

<style scoped lang='less'>
  .container {
    padding-top: 20px;
    width: 100%;
    height: 200px;
    color: #555;
    .register-foot{
      .register-info{
        font-size: 14px;
        text-align: center;
        padding-bottom: 20px;
        a{
          color: #fc8d59;
        }
      }
      .register-btn{
        width: 100%;
        text-align: center;
      }
    }
  }
</style>