<template>
  <div id="myCol">
    <p>我的收藏</p>
    <div class="colList">
      <div class="col-item">
        <div class="col-img">
          <img src="../../assets/354.jpg">
          <div class="col-icon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="col-bar">
          <div class="col-pho">
            <img src="../../assets/354.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="col-bar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="col-item">
        <div class="col-img">
          <img src="../../assets/354.jpg">
          <div class="col-icon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="col-bar">
          <div class="col-pho">
            <img src="../../assets/354.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="col-bar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="col-item">
        <div class="col-img">
          <img src="../../assets/354.jpg">
          <div class="col-icon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="col-bar">
          <div class="col-pho">
            <img src="../../assets/354.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="col-bar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="col-item">
        <div class="col-img">
          <img src="../../assets/354.jpg">
          <div class="col-icon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="col-bar">
          <div class="col-pho">
            <img src="../../assets/354.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="col-bar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="col-item">
        <div class="col-img">
          <img src="../../assets/354.jpg">
          <div class="col-icon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="col-bar">
          <div class="col-pho">
            <img src="../../assets/354.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="col-bar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="col-item">
        <div class="col-img">
          <img src="../../assets/354.jpg">
          <div class="col-icon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="col-bar">
          <div class="col-pho">
            <img src="../../assets/354.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="col-bar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
    </div>
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
  #myCol {
    position: absolute;
    top: 0;
    left: 25%;
    width: 70%;
    p{
      padding: 30px;
      font-size: 20px;
    }
    .colList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      .col-item {
        margin-bottom: 70px;
        width: 275px;
        height: 370px;
        .col-bar {
          position: relative;
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          height: 15%;
          .col-pho {
            height: 37px;
            .col-nick-name{
              position: absolute;
              top: 8px;
              left: 50px;
              height: 100%;
            }
            img{
              border-radius: 50%;
              height: 100%;
            }
          }
          .col-bar-icon{
            line-height: 37px;
            i{
              margin-right: 5px;
              font-size: 25px;
            }
          }
        }
        .col-img {
          position: relative;
          height: 320px;
          .col-icon {
            position: absolute;
            top: 5px;
            right: 5px;
            i {
              font-size: 30px;
              color: #fff;
            }
          }
          img {
            border-radius: 2%;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>