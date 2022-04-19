<!--
 * @Author: Blueth007
 * @Date: 2022-03-28 14:04:15
 * @LastEditTime: 2022-03-29 10:17:09
 * @Description: 
 * MIT
-->
<template>
  <div class="">
    <h1>流媒体图片</h1>
    <div class="masonry-wrapper">
      <waterFlex
        :col="col"
        :break-at="breakAt"
        col-spacing="10"
        :break-by-container="true"
        style="align-content: center"
      >
        <div
          class="item"
          :style="'width:calc((100% - ' + 10 * col + 'px)/' + col + ')'"
          v-for="(item, index) in imageLists"
          :key="index"
        >
          <img
            v-if="item.download_url"
            :src="item.download_url"
            :alt="item.author"
            class="masonry-content"
          />
          <p>{{ index }}</p>
        </div>
      </waterFlex>
    </div>
  </div>
</template>

<script>
import waterFlex from "vue-flex-waterfall";
export default {
  name: "Waterfalls",
  components: { waterFlex },
  data() {
    return {
      imageLists: [],
      col: 4,
      breakAt: (() => {
        const obj = {};
        for (let i = 1; i <= this.col; i++) {
          obj[200 * (i + 1) + 10 * i] = i;
        }
        return obj;
      })(),
    };
  },
  mounted() {
    this.getImgs();
  },
  computed: {},
  methods: {
    getImgs() {
      for (let index = 0; index < 10; index++) {
        let random = Math.floor(Math.random() * 200);
        let height = random + 300;

        this.imageLists.push({
          id: random,
          download_url:
            "https://picsum.photos/450/" + height + "?image=" + random,
          author: "Barrientos",
        });
      }
      console.log(this.imageLists);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 24%;
  border-radius: 4px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 100px;
  img {
    border-radius: 8px;
    width: 100%;
  }
}
</style>
