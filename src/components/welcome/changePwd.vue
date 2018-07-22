<template>
  <div class="container">
    <el-form :model="changePwdForm" :rules="rules" label-position="left"  label-width="70px">
      <el-form-item prop="password" label="新密码">
            <el-input v-model="changePwdForm.password" type="password" placeholder="请输入你的昵称"></el-input>
      </el-form-item>
      <el-form-item prop="password2" label="确认密码">
            <el-input v-model="changePwdForm.password2" type="password" placeholder="请输入6位以上的密码"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
            <el-input v-model="changePwdForm.email" type="email" placeholder="请输入您的常用邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="验证码">
            <el-input v-model="changePwdForm.code" placeholder="请输入验证码">
              <template slot="append">
                <el-button>获取验证码</el-button>
              </template>
            </el-input>
      </el-form-item>
    </el-form>
    <div class="changePwd-foot">
      <div class="changePwd-btn">
        <el-button size="medium" type="danger">修改密码</el-button>
      </div>
      <div class="changePwd-info" style="padding-top:20px;">
        改变主意，直接 <a href="javascript:void(0)" @click="jump">登录</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      let checkPwd = (rule, value, callback)=>{
        if(value !== this.changePwdForm.password){
          callback(new Error('两次密码不一致'));
        }else if(value == ''){
          callback(new Error('请再次输入密码'));
        }else{
          callback();
        }
      }
      return {
        changePwdForm:{
          password:'',
          password2:'',
          email:'',
          code:''
        },
        rules:{
          password:[
            {required:true,message:'请输入正确的密码',trigger: 'blur'},
            { min:6,max:16,message:'请输入正确的密码',trigger: 'blur'}
          ],
          password2:[
            { validator: checkPwd, trigger: 'blur' },
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
    .changePwd-foot{
      .changePwd-info{
        font-size: 15px;
        text-align: center;
        padding-bottom: 20px;
        a{
          color: #fc8d59;
        }
      }
      .changePwd-btn{
        width: 100%;
        text-align: center;
      }
    }
  }
</style>