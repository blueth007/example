/*
 * @Author: Blueth007
 * @Date: 2022-03-01 16:41:35
 * @LastEditTime: 2022-03-25 17:10:32
 * @Description:
 * MIT
 */
const state = {
  isLogin: false,
  userName: "admin",
  password: "1234567",
};

const mutations = {
  logins: (state, payload) => {
    const { userName, password } = payload;
    if (password != "" && userName != "") {
      state.isLogin = true;
    }
  },
  loginOut: (state) => {
    console.log("loginOut");
    state.isLogin = false;
  },
};

const actions = {
  Fetch_login({ commit }, payload) {
    console.log("actions");
    return new Promise((resolve, reject) => {
      fetchData()
        .then((data) => {
          console.log("Dispatch", data);
          if (data.code == 200) {
            commit("logins", payload);
          }
          resolve({ code: 0 });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
const getters = {
  getIsLogin: (state) => {
    return state.isLogin;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

function fetchData() {
  return new Promise((resolve, reject) => {
    let error = null;
    if (error) reject(error);
    setTimeout(() => {
      const response = { code: 200, msg: "success" };
      console.log("efe");
      resolve(response);
    }, 1000);
  });
}
