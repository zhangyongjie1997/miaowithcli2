<template>
  <div class="mine-main">
    <div class="side-main">
      <ul>
        <li  class="set">
          <router-link tag="a" to="/0">设置</router-link>
        </li>
        <li>
          <router-link tag="a" to="/1">个人资料</router-link>
        </li>
        <li>
          <router-link tag="a" to="/2/">消息通知</router-link>
        </li>
        <li>
          <router-link tag="a" to="/3">我的收藏</router-link>
        </li>
        <li>
          <router-link tag="a" to="/4">关于领养</router-link>
        </li>
        <!-- <li>
          <router-link tag="a" to="/5">关于我和喵星人</router-link>
        </li> -->
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {

      }
    },
    components: {
    }
  }
</script>

<style scoped lang='less'>
  .mine-main {
    position: relative;
    margin: 100px auto;
    width: 85%;
  }

  .side-main {
    width: 20%;
    ul {
      li {
        padding: 10px 30px;
        font-size: 20px;
        a{
          color: #444;
        }
      }
      li.set{
        font-size: 22px;
        font-weight: bold;
        padding: 20px 40px;
        a{
          color: #000;
        }
      }
    }
  }

  .router-link-active {
    color: #fc8d59 !important;
  }
</style>