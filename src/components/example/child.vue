<!--
 * @Author: Blueth007
 * @Date: 2022-02-24 16:20:18
 * @LastEditTime: 2022-02-25 14:31:13
 * @Description: 
 * MIT
-->

<template>
  <div>
    <h2>child components</h2>
    <p>{{ child.name }}</p>
    <slot name="child" :child="child"></slot>
    <p>other</p>
    <slot></slot>
    <p>1@<slot name="other" :other="other">2@</slot></p>
    <p>father to child props in child: {{ toChild }}</p>
    <p>"props ->toChild :"<slot name="faToCh" :faToCh2="{ toChild }"></slot></p>
    <!-- <p><slot name="faToCh" :faToCh="returnToFa"></slot></p> -->
  </div>
</template>

<script>
export default {
  props: {
    toChild: {
      type: String,
      default: "",
    },
  },
  //   computed: {
  //     returnToFa: function () {
  //       return this.toChild + " fixed";
  //     },
  //   },
  data() {
    return {
      child: {
        name: "child name is Jack",
      },
      other: {
        msg: "this is other msgs",
      },
      data: {
        a: 1,
        m: [1, 2],
      },
      tips: "tips",
    };
  },
};
</script>

<style></style>
