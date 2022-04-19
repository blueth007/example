/*
 * @Author: Blueth007
 * @Date: 2022-03-01 16:41:35
 * @LastEditTime: 2022-03-29 16:29:26
 * @Description:
 * MIT
 */
const state = {
  userName: "admin",
  user_id: 1,
  user_avatars: null,
};

const mutations = {
  setAvatars: (state, payload) => {
    state.user_avatars = payload;
  },
};

const actions = {};
const getter = {};
export default {
  namespaced: true,
  state,
  getter,
  mutations,
  actions,
};
