<!--
 * @Author: Blueth007
 * @Date: 2022-03-30 14:16:56
 * @LastEditTime: 2022-04-07 16:54:37
 * @Description: 
 * MIT
-->
<template>
  <div>
    <div class="nav_list">
      <swiper class="swiper0" :options="option">
        <swiper-slide
          class="slide"
          v-for="nav in navTags"
          :key="nav.id"
          :data-id="nav.id"
        >
          <div @click="getTypeList(nav)">
            {{ nav.name }}
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="list_content">
      <swiper class="swiper_l" :options="swiperOption_l" ref="swiper_l">
        <swiper-slide class="menu">
          <!-- <div class="btn_icon" @click="isHide = true">✖</div> -->
          <div class="content_text">
            <swiper-content>
              <item-song
                :playingId="playingId"
                v-for="song in myLists"
                :key="song.id"
                :song="song"
                @click.native="setSong(song)"
              ></item-song>
            </swiper-content>
          </div>
        </swiper-slide>
        <swiper-slide class="content">
          <div class="content_text">
            <swiper-content>
              <TagLists :tags="tags" @setTagId="setTagId"></TagLists>
            </swiper-content>
          </div>
          <div
            class="menu-button"
            :class="{ opened: menuOpened }"
            @click="toggleMenu($event)"
          >
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import swiperContent from "../../tinyComponent/swiperContent.vue";
// import "swiper/css/swiper.css";
import nav_list from "./nav_list.json";
import listJson from "./idToList.json";

import TagLists from "./TagLists.vue";
import itemSong from "./ItemSong.vue";

export default {
  name: "Item",
  components: {
    Swiper,
    SwiperSlide,
    // eslint-disable-next-line vue/no-unused-components
    TagLists,
    // eslint-disable-next-line vue/no-unused-components
    itemSong,
    swiperContent,
  },
  props: {
    playingId: {
      type: [Number, String],
      default: 108418,
    },
    plist: {
      type: Array,
      default: () => listJson.playlist.tracks,
    },
  },
  data() {
    const vm = this;
    return {
      navTags: nav_list.tags,
      // playingId: 108418,
      // lists: listJson.playlist.tracks,
      tags: [],
      isHide: true,
      option: {
        slidesPerView: 5,
        preventClicks: false,
        freeMode: true,
        navigation: {
          draggable: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      menuOpened: false,
      swiperOption_l: {
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: "auto",
        on: {
          slideChange: () => {
            // vm.$refs.swiper_l.updateSwiper();
            console.log("slide:");
            vm.menuOpened = vm.$refs.swiper_l.$el.swiper.activeIndex === 0;
          },
        },
      },
    };
  },

  watch: {},
  filters: {},
  computed: {
    myLists({ plist }) {
      let a = JSON.stringify(plist, [
        "dt",
        "duration",
        "ar",
        "artists",
        "id",
        "name",
        "mv",
        "al",
        "picUrl",
        "img1v1Url",
      ]);
      return JSON.parse(a);
    },
    swiper_l() {
      return this.$refs.swiper_l.$swiper;
    },
  },
  methods: {
    getTypeList(item) {
      console.log(item);
      this.$axios("/music/top/playlist?limit=20&cat=" + item.name).then(
        ({ data }) => {
          // console.log(data);
          if (data.code == 200) {
            this.tags = data.playlists;
          } else {
            alert("没有tagLists");
          }
        }
      );
    },
    setTagId(id) {
      this.$axios.get("/music/playlist/detail?id=" + id).then(({ data }) => {
        // 根据tracksIds 再去请求所有的歌曲信息
        let trackIds = data.playlist.trackIds.map((item) => item.id);
        this.$axios
          .get("/music/song/detail", {
            params: { ids: trackIds.join(",") },
          })
          .then((rest) => {
            // console.log("dd", rest);
            if (rest.status == 200) {
              let lists = rest.data.songs;
              this.$emit("update:plist", lists);
              this.toggleMenu();
            }
          });
      });
    },
    setSong(music) {
      // console.log("updatePlay", music);
      this.$emit("updatePlay", music);
    },
    toggleMenu() {
      // console.log("toggle:", this.$refs.swiper_l.$swiper);
      this.menuOpened
        ? this.$refs.swiper_l.$swiper.slideNext()
        : this.$refs.swiper_l.$swiper.slidePrev();
      // console.log(this.menuOpened);
    },
  },
  created() {},
  mounted() {
    this.getTypeList({ name: "华语" });
    // if (!this.plist || this.plist.length == 0) {
    //   this.plist = listJson.playlist.tracks;
    // }
  },
};
</script>
<style lang="scss" scoped>
.nav_list {
  padding: 5px 0;

  cursor: pointer;
  v-deep .swiper-container-free-mode > .swiper-wrapper {
    margin-left: 10px;
    text-align: center;
  }
  .slide {
    font-weight: 900;
    text-align: center;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #ccc;
  }
  .swiper-button-prev {
    left: 4px;
  }
  .swiper-button-next {
    right: 4px;
  }
}
.list_content {
  height: 480px;

  .content_text {
    height: 480px;
  }
}

// .isHided {
//   // transform: translate(0, -999px);
// }

.swiper_l {
  height: 480px;
  width: 100%;
  position: relative;
  .swiper-slide {
    display: flex;
    flex-direction: column;
  }
  .menu {
    min-width: 100px;
    width: 250px;
    // background-color: #2c8dfb !important;
    // color: #fff;
  }
  .content {
    width: 100%;
  }
  .menu-button {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: 0.3s;
    background-color: rgb(17 127 148 / 30%);
    z-index: 999;
    .bar {
      position: relative;
      display: block;
      width: 25px;
      height: 5px;
      margin: 5px auto;
      background-color: #fff;
      border-radius: 10px;
      transition: 0.3s;
      &:nth-of-type(1) {
        margin-top: 0px;
      }
      &:nth-of-type(3) {
        margin-bottom: 0px;
      }
    }
    &:hover {
      .bar:nth-of-type(1) {
        transform: translateY(1.5px) rotate(-4.5deg);
      }
      .bar:nth-of-type(2) {
        opacity: 0.9;
      }
      .bar:nth-of-type(3) {
        transform: translateY(-1.5px) rotate(4.5deg);
      }
    }
    &.opened {
      .bar:nth-of-type(1) {
        transform: translateY(15px) rotate(-45deg);
      }
      .bar:nth-of-type(2) {
        opacity: 0;
      }
      .bar:nth-of-type(3) {
        transform: translateY(-15px) rotate(45deg);
      }
      &:hover {
        .bar:nth-of-type(1) {
          transform: translateY(13.5px) rotate(-40.5deg);
        }
        .bar:nth-of-type(2) {
          opacity: 0.1;
        }
        .bar:nth-of-type(3) {
          transform: translateY(-13.5px) rotate(40.5deg);
        }
      }
    }
  }
}
</style>
