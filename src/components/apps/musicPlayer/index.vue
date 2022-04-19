<!--
 * @Author: Blueth007
 * @Date: 2022-03-29 17:08:42
 * @LastEditTime: 2022-04-07 16:53:33
 * @Description: 
 * MIT
-->

<template>
  <div class="music_container">
    <h1>musicPlayer</h1>
    <div class="nav_search">
      <input type="text" placeholder="search" v-model.lazy="search" />
      <button class="btn" @click="searchSong">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="24"
        >
          <path
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="music_content">
      <div class="left_list">
        <left-list
          ref="child_left"
          :playingId="playingId"
          :plist.sync="playList"
          @updatePlay="updatePlay"
        ></left-list>
      </div>
      <div :class="['middle_content', isPlay ? 'playing' : 'paused']">
        <div class="center_middle">
          <div class="disc" @click="isPlay = !isPlay">
            <img src="@/assets/disc.png" alt="disc" />
            <img :src="coverUrl" alt="cover" id="cover" />
          </div>
        </div>
        <div class="toggleBar">
          <img src="@/assets/play-bar.png" alt="play-bar" srcset="" />
        </div>
      </div>
      <div class="right_comment">
        <h3>评论列表</h3>
        <div class="scroll">
          <Comment :playingId="playingId"></Comment>
        </div>
      </div>
    </div>
    <div class="music_bar">
      <audio
        controls
        ref="audio"
        :src="playUrl"
        @pause="onPause"
        @play="onPlay"
        @ended="onEnded"
      >
        您的浏览器不支持 audio 元素。
      </audio>
    </div>
  </div>
</template>

<script>
import leftList from "./LeftList.vue";
import Comment from "./Comment.vue";

export default {
  components: { leftList, Comment },

  data() {
    return {
      isPlay: false,
      coverUrl: require("@/assets/cover.png"),
      playUrl: "",
      playingId: null,
      playList: [],
      search: "海阔",
    };
  },
  watch: {
    isPlay(v) {
      v ? this.$refs.audio.play() : this.$refs.audio.pause();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.audio.addEventListener("canplay", () => {
        this.$refs.audio.play();
      });
    });
  },
  methods: {
    getMusic(id) {
      this.$axios("/music/song/url?id=" + id).then(({ data }) => {
        let song = data.data[0];
        if (data.code == 200) {
          this.playUrl = song.url;
        } else {
          this.playUrl =
            "https://music.163.com/song/media/outer/url?id=" + id + ".mp3 ";
        }
      });
    },
    updatePlay(music) {
      let id = music.id;

      if (id == this.playingId) {
        this.isPlay = !this.isPlay;
        this.isPlay ? this.$refs.audio.play() : this.$refs.audio.pause();
      } else {
        this.playingId = id;
        this.getMusic(id);
        this.coverUrl = music.al?.picUrl || music.artists?.img1v1Url;
      }
    },
    searchSong() {
      console.log(this.search); ///
      this.$axios
        .get("/music/search?keywords=" + this.search)
        .then(({ data }) => {
          console.log(data);
          if (data.code == 200) {
            // this.searchList = data.result.songs;
            this.playList = data.result.songs;
            this.$refs.child_left.toggleMenu();
          }
        });
    },
    onPause() {
      console.log("onPause");
      this.isPlay = false;
    },
    onPlay() {
      console.log("playing");
      this.isPlay = true;
    },
    playMode() {
      let idx = 0;
      idx = this.playList.findIndex((it) => it.id == this.playingId);
      console.log(idx);
      if (idx >= this.playList.length - 1) {
        idx = 0;
      } else {
        idx++;
      }
      this.updatePlay(this.playList[idx]);
    },
    updateList(list = []) {
      this.playList = list;
    },
    onEnded() {
      console.log("end");
      this.playMode();
    },
  },
};
</script>

<style lang="scss" scoped>
.music_container,
.music_content,
.middle_content {
  position: relative;
  display: flex;
  -webkit-display: flex;
}
.music_content {
  align-items: stretch;
  .left_list {
    width: 300px;
  }
  .middle_content {
    flex: 1;
  }
  .right_comment {
    width: 250px;
  }
}
.middle_content {
  justify-content: center;
  // align-items: center;
  position: relative;

  .disc {
    position: relative;
    top: 50px;
    display: inline-block;
    -webkit-animation: playingRound 6s 2s linear infinite; /* Safari 与 Chrome */
    animation: playingRound 6s 2s linear infinite;
    img {
      width: 100%;
    }
    #cover {
      position: absolute;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
  .toggleBar {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 180px;
    transform-origin: 0 0;
    transition: transform 2s;
  }
}
.paused {
  .toggleBar {
    -webkit-transform: rotate(-30deg);
    -ms-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }
  .disc {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
}
.playing {
  .toggleBar {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .disc {
    animation-play-state: running;
    -webkit-animation-play-state: running;
  }
}
.nav_search {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  input,
  button {
    outline: none;
    border: none;
    font-size: 1.5rem;
  }
  input[type="text"] {
    width: 300px;
    padding: 8px;
    padding-right: 50px;
    border-radius: 8px;
  }
  .btn {
    width: 35px;
    background: transparent;
    margin-left: -45px;
  }
}
.music_bar {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 1rem;
  right: 0;
  left: 0;
  audio {
    width: 40%;
  }
}

.music_container {
  height: 700px;
  background-image: url("../../../assets/background.jpg");
  background-size: cover;
  flex-direction: column;
}

@keyframes playingRound {
  from {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes playingRound {
  /* Safari 与 Chrome */
  from {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
