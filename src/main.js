/*
 * @Author: Blueth007
 * @Date: 2022-02-24 16:15:58
 * @LastEditTime: 2022-04-08 11:28:36
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
import plugin from "./plugin/index";
import "print-js/dist/print.css";

document.cookie =
  "_ntes_nnid=3e47e957c94d56ea3714f5bbf38597bf,1532695901743; _ntes_nuid=3e47e957c94d56ea3714f5bbf38597bf; usertrack=ezq0o1u8xfxwfillERRvAg==; _ga=GA1.2.1172819859.1539098110; __oc_uuid=ed599b70-d8d0-11e8-9a49-4d470420dcfb; __utma=187553192.1172819859.1539098110.1540525248.1540525248.1; __utmz=187553192.1540525248.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; _iuqxldmzr_=32; WM_TID=h3Hc9Pi6g75NPzMgDUVPDJ1qsRwbLDGK; __utma=94650624.356059233.1532951546.1536057789.1540790360.6; __utmz=94650624.1535085812.4.4.utmcsr=liuli.eu|utmccn=(referral)|utmcmd=referral|utmcct=/wp/tag/cosplay/page/2; vinfo_n_f_l_n3=954c8f473076175e.1.0.1545043421942.0.1545043443642; KAOLA_ACC=476ab7cd25c6f5d0f8007a58c2deaedc@tencent.163.com; mail_psc_fingerprint=9b38f4d5ca4a4df17bd64ac8b1e7826d; nts_mail_user=15770570072@163.com:-1:1; WM_NI=LL%2BmyxKQSMrwVt%2BCZj5KpBZM7R3cAW6hH%2F1jc9FP0bbUUukFkDKTtXlcDrV5rcINIyT%2BQJw3fDklKb0nm0E6QnS8QIM%2FuxRlstMbP3Wc3IoRI7Tii2EG5NMwWS9GAryLOGU%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee98f46a88e9f9a3b54eb1bc8fa6c54f869a8eaab73cb8b2bfbbbb5393bfab91f12af0fea7c3b92a9094e58efc74898f9daef17d96ace5a4d962f795c0a3d947f58efd84c45df6b888d0b462a1e78ab1b36aa28b9b96ea4ea99c85b5f754b0bd8c93d53fb2bd87afcc7398f59fabf639a69ca58dca6af4b2a3d1c83e93b29dd9d4438ff1bb99d168b1ac8383d33995bdfdaaee5a8be99c8aec3a8799fbafd07d958df7a8c47abb9481a8d837e2a3; playerid=81146496; starttime=; NNSSPID=a776c92a33154c50b675beb7fe13044f; NTES_PASSPORT=1tAjSLmRjoF2OepbYQlVX5N_4tze4tCwri6.maC4yHO8zSAkzfcxNLMHisp95DIK.vrSb_TmzrrrCwncIb20PwdWiBY8TdcSPsHjXfAv87YfmEk.7MbJ9n2iKufg7nmnpqEELiCgX73mQBOdWx_sI4DCj4d.HkysDoF_8jPId.jr1xKvbzh.ijkHx; df=mail163_letter; playliststatus=visible; NTES_SESS=pLtesJlQwWLM2_F68fUmnLEF8d5Iv4cq_qQfCP7YFVvh_q13_H8IY.vDOfMQ2gatRiX5XcUpvCDC5p9npr7FCwYI2LBmEgb9FrtbQbQA4p1eGwFrOl.xFcmhlqQhSx5lH4dzhJtM6So72SWrCTXvPWH__g6Hn3Cj6hRVd.rFD4ScPWA.3fBB8g2..VT3Rf1.jGcy8bxHaIui8Vyp9MJZX.vk0; S_INFO=1553494481|0|1&65##|m15770570072; P_INFO=m15770570072@163.com|1553494481|0|mail163|00&99|CN&1553476190&mail163#CN&null#10#0#0|157072&1|kaola&mail163|15770570072@163.com; MUSIC_EMAIL_U=112871895ffcc9c558231ef8b14c72465053be85f4706fa68125a8c6b9f1c7089e11ed1b8eda0a668b868433afc35e6d2383765fb87ce1fef2f513a9c38b5dc7; JSESSIONID-WYYY=9G0H2Gt%5C%2BkEsnP%2BUTkJdbPA6O%5C%2F2w%2BlFnFTDDdBbzpJG13a%5CeCGdp%2F7U%2FoHCA8cE6jxegjO%5Ccc%2FZyXbS%2Bw%2Fe2FEtEwfIARUM1x7QGDnWEsSQYfZ%5CHPZAO1msgcS3TvPwqjnN1q2bsteorR3DEPNr6drhmAyqgc53bCq5i8pGz6HoPk2H%3A1553497555044; MUSIC_U=e4ace7b13afdd88161175bda1c0914451762803785e1030d4312dda6e71aff68ca2d83fe0a175eb59e0eb32aa5fb495e8bafcdfe5ad2b092; __remember_me=true; __csrf=60e2fad5dc1d688abf984595f6a277e1";
axios.defaults.withCredentials = true;

Vue.prototype.$print = printJs;
Vue.prototype.$saveAs = saveAs;
Vue.prototype.$axios = axios;
Vue.use(plugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
