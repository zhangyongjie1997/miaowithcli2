import Vue from "vue";
import Router from "vue-router";
import slogn from "./views/Slogn.vue";
import welcome from "./views/welcome.vue";
import mine from "./components/mine/mine.vue";
import my_col from "./components/mine/my_col.vue";
import about from "./components/mine/about.vue";
import meMiao from "./components/mine/me&miao.vue";
import info from "./components/mine/info.vue";
import message from "./components/mine/message.vue";
import comment from "./components/mine/message/comment.vue";
import like from "./components/mine/message/like.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/111",
      name: "slogan",
      component: slogn,
      meta:{title:'公益猫'}
    },
    {
      path: "/welcome",
      name: "welcome",
      component: welcome,
      meta:{title:'加入公益猫'}
    },
    {
      path: "/",
      name: "mine",
      component: mine,
      meta:{title:'我的'},
      children:[
        {path:'0'},
        {path:'1',component:info,meta:{title:'个人信息'}},
        {path:'2',component:message,
        meta:{title:'消息通知'},
        children:[
          {path:'/',component:comment,meta:{title:'消息'}},
          {path:'comment',component:comment,meta:{title:'消息'}},
          {path:'like',component:like,meta:{title:'赞'}},
        ]
      },
        {path:'3',component:my_col,meta:{title:'我的收藏'}},
        {path:'4',component:about,meta:{title:'关于领养'}},
        {path:'5',component:meMiao,meta:{title:'我和猫猫的故事'}},
      ]
    },
  ]
});
