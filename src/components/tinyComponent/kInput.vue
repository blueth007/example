<!--
 * @Author: Blueth007
 * @Date: 2022-03-22 17:20:45
 * @LastEditTime: 2022-03-23 12:51:28
 * @Description: 
 * MIT
-->
<template>
  <div class="k-input">
    <input
      :type="type"
      class="k-input__input"
      v-model.trim="c_text"
      placeholder=" "
    /><slot></slot>
    <label v-show="label" class="k-input__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Boolean, Array],
      default: "text",
    },

    label: {
      type: String,
    },

    type: {
      type: String,
      default: "text",
    },
  },

  computed: {
    c_text: {
      get() {
        return this.text;
      },
      set(value) {
        this.$emit("update:text", value);
      },
    },
  },
};
</script>

<style>
.k-input {
  position: relative;
  padding: 8px 0;
  margin: 5px 0;
}

.k-input__label {
  position: absolute;
  left: 4px;
  top: 50%;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.5s ease;
}

.k-input__input {
  position: relative;
  width: 100%;
  border: none;
  border-bottom: 2px solid black;
  padding: 8px 4px;
  font-size: 1.5rem;
}
.k-input input[type="checkbox"] {
  width: auto;
}
.k-input__input:focus {
  outline: none;
}

.k-input__input:not(:placeholder-shown) + .k-input__label,
.k-input__input:focus + .k-input__label {
  top: 6px;
  font-size: 12px;
}
</style>
