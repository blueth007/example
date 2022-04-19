<!--
 * @Author: Blueth007
 * @Date: 2022-04-18 10:53:06
 * @LastEditTime: 2022-04-19 14:37:36
 * @Description: 华容道
 * MIT
-->
<template>
  <div class="container">
    <div class="wrapper">
      <header>
        <button @click="size = 3">3x3方格</button>
        <button @click="size = 4">4x4方格</button>
        <button @click="changePic">切换图片</button>
        <button @click="reset">重置</button>
      </header>
      <content>
        <road-item :picture="picture" :size="size" ref="child" :tip1="tip1">
        </road-item>
      </content>
      <footer>
        <button @click="tip2 = !tip2">图片提示</button>
        <button @click="tip1 = !tip1">数字辅助</button>
      </footer>
      <div :class="['tips', tip2 ? 'tip2' : '']">
        <img :src="picture" />
      </div>
      <p>
        摘自：
        <a
          href="https://juejin.cn/post/7087511823326380039"
          target="_blank"
          rel="noopener noreferrer"
          >掘金</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import RoadItem from "./RoadItem.vue";
export default {
  components: {
    RoadItem,
  },
  data() {
    return {
      picture: require("@/assets/hroad1.jpg"),
      size: 4,
      tip1: false,
      tip2: false,
    };
  },

  mounted() {},
  methods: {
    reset() {
      this.$refs.child.reset();
    },
    changePic() {
      this.picture =
        "https://picsum.photos/600/600?random= " +
        Math.floor(Math.random() * 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  .wrapper {
    width: 628px;
    height: 628px;
    margin: 0 auto;
    header,
    content,
    footer {
      display: block;
      position: relative;
    }
    content {
      margin: 12px 0;
    }
    button {
      padding: 6px 18px;
      margin: 0 12px;
    }
  }
  .tips {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: rgba(3, 3, 3, 0.3);
    z-index: 3;
    justify-content: center;
    align-items: center;
  }
  .tip2 {
    display: flex;
  }
}
</style>
