<template>
  <div class="main">
    <div class="container">
      <div class="logo">
        <img src="../assets/slogn.jpg" width="100%">
        <div class="btn">
          <router-link tag="button" to="/welcome">加入我们</router-link>
          <button>访问社区</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slogan",
    components: {
    }
  };
</script>
<style lang="less" scoped>
.main {
  background-color: #fdd1bd;
  width: 100%;
  height: 730px;
  margin: 0 auto;
  .container {
    width: 90%;
    margin: 0px auto;
    padding-top: 50px;
    .btn {
      width: 30%;
      height: 100px;
      padding-left: 30px;
      button{
        margin-top: 50px;
        outline: none;
        cursor: pointer;
        background-color: #fc8d59;
        border: 0;
        font-weight: bold;
        font-size: 20px;
        color: #fff;
        display: block;
        width: 180px;
        height: 60px;
      }
    }
    .logo {
      width: 50%;
      margin: 0 auto;
      img {
      }
    }
  }
}
</style>