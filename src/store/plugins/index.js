/*
 * @Author: Blueth007
 * @Date: 2022-03-02 16:02:48
 * @LastEditTime: 2022-03-02 16:09:32
 * @Description: vuex 插件
 * MIT
 */
import storeInLocal from "./storeInLocal";
const myPlugin = (store) => {
  // 当 store 初始化后调用
  // eslint-disable-next-line no-unused-vars
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  });
};

export default [myPlugin, storeInLocal];
