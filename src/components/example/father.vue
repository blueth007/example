<!--
 * @Author: Blueth007
 * @Date: 2022-02-24 16:19:42
 * @LastEditTime: 2022-02-25 14:30:23
 * @Description: 
 * MIT
-->
<template>
  <div>
    <h1>Father component</h1>
    <child :toChild="toChild">
      <template v-slot:child="P1">{{ P1.child.name }}</template>
      <p>father -> child default slot</p>
      <template v-slot:other="P2">3@{{ P2.other.msg }}</template>
      <template v-slot:faToCh="{ faToCh2 }">p3-->{{ faToCh2 }}</template>
      <template slot="faToCh" slot-scope="{ faToCh2 }"
        >多个插槽算最后一个 p3333-->{{ faToCh2 }}</template
      >
    </child>
  </div>
</template>

<script>
import child from "./child.vue";
export default {
  components: { child },

  data() {
    return {
      toChild: "father toChildProps",
    };
  },
};
</script>

<style></style>
