<template>
  <div class="main">
    <div class="title">
      <img src="../assets/register-title_06.jpg" width="70%">
      <h2>{{title}}</h2>
    </div>
    <div class="form">
      <component :is="view" @jump="viewChange"></component>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import register from '../components/welcome/register.vue';
import login from '../components/welcome/login.vue';
import changePwd from '../components/welcome/changePwd.vue';
export default {
  data() {
    return {
      view:'changePwd',
      title:'注册账号'
    }
  },
  methods:{
    viewChange(val){
      this.view = val;
    }
  },
  watch:{
    view(val){
      switch(val){
        case 'register':
          this.title = '注册账号';
          return;
        case 'login' :
          this.title = '登录';
          return;
        case 'changePwd' :
          this.title = '修改密码';
          return;
      }
    }
  },
  components: {
    register,login,changePwd
  }
}
</script>

<style scoped lang="less">
.main{
  .title{
    text-align: center;
    h2{
      padding: 20px 0;
      color: #fc8d59;
    }
  }
  width: 30%;
  height: 500px;
  margin: 70px auto;
  //box-shadow:0 0 10px 0 rgb(255, 192, 109);
}
</style>
