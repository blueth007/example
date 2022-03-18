<!--
 * @Author: Blueth007
 * @Date: 2022-02-24 16:15:58
 * @LastEditTime: 2022-03-08 11:29:42
 * @Description:  * MIT
-->
<template>
  <div id="app">
    <Navigation></Navigation>

    <router-view></router-view>
    <router-view name="mobile"></router-view>
  </div>
</template>

<script>
import Navigation from "./views/Navigation.vue";
export default {
  name: "App",
  components: { Navigation },

  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
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
  margin-top: 5.1rem;
}
ul {
  padding: 0;
  margin: 0;
}
li,
a {
  text-decoration: none;
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
</style>
