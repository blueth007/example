<!--
 * @Author: Blueth007
 * @Date: 2022-03-01 14:44:19
 * @LastEditTime: 2022-03-01 14:55:25
 * @Description: 
 * MIT
-->

<template>
  <div class="childA">
    <h3>this s chidA page</h3>
    <p>from father's props ={{ category }}</p>
    <button @click="changeChild">changeChild</button>
  </div>
</template>

<script>
export default {
  name: "ChildA",
  props: {
    category: {
      type: String,
      default: "default category",
    },
  },
  methods: {
    changeChild() {
      this.$emit("update:category", "child to father Value");
    },
  },
};
</script>

<style>
.childA {
  border: 1px solid #1f95da;
}
</style>
