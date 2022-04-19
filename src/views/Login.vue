<!--
 * @Author: Blueth007
 * @Date: 2022-02-28 17:00:12
 * @LastEditTime: 2022-03-23 13:37:50
 * @Description: 
 * MIT
-->

<template>
  <div class="login_container">
    <h1>Login</h1>

    <div class="container">
      <form class="form" @submit.prevent>
        <div class="form__control">
          <kInput :text.sync="username" label="用户名"></kInput>
        </div>
        <div class="form__control">
          <kInput :text.sync="password" type="password" label="密码"></kInput>
        </div>
        <div class="form__control half_row">
          <kInput :text.sync="code" label="验证码"></kInput>
          <identifyCode :text.sync="mchCode"></identifyCode>
        </div>
        <div class="form__control">
          <input type="checkbox" :checked="remembered" />记住密码
        </div>
        <div class="form__control">
          <k-button @submit="submit">登录</k-button><k-button>注册</k-button>
        </div>
      </form>
    </div>
    <p class="tips">Tips:用户名、密码任意</p>
    
    <!-- <button @click="loginOut" v-if="isLogin">LoginOut</button> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import kInput from "../components/tinyComponent/kInput";
import kButton from "../components/tinyComponent/kButton";
import identifyCode from "../components/tinyComponent/identifyCode.vue";
export default {
  name: "Login",
  components: {
    kInput,
    kButton,
    identifyCode,
  },
  data() {
    return {
      username: "",
      password: "",
      code: "",
      mchCode: "",
      remembered: true,
      c: ["1", "2"],
    };
  },
  computed: {
    ...mapGetters("login", {
      isLogin: "getIsLogin",
    }),
  },
  methods: {
    submit() {
      let url = this.$route.query.url || "/";
      this.checkRemember();
      console.log(this.remembered);
      if (this.username.trim() == "" || this.password.trim() == "") {
        alert("输入不能为空");
        return;
      }
      if (this.code.toUpperCase() !== this.mchCode) {
        alert("验证码不一致");
        console.log(this.code, this.mchCode);
        return;
      }
      this.$store
        .dispatch("login/Fetch_login", {
          username: this.username,
          password: this.password,
        }) // actions中对应函数为 promise
        .then(() => {
          this.$router.push(url);
        });
    },
    loginOut() {
      // localStorage.setItem("isLogin", 0);
      this.$store.commit("login/loginOut");
      this.$router.push("/login");
    },
    checkRemember() {
      const { username, password, remembered } = this;
      if (remembered) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
      }
    },
  },

  mounted() {
    this.username = localStorage.getItem("username") || "";
    this.password = localStorage.getItem("password") || "";
  },
};
</script>

<style lang="scss" scoped>
.login_container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
  margin: 0;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  border: 3px solid black;
  border-radius: 8px;
  font-size: 1.2rem;
}
h1 {
  font-size: 2.5rem;
}

* {
  box-sizing: border-box;
}

.container {
  width: 100%;
  margin: 0 auto;
}
.form {
  position: relative;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  min-height: 250px;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.form__control {
  width: 90%;
  margin: 4px auto;
}
.form__control button {
  margin: 0 25px;
}
.half_row {
  display: flex;
  align-items: center;
}
</style>
