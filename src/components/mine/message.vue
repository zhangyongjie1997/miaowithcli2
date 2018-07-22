<template>
  <div class="message-main">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#fc8d59" router>
      <el-menu-item index="/mine/2/comment">收到的评论</el-menu-item>
      <el-menu-item index="/mine/2/like">收到的赞</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<style>
  .container {
    margin-top: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        activeIndex:'/mine/2/comment'
      };
    },
  }
</script>
<style scoped>
  .message-main {
    position: absolute;
    top: 0;
    left: 25%;
  }
</style>