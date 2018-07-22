<template>
  <div id="me-miao">
    <p>关于我和喵星人</p>
    <div class="miao-list">
      <div class="miao-item">
        <div class="item-header">
          <div class="title">
            标题：XXX
          </div>
          <div class="time">
            2018年7月18日 16:04
          </div>
        </div>
        <div class="item-content">
          <div class="content-main">
            <div class="content">
              官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。
            </div>
            <div class="content-footer">
              <a href="" style="color:#fc8d59;">查看全文></a>
            </div>
          </div>
          <div class="content-pho">
            <img src="../../assets/99.jpg">
          </div>
        </div>
      </div>
      <div class="miao-item">
        <div class="item-header">
          <div class="title">
            标题：XXX
          </div>
          <div class="time">
            2018年7月18日 16:04
          </div>
        </div>
        <div class="item-content">
          <div class="content-main">
            <div class="content">
              官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。
            </div>
            <div class="content-footer">
              <a href="" style="color:#fc8d59;">查看全文></a>
            </div>
          </div>
          <div class="content-pho">
            <img src="../../assets/99.jpg">
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
  #me-miao {
    position: absolute;
    top: 0;
    left: 25%;
    width: 70%;
    border-bottom: 1px solid #ccc;
    .miao-list {
      width: 100%;
      .miao-item {
        margin-top: 30px;
        box-sizing: border-box;
        padding: 0 20px;
        width: 100%;
        height: 215px;
        border-bottom: 1px solid #ccc;
        .item-header {
          display: flex;
          justify-content: space-between;
          height: 45px;
          .title {
            font-size: 20px;
            line-height: 45px;
            color: #333;
          }
          .time {
            font-size: 10px;
            line-height: 45px;
            color: #666;
          }
        }
        .item-content {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .content-main {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            box-sizing: border-box;
            padding-left: 20px;
            width: 670px;
            color: #555;
            font-size: 14px;
            .content{
              text-indent:2em;
            }
            .content-footer{
              font-size: 12px;
            }
          }
          .content-pho {
            width: 150px;
            height: 150px;
            img{width: 100%;}
          }
        }
      }
    }
    p {
      padding-top: 30px;
      color: #555;
      font-size: 14px;
    }
  }
</style>