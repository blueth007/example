/*
 * @Author: Blueth007
 * @Date: 2022-03-01 14:32:53
 * @LastEditTime: 2022-03-02 16:10:32
 * @Description:
 * MIT
 */
import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import user from "./modules/user";
import login from "./modules/login";
import myPlugin from "./plugins";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    login,
  },
  plugins: [...myPlugin],
});
