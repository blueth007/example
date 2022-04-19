/*
 * @Author: Blueth007
 * @Date: 2022-03-22 11:25:57
 * @LastEditTime: 2022-03-22 15:54:46
 * @Description:
 * MIT
 */
import store from "../store";

export function isLogin() {
  let flag = window.localStorage.getItem("isLogin");

  return flag || store.state.login.isLogin || false;
}

export function userAgentPlatform() {
  if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i)) {
    // document.write("手机访问.");
    return "mobile";
  } else {
    // document.write("电脑访问.");
    return "pc";
  }
}
