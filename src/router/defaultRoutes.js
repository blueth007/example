/*
 * @Author: Blueth007
 * @Date: 2022-03-22 11:22:58
 * @LastEditTime: 2022-04-19 14:25:04
 * @Description:
 * MIT
 */
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "首页",
    },
    children: [],
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
      {
        path: "docPreview",
        name: "docPreview",
        component: () => import("../components/apps/office/docPrev.vue"),
      },
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
    name: "userInfo",
    path: "/userInfo",
    component: () => import("../components/userInfo.vue"),
  },
  {
    path: "/",
    name: "index",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    name: "project",
    path: "/project",
    component: () => import("../views/Projects.vue"),
    meta: { title: "Projects 示例" },
    children: [
      {
        name: "waterfalls",
        path: "/waterfalls",
        component: () => import("../components/Waterfalls"),
      },
      {
        name: "imgCropper",
        path: "/imgCropper",
        component: () => import("../components/ImageCropper.vue"),
      },
      {
        name: "musicPlayer",
        path: "/musicPlayer",
        component: () => import("../components/apps/musicPlayer/index.vue"),
      },
      {
        name: "game",
        path: "/game",
        component: () => import("../components/games/HuaRoad/index.vue"),
      },
    ],
  },

  {
    name: "mobile",
    path: "/mobile",
    components: {
      mobile: () => import("../views/mHome.vue"),
    },
  },
  {
    path: "*",
    component: () => import("../views/error_404.vue"),
  },
];

export default routes;
