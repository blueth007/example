<!--
 * @Author: Blueth007
 * @Date: 2022-02-24 16:15:58
 * @LastEditTime: 2022-03-07 16:51:24
 * @Description: 
 * MIT
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <father></father>
  </div>
</template>

<script>
import father from "../example/father.vue";
export default {
  name: "HelloWorld",
  components: { father },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
