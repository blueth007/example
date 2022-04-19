<!--
 * @Author: Blueth007
 * @Date: 2022-03-28 14:05:50
 * @LastEditTime: 2022-04-18 10:57:24
 * @Description: 
 * MIT
-->
<template>
  <div>
    <Navigation></Navigation>
    <div class="main">
      <div class="container">
        <div class="left_bar">
          <div class="item_link">
            <router-link to="/waterfalls">图片瀑布流</router-link>
          </div>
          <div class="item_link">
            <router-link to="/imgCropper">图片裁剪</router-link>
          </div>
          <div class="item_link">
            <router-link to="/musicPlayer">musicPlayer</router-link>
          </div>
          <div class="item_link">
            <router-link to="/game">图片拼接</router-link>
          </div>
        </div>
        <div class="right_content">
          <h3>content</h3>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  components: { Navigation },
  methods: {
    dClick(a) {
      console.log(11111, a);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 1280px;
}
.container {
  height: 100%;
  margin-top: 5.1rem;
  min-height: calc(100vh - 5.1rem);
  display: flex;

  .left_bar {
    width: 200px;
    text-align: center;
    background-color: rgba(173, 163, 163, 0.2);
    .item_link {
      height: 50px;
      line-height: 50px;
      font-size: 1.5rem;
      border-bottom: 2px solid rgba(74, 202, 241, 0.3);
    }
  }
  .right_content {
    flex: 1;
  }
}
</style>
