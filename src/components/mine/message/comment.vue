<template>
    <el-col :span="24">
        <el-row class="commentCard" v-for="item in comments" :key="item.id">
            <el-col :span="2">
                <img src="../../../assets/99.jpg" class="image">
            </el-col>
            <el-col :span="17" class="content">
                <p class="nickName">{{ item.nickName }}</p>
                <p class="comment">{{ item.comment }}</p>
            </el-col>
            <el-col :span="5" class="reply clearfix">
                <time class="time">{{ item.date }}</time>
            </el-col>
            <el-button type="text" icon="el-icon-message" class="replyBtn">回复</el-button>
        </el-row>
        <el-pagination class="page" layout="prev, pager, next" :page-size='pageNum' :total="6">
        </el-pagination>
    </el-col>
</template>

<script>
    export default {
        data() {
            return {
                pageNum: 2,
                comments: [{
                        id: '1',
                        date: '2018-07-20 21:30:36',
                        nickName: '昵称1',
                        comment: '英格兰最让人失望的是他 穆帅钦点爱将彻底失灵。'
                    },
                    {
                        id: '2',
                        date: '2018-07-22 21:30:36',
                        nickName: '昵称2',
                        comment: '设置文章头尾签名内容，生成图文时自动在相应位置插入内容，无须每篇文章都手动复制编辑。编辑完的图文，一键同步到微信公 众号后台，'
                    },
                    {
                        id: '3',
                        date: '2018-07-22 21:30:38',
                        nickName: '昵称3',
                        comment: '设置文章头尾签名内容，生成图文时自动在相应位置插入内容，无须每篇文章都手动复制编辑。编辑完的图文，一键同步到微信公 众号后台，'
                    },
                ],
                comment: ''
            };
        }
    }
</script>

<style>
    .commentCard {
        margin-bottom: 15px;
        padding-bottom: 30px;
        border: 1px solid #E4E7ED;
        padding-top: 5px;
        margin-bottom: 20px;
    }

    .commentCard:first-child {
        margin-top: 10px;
    }

    .commentCard:last-child {
        margin-bottom: 0;
    }

    .content {
        padding-left: 15px;
    }

    .nickName {
        margin: 0;
        font-weight: bold;
        color: #333333
    }

    .comment {
        margin: 0;
        font-size: 14px;
        color: #909399;
        padding-top: 5px;

    }

    .time {
        float: right;
        padding-right: 5px;
        font-size: 13px;
        color: #999;
    }

    .reply {
        float: right;
        position: relative;
    }

    .el-button--text:focus,
    .el-button--text:hover {

        color: #fee090;
    }

    .image {
        width: 100%;
        display: block;
        border-radius: 50%;
        padding: 4px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .replyBtn {
        color: #fc8d59;
        padding: 0;
        bottom: 5px;
        right: 0;
        position: absolute;
        padding-right: 5px;
    }

    .el-pager li:hover,
    .el-pager li.active {
        color: #fc8d59
    }

    .btn-next:hover,
    button:hover,
    .el-icon:hover,
    .btn-prev:hover,
    .el-icon:hover {
        color: #fc8d59;
    }

    .page {
        text-align: center;
    }
</style>