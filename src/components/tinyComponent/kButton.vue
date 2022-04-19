<!--
 * @Author: Blueth007
 * @Date: 2022-03-22 17:21:32
 * @LastEditTime: 2022-03-23 10:25:05
 * @Description: 
 * MIT
-->
<template>
  <button class="k-button" :data-text="text" @click="submit">
    <slot></slot>
  </button>
</template>

<script>
export default {
  computed: {
    text() {
      return this.$slots.default[0].text;
    },
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style>
.k-button {
  position: relative;
  padding: 12px 30px;
  margin: 6px 0 12px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.k-button:focus {
  outline: none;
}

.k-button::before {
  position: absolute;
  content: "";
  display: block;
  top: 2px;
  left: 2px;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 25px;
  background-color: black;
}

.k-button::after {
  position: absolute;
  content: attr(data-text);
  border: 2px solid black;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.k-button.active::after {
  top: 2px;
  left: 2px;
}
</style>
