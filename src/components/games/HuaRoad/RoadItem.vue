<!--
 * @Author: Blueth007
 * @Date: 2022-04-19 11:12:58
 * @LastEditTime: 2022-04-19 14:24:53
 * @Description: 
 * MIT
-->
<template>
  <div class="item">
    <ul>
      <li
        :class="random != index ? '' : 'active'"
        v-for="(item, index) in list"
        :key="index"
        :style="{
          left: item[1] * (width / size) + 'px',
          top: item[0] * (height / size) + 'px',
          width: width / size + 'px',
          height: height / size + 'px',
        }"
        :data-index="item"
        @click="move($event, index)"
      >
        <span :class="[tip1 ? 'tip1' : '']"> {{ index }}</span>
        <img
          v-if="imgs.length != 0"
          :src="picture"
          :alt="index"
          :width="'100%' * size"
          :style="{
            left: imgs[index].left,
            top: imgs[index].top,
          }"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: [String, Number],
      default: 3,
    },
    picture: {
      type: String,
      default: "",
    },
    tip1: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // width: 0,
      // height: 0,
      list: [],
      imgs: [],
    };
  },
  watch: {
    size(newValue) {
      this.styleList();
      this.intImgs(newValue);
    },
  },
  computed: {
    random({ size }) {
      return size * size - 1;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.width = document.querySelector(".item ul").clientWidth;
      this.height = document.querySelector(".item ul").clientHeight;
      this.styleList();
      this.intImgs(this.size);
      //   this.reset();
      // console.log(this.imgs);
    });
  },
  methods: {
    styleList() {
      var arr = [];
      for (let m = 0; m < this.size; m++) {
        for (let n = 0; n < this.size; n++) {
          arr.push([m, n]);
        }
      }
      this.list = arr;
    },
    intImgs(size) {
      const { width, height } = this;
      this.imgs = [];
      for (let index = 0; index < this.list.length; index++) {
        const element = this.list[index];
        this.imgs.push({
          key: index,
          left: 0 - (element[1] * width) / size + "px",
          top: 0 - (element[0] * height) / size + "px",
        });
      }
      this.imgs[this.list.length - 1].left = "-9999px";
    },
    move(event, index) {
      const data =
        event.target.parentNode.getAttribute("data-index") ||
        event.target.getAttribute("data-index");
      console.log(data);
      const active = document
        .querySelector(".item .active")
        .getAttribute("data-index");
      const dataArr = data.split(","),
        actArr = active.split(",");
      let flag =
        (dataArr[1] === actArr[1] && Math.abs(dataArr[0] - actArr[0]) === 1) ||
        (dataArr[0] === actArr[0] && Math.abs(dataArr[1] - actArr[1]) === 1);

      if (flag) {
        const temp = this.list[this.random];
        this.$set(this.list, this.random, this.list[index]);
        this.$set(this.list, index, temp);
        this.check();
      }
    },
    reset() {
      for (let m = 0; m < 100; m++) {
        let random = parseInt(Math.random() * (this.size * this.size - 1));
        // [this.imgs[0], this.imgs[random]] = [this.imgs[random], this.imgs[0]];
        // console.log(random, this.imgs);
        const temp = this.list[this.random];
        this.$set(this.list, this.random, this.list[random]);
        this.$set(this.list, random, temp);
      }
    },
    check() {
      const newValue = this.list;
      let flag = 0;
      for (let m = 0; m < newValue.length; m++) {
        const element = newValue[m];
        if (element[0] === parseInt(m / 3) && element[1] === m % 3) {
          //
          flag++;
          continue;
        }
      }
      if (flag == newValue.length) {
        setTimeout(() => {
          alert("Right");
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  height: 560px;
  width: 560px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  li {
    position: absolute;
    overflow: hidden;
    max-width: calc(100% / 3);
    max-height: calc(100% / 3);
    left: 0;
    top: 0;
    transition: left 0.4s, top 0.4s;
    //数字辅助
    .tip1 {
      position: absolute;
      z-index: 2;
      color: red;
      font-size: 28px;
      left: 50%;
      top: 50%;

      transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
    }

    img {
      position: absolute;
    }
  }
}

li span {
  color: transparent;
}
</style>
