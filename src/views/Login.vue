<!--
 * @Author: Blueth007
 * @Date: 2022-02-28 17:00:12
 * @LastEditTime: 2022-03-07 14:50:36
 * @Description: 
 * MIT
-->

<template>
  <div>
    <h1>Login</h1>
    <form>
      <p>
        <label for="username">
          <input
            type="text"
            id="username"
            name="username"
            v-model="username"
            placeholder="username"
          />
        </label>
      </p>
      <p>
        <label for="password">
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            placeholder="password"
          />
        </label>
      </p>
    </form>
    <button @click="login">Login</button>
    <button @click="loginOut" v-if="isLogin">LoginOut</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters("login", {
      isLogin: "getIsLogin",
    }),
  },
  methods: {
    login() {
      // localStorage.setItem("isLogin", 1);
      // this.$store.commit("login/logins", {
      //   username: this.username,
      //   password: this.password,
      // });
      if (this.username.trim() == "" || this.password.trim() == "") {
        alert("输入不能为空");
        return;
      }
      this.$store
        .dispatch("login/Fetch_login", {
          username: this.username,
          password: this.password,
        }) // actions中对应函数为 promise
        .then(() => {
          this.$router.push("/");
        });
    },
    loginOut() {
      // localStorage.setItem("isLogin", 0);
      this.$store.commit("login/loginOut");
      this.$router.push("/login");
    },
  },

  mounted() {
    console.log(this.isLogin);
  },
};
</script>

<style></style>
