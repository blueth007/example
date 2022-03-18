/*
 * @Author: Blueth007
 * @Date: 2022-03-02 16:05:51
 * @LastEditTime: 2022-03-02 16:11:35
 * @Description:
 * MIT
 */
// store 数据持久化
export default (store) => {
  console.log("store持久化");
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state));
  }
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    localStorage.state = JSON.stringify(state);
  });
};
