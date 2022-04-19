/*
 * @Author: Blueth007
 * @Date: 2022-02-28 10:30:02
 * @LastEditTime: 2022-04-07 14:11:09
 * @Description:
 * MIT
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./defaultRoutes"; //默认通用路由
// eslint-disable-next-line no-unused-vars
import * as utils from "./authLogin";

// import store from "../store";  //转入到函数中处理

Vue.use(VueRouter);

//路由守卫
//var isLogin = 0; // 0=false 1=true

const router = new VueRouter({ mode: "hash", routes });

router.beforeEach((to, from, next) => {
  // //设置title
  // to.meta && (window.document.title = to.meta.title || "default title");
  // //判断登录
  // // 1,isLogin = localStorage.getItem("isLogin");
  // let isLogin = utils.isLogin(); //2, store.state.login.isLogin; // 或者 router.app.$store
  // let platform = utils.userAgentPlatform(); //获取是 pc、mobile 平台
  // console.log("before router:", isLogin, from.name, to.name, "platform:", platform); // 获取来自哪儿，去哪儿
  // if (platform == "mobile") {
  //   console.log("mobile");
  // }
  // if (to.name !== "login" && !isLogin) {
  //   let url = to.name == "home" && platform == "mobile" ? platform : to.name;
  //   next({ name: "login", query: { url } });
  // } else next();
  console.log(11);
  next();
});
router.beforeResolve((to, from, next) => {
  console.log("before resolve invoked");
  next();
});

router.afterEach((to, from) => {
  console.log("after router:to:", to, "from:", from);
});
/**
 *  beforeRouter --> routeRouter ->> componentRouter-->afterRouter
 *
 */
export default router;
