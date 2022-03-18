/*
 * @Author: Blueth007
 * @Date: 2022-02-28 10:30:02
 * @LastEditTime: 2022-03-18 16:35:10
 * @Description:
 * MIT
 */
import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";
// import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/home",
    name: "home",
    redirect: "/",
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: {
      title: "关于About",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/article",
    name: "article",
    component: () => import("../views/Article.vue"),
  },
  {
    path: "/article/:id",
    component: () => import("../views/ArticleDetail.vue"),
    props: true,
  },
  {
    path: "/office",
    name: "office",
    component: () => import("../components/apps/office/index.vue"),
    children: [
      { path: "docPreview", name: "docPreview", component: () => import("../components/apps/office/docPrev.vue") },
      {
        path: "excelPreview",
        name: "excelPreview",
        component: () => import("../components/apps/office/excelPrev.vue"),
      },
      {
        path: "pdfPreview",
        name: "pdfPreview",
        component: () => import("../components/apps/office/pdfPrev.vue"),
      },
      {
        path: "editor",
        name: "editor",
        component: () => import("../components/apps/office/editor.vue"),
      },
    ],
  },
  {
    path: "*",
    component: () => import("../views/error_404.vue"),
  },
];
//路由守卫
var isLogin = 0; // 0=false 1=true

const router = new VueRouter({ mode: "history", routes });
router.beforeEach((to, from, next) => {
  //设置title
  to.meta && (window.document.title = to.meta.title || "default title");
  //判断登录
  // isLogin = localStorage.getItem("isLogin");
  isLogin = store.state.login.isLogin; // 或者 router.app.$store
  console.log("before router:", isLogin, to.name);

  if (to.name != "login") {
    if (!isLogin) {
      next({ name: "login" });
    } else next();
  } else {
    isLogin == true ? next({ name: "home" }) : next();
  }
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
