<!--
 * @Author: Blueth007
 * @Date: 2022-04-06 14:46:30
 * @LastEditTime: 2022-04-07 17:42:08
 * @Description: 
 * MIT
-->
<template>
  <swiper
    :class="['swiper' + _uid]"
    :auto-update="true"
    :options="swiperOptions"
    :ref="'swiper' + _uid"
    @reachEnd="handleReachEnd"
    :key="key"
  >
    <swiper-slide class="text" :key="key">
      <div class="text-content"><slot></slot></div>
      <div :class="'swiper-scrollbar' + _uid" slot="scrollbar"></div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-scroll-container",
  title: "Scroll container",
  props: {
    height: { type: [String, Number], default: 480 },
    options: { type: Object, default: () => ({ a: 1 }) },
  },
  data() {
    const vm = this;
    return {
      key: new Date() - 1,
      swiperOption: {
        direction: "vertical",
        slidesPerView: "auto",
        // height: 400,
        draggable: true,
        autoHeight: true,
        freeMode: true,
        // scrollbar: {
        //   // draggable: true,
        //   el: ".swiper-scrollbar-" + vm._uid,
        // },
        mousewheel: true,
        on: {
          observerUpdate: function () {
            console.log("observer监测到了不可描述的事情发生");
          },
          touchStart: function () {
            console.log("Touched");
            vm.$refs["swiper" + vm._uid].updateSwiper();
            vm.handleTouchStart();
          },
          reachEnd: function () {
            console.log("reachEnd");
            //   vm.handleReachEnd();
          },
          slideChange: () => {
            // vm.$refs.swiper_l.updateSwiper();
            console.log("slide:");
            vm.handleSlideChange();
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiperOptions({ swiperOption, options }) {
      return { ...swiperOption, options };
    },
  },
  methods: {
    handleTouchStart() {
      this.$emit("touchStart");
    },
    handleReachEnd() {
      this.$emit("reachEnd");
    },
    handleSlideChange() {
      this.$emit("slideChange");
    },
  },
  mounted() {
    console.log(this._uid);
  },
};
</script>

<style lang="scss" scoped>
[class^="swiper"] {
  //   height: 460px;
  height: auto;
}
.swiper-container {
  height: 100%;
}
.swiper-slide {
  &.text {
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}
</style>
