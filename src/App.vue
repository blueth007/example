<!--
 * @Author: Blueth007
 * @Date: 2022-02-24 16:15:58
 * @LastEditTime: 2022-03-29 17:25:32
 * @Description:  * MIT
-->
<template>
  <div id="app">
    <router-view name="mobile"></router-view>
    <router-view></router-view>
    <div class="toTop" v-show="isTop">
      <div class="topbtn" @click="toTop">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      isTop: true,
    };
  },
  methods: {
    onScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // let height =
      //   window.innerHeight ||
      //   document.documentElement.clientHeight ||
      //   document.body.clientHeight;

      if (this.scrollTop > 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    toTop() {
      (document.body.scrollTop = 0) ||
        (document.documentElement.scrollTop = 0) ||
        (window.pageYOffset = 0);
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-size: 12px;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  color: #333;
  background-color: #f4f5f5;
}
#app {
  margin: 0 auto;
}
.main {
  width: 1024px;
  background-color: white;
  margin: 5.1rem auto 0;
}
ul {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
li,
a {
  list-style: none;
  text-decoration: none;
  color: #000;
}
table,
table tr th,
table tr td {
  border: 1px solid #0094ff;
}

table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
.toTop {
  position: fixed;
  right: 15px;
  bottom: 10%;
  cursor: pointer;
}
.topbtn {
  width: 52px;
  height: 52px;
}
</style>
