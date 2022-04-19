<!--
 * @Author: Blueth007
 * @Date: 2022-04-01 12:51:25
 * @LastEditTime: 2022-04-07 14:05:37
 * @Description: 
 * MIT
-->
<template>
  <div class="discover">
    <div v-for="(item, index) in tags" :key="item.id + index" class="item">
      <div class="imgCover" @click="getTagsId(item.id)">
        <img :src="item.coverImgUrl" :alt="item.name" />
      </div>
      <div class="playCount">{{ item.playCount }}</div>
      <div class="desc">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getTagsId(id) {
      // console.log("updateTagId", id);
      this.$emit("setTagId", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.discover {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    position: relative;
    cursor: pointer;
    width: 48%;
    img {
      width: 100%;
    }
    .desc {
      padding: 5px;
      p {
        margin: 0;
        padding: 0;
      }
    }
    .playCount {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 1.2rem;
    }
  }
}
</style>
