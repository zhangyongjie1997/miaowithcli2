import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;
router.beforeEach(function (to,from,next) {  //每一次在进入路由之前都会执行此方法,全局钩子，可以执行一些拦截
  document.title = to.meta.title;
  next();//继续向下走，不写就不会向下走
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
