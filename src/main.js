/*
 * @Author: Blueth007
 * @Date: 2022-02-24 16:15:58
 * @LastEditTime: 2022-03-15 10:46:22
 * @Description:
 * MIT
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import printJs from "print-js";
import { saveAs } from "file-saver";
import "print-js/dist/print.css";

Vue.prototype.$print = printJs;
Vue.prototype.$saveAs = saveAs;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
