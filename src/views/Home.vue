<!--
 * @Author: Blueth007
 * @Date: 2022-03-07 14:48:57
 * @LastEditTime: 2022-04-08 11:05:54
 * @Description: 
 * MIT
-->
<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="wrapper crossbanner main">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <h1>这是首页宣传AD</h1>
        </swiper-slide>
        <swiper-slide v-for="img in imgsList" :key="img.id">
          <img :src="img.download_url" alt="" srcset="" width="100%" />
        </swiper-slide>
        <swiper-slide> <h1>这里引用 vue-awesome-swiper 插件</h1></swiper-slide>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>
    <content>
      <ul>
        <li>
          <div
            id="firstbg"
            class="first activebg"
            :style="'background-positionY:' + top * 0.05 + 'px'"
          >
            <div class="tabAd1 web-font">
              <h2>休闲时光</h2>
              <p>
                努力去做一个温暖的人，用真心对世界微笑，用眼泪提醒自己要做的更好，用快乐去迎接每一天的阳光，用自信向世界宣称你过得很好
              </p>
            </div>
          </div>
          <div class="desc main">
            <div class="leftbar">
              <p>我听见回声，来自山谷和心间</p>
              <p>以寂寞的镰刀收割空旷的灵魂</p>
              <p>不断地重复决绝，又重复幸福</p>
              <p>终有绿洲摇曳在沙漠</p>
              <p>我相信自己</p>
              <p>生来如同璀璨的夏日之花</p>
              <p>不凋不败，妖治如火</p>
              <p>承受心跳的负荷和呼吸的累赘</p>
              <p>乐此不疲</p>
              <p style="float: right">--《泰戈尔·生如夏花》</p>
            </div>
            <div class="rightbar">
              <div class="img_c">
                <img src="https://picsum.photos/id/976/1370/795" alt="" />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div
            id="secondbg"
            class="second activebg"
            :style="'background-positionY:' + top * 0.07 + 'px'"
          >
            <div class="tabAd2 web-font">
              <h2>努力工作</h2>
              <p>
                没有哪件事，不动手就可以实现。只要你愿意走，哪里都会有路。看不到美好，是因为你没有坚持走下去，人生贵在行动，迟疑不决时，不妨先迈出一小步
              </p>
            </div>
          </div>
          <div class="desc main">
            <div class="leftbar">
              <p>是男儿总要走向远方，</p>
              <p>走向远方是为了让生命更辉煌，</p>
              <p>走在崎岖不平的路上，</p>
              <p>年轻的眼眸里装着梦更装着思想。</p>
              <p>不论是孤独地走着还是结伴同行，</p>
              <p>让每一个脚印都坚实而有力量。</p>
              <p>走向远方，</p>
              <p>从少年到青年，</p>
              <p>从青年到老年，</p>
              <p>我们从星星走成了夕阳。</p>
              <p style="float: right">--《汪国真·走向远方》</p>
            </div>
            <div class="rightbar">
              <div class="img_c">
                <img
                  src=" https://picsum.photos/id/177/1092/790"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </content>
    <footer>
      <h2>footer</h2>
      <p>
        <a>
          <img
            class="sponsor"
            alt="Powered by DigitalOcean"
            src="https://picsum.photos/assets/images/digitalocean.svg"
        /></a>

        <a href="https://cloud.tencent.com/">
          <img
            class="sponsor"
            src="https://cloudcache.tencentcs.com/qcloud/portal/kit/images/slice/logo.23996906.svg"
            alt=""
        /></a>
      </p>
      <p>
        <a href="https://picsum.photos/">
          Images from Unsplash && Lorem Picsum && QQ && weibo
        </a>
      </p>
      <p>Design By Blueth007 && github:.......</p>
      <p>This website is only for learning and communication</p>
    </footer>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapState } from "vuex";
import "swiper/css/swiper.css";
export default {
  name: "Home",
  components: { Navigation, Swiper, SwiperSlide },
  created() {},
  data() {
    return {
      top: 0,
      imgsList: [
        {
          id: "0",
          author: "Alejandro Escamilla",
          width: 5616,
          height: 3744,
          url: "https://weibo.com/3217742437/LeNzs8jaZ?layerid=4735271461980341",
          download_url:
            "https://wx2.sinaimg.cn/mw2000/bfcada65gy1gz87gh9l40j25xc3c0kjq.jpg",
        },
      ],
      swiperOption: {
        loop: true,
        autoplay: { delay: 2000 },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  watch: {},
  mounted() {
    document.addEventListener("scroll", this.scrollY);
    this.imgsList = this.navbarImgs;
    console.log(this.navbarImgs);
    // this.getPictures();
  },
  computed: {
    ...mapState(["navbarImgs"]),
  },
  methods: {
    scrollY() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.top = 0 - scrollTop;
      // console.log(scrollTop, this.top);
    },
    getPictures() {
      this.$axios("https://picsum.photos/v2/list?limit=3").then(({ data }) => {
        this.imgsList = data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  min-height: calc(100vh - 5.1rem);
}
// .main {
//   width: 1024px;
//   margin: 0 auto;
// }
header,
content,
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    vertical-align: middle;
  }
}
content {
  flex-grow: 1;
  margin: 0 auto;
}
footer {
  height: 300px;
  padding: 25px;
  text-align: center;
  background: black;
  color: #fff;
}
.wrapper {
  // height: ;
  width: 100%;
  max-width: 1024px;
}
.crossbanner {
  height: 560px;
}
.first {
  background-image: url("../assets/firstbg2.png");
}
.tabAd1 {
  position: absolute;
  width: 360px;
  top: 120px;
  left: 34%;
  color: white;
  h2 {
    text-align: center;
    font-size: 4.5rem;
    margin: 2rem;
  }
  p {
    font-family: "Microsoft YaHei", arial, tahoma, \5b8b\4f53, sans-serif;
    font-size: 1.75rem;
  }
}
.tabAd2 {
  position: absolute;
  width: 400px;
  top: 120px;
  left: 50%;
  color: #fff;
  h2 {
    text-align: center;
    font-size: 4.5rem;
    margin: 2rem;
  }
  p {
    font-family: "Microsoft YaHei", arial, tahoma, \5b8b\4f53, sans-serif;
    font-size: 1.75rem;
  }
}

.second {
  background-image: url("../assets/avd.jpg");
}
.activebg {
  position: relative;
  // margin: 0 -900px;
  height: 600px;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.desc {
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 400px;
  font-size: 1.35rem;
  font-family: "楷体", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 900;
  background-color: #e8e3dc;
  .leftbar {
    width: 500px;
    padding-left: 140px;
    overflow: hidden;
    ::after {
      content: "";
      display: table;
      clear: both;
    }
    p {
      margin: 0.75em;
    }
  }
  .rightbar {
    flex-grow: 1;
    min-width: 50%;
    text-align: center;
    .img_c {
      display: inline-block;
      font-size: 0;
    }
    img {
      position: relative;
      border-radius: 8px;
      width: 64%;
    }
  }
}
.sponsor {
  height: 40px;
  margin: 0 1rem;
}
.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: white;
  }
}
@font-face {
  font-family: "webfont";
  font-display: swap;
  src: url("//at.alicdn.com/t/webfont_j24mgawavfh.eot"); /* IE9*/
  src: url("//at.alicdn.com/t/webfont_j24mgawavfh.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//at.alicdn.com/t/webfont_j24mgawavfh.woff2")
      format("woff2"),
    url("//at.alicdn.com/t/webfont_j24mgawavfh.woff") format("woff"),
    /* chrome、firefox */ url("//at.alicdn.com/t/webfont_j24mgawavfh.ttf")
      format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/webfont_j24mgawavfh.svg#杨任东竹石体-Bold")
      format("svg"); /* iOS 4.1- */
}
.web-font {
  font-family: "webfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
