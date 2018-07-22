<template>
  <div id="about">
    <div class="about-header">
      <ul>
        <li @click="changePage('mine')" :class="{'red':page=='mine'}">我的领养</li>
        <li @click="changePage('my')" :class="{'red':page=='my'}">领养我的</li>
      </ul>
    </div>
    <div v-if="page=='mine'" class="mine-content content">
      <div class="about-item item">
        <div class="item-img">
          <img src="../../assets/119.jpg">
        </div>
        <div class="item-info">
          <div class="info-title">
            <ul>
              <li>猫猫</li>
              <li>主人</li>
              <li>领养日</li>
              <li>健康状况</li>
              <li>领养地点</li>
            </ul>
          </div>
          <div class="info-content">
            <ul>
              <li>猫猫</li>
              <li>主人</li>
              <li>领养日</li>
              <li>健康状况</li>
              <li>领养地点</li>
            </ul>
          </div>

        </div>
        <div class="item-btn">
          <ul>
            <li>修改</li>
            <li style="cursor:auto;">&nbsp;&nbsp;</li>
            <li style="cursor:auto;">&nbsp;&nbsp;</li>
            <li>修改</li>
            <li>修改</li>
          </ul>
        </div>
      </div>
      <div class="about-item item">
        <div class="item-img">
          <img src="../../assets/119.jpg">
        </div>
        <div class="item-info">
          <div class="info-title">
            <ul>
              <li>猫猫</li>
              <li>主人</li>
              <li>领养日</li>
              <li>健康状况</li>
              <li>领养地点</li>
            </ul>
          </div>
          <div class="info-content">
            <ul>
              <li>猫猫</li>
              <li>主人</li>
              <li>领养日</li>
              <li>健康状况</li>
              <li>领养地点</li>
            </ul>
          </div>

        </div>
        <div class="item-btn">
          <ul>
            <li>修改</li>
            <li style="cursor:auto;">&nbsp;&nbsp;</li>
            <li style="cursor:auto;">&nbsp;&nbsp;</li>
            <li>修改</li>
            <li>修改</li>
          </ul>
        </div>
      </div>

    </div>
    <div v-if="page=='my'" class="my-content content">
      <div class="about-item item">
        <div class="item-img">
          <img src="../../assets/119.jpg">
        </div>
        <div class="item-info">
          <div class="info-title">
            <ul>
              <li>猫猫</li>
              <li>主人</li>
              <li>领养日</li>
              <li>健康状况</li>
              <li>领养地点</li>
            </ul>
          </div>
          <div class="info-content">
            <ul>
              <li>猫猫</li>
              <li>主人</li>
              <li>领养日</li>
              <li>健康状况</li>
              <li>领养地点</li>
            </ul>
          </div>

        </div>
        <div class="item-btn">
          <ul>
            <li>修改</li>
            <li style="cursor:auto;">&nbsp;&nbsp;</li>
            <li style="cursor:auto;">&nbsp;&nbsp;</li>
            <li>修改</li>
            <li>修改</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        page: 'mine'
      }
    },
    methods: {
      changePage(val) {
        this.page = val;
      }
    }
  }
</script>

<style scoped lang='less'>
  #about {
    position: absolute;
    top: 0;
    left: 25%;
    width: 70%;
    .content {
      width: 100%;
      .item {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 40px 20px 10px 20px;
        border-bottom: 1px solid #ccc;
        width: 100%;
        height: 231px;
        .item-btn {
          ul {
            li {
              cursor: pointer;
              color: #666;
              margin-top: 15px;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        .item-img {
          width: 180px;
          img {
            width: 100%;
          }
        }
        .item-info {
          display: flex;
          width: 570px;
          .info-title {
            padding-right: 10px;
            width: 65px;
            ul {
              li {
                color: #333;
                margin-top: 15px;
                font-size: 14px;
              }
            }
          }
          .info-content {
            width: 101px;
            ul {
              li {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #666;
                margin-top: 15px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .about-header {
      ul {
        display: flex;
        padding-top: 40px;
        clear: both;
        li {
          margin-right: 30px;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }
        li.red {
          color: #fc8d59;
        }
      }

    }
  }
</style>