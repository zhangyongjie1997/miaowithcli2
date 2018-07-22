<template>
    <el-col :span="24">
        <el-row class="likeCard" v-for="item in Like" :key="item.id">
            <el-col :span="2">
                <img src="../../../assets/99.jpg" class="image">
            </el-col>
            <el-col :span="17" class="content">
                <p class="nickName">{{ item.nickName }}</p>
                <p class="comment">赞了我的{{ item.content }}</p>
            </el-col>
            <el-col :span="5" class="reply clearfix">
                <time class="time">{{ item.date }}</time>
            </el-col>
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
                Like: [{
                        id: '1',
                        date: '2018-07-20 21:30:36',
                        nickName: '昵称1',
                        content: '日记'
                    },
                    {
                        id: '2',
                        date: '2018-07-22 21:30:36',
                        nickName: '昵称2',
                        content: '帖子'
                    },
                    {
                        id: '3',
                        date: '2018-07-22 21:30:38',
                        nickName: '昵称3',
                        content: '日记'
                    },
                ],
            };
        }
    }
</script>

<style>
    .likeCard {
        margin-bottom: 15px;
        padding-bottom: 5px;
        border: 1px solid #E4E7ED;
        padding-top: 5px;
        margin-bottom: 20px;
    }

    .likeCard:first-child {
        margin-top: 10px;
    }

    .likeCard:last-child {
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

    .content {
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