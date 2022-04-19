<!--
 * @Author: Blueth007
 * @Date: 2022-04-01 12:50:49
 * @LastEditTime: 2022-04-07 15:46:32
 * @Description: 
 * MIT
-->
<template>
  <div class="item">
    <div
      :class="['song', playingId === song.id ? 'active' : '']"
      :title="song.name"
    >
      <span class="songIcon"></span>
      <span class="songName">{{ song.name }} </span>
      <span class="songer"
        >{{
          song.ar
            ? song.ar[0].name
            : song.artists
            ? song.artists[0].name
            : "songer"
        }}
      </span>
      <span class="songDuration">
        {{ (song.dt || song.duration) | formatMs }}
      </span>
      <span
        class="mv-icon is"
        @click.self="playMv(song)"
        :style="song.mv || song.mvid ? 'background-position: -30px -45px;' : ''"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSong",

  props: {
    playingId: {
      typeof: [Number, String],
      default: 0,
    },
    song: {
      type: Object,
      default: () => ({
        id: 1,
        name: "海阔天空",
        ar: [{ name: "黄家驹" }],
        dt: "90",
        mv: 1101,
      }),
    },
  },
  filters: {
    formatMs(second) {
      // const h = Math.floor(second / 1000 / 3600)
      const m = Math.floor((second / 1000 / 60) % 60);
      const s = Math.floor((second / 1000) % 60);
      return m + ":" + (s < 10 ? "0" + s : s);
    },
  },
  methods: {
    mounted() {},
  },
};
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  overflow: hidden;
  padding: 5px 8px;
  font-size: 12px;
  cursor: pointer;
  .song {
    border-radius: 3px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }

  .songName,
  .songer {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
  }
  // .songName {
  //   width: 35%;
  // }
  // .songer {
  //  flex: 1;
  // }
  .songDuration {
    width: 40px;
    text-align: center;
  }
  .songIcon,
  .mv-icon {
    width: 23px;
    height: 23px;
    background: url("../../../assets/table.png") no-repeat;
    background-position: 30px 45px;
  }
}
.item:hover {
  background-color: rgba(41, 238, 228, 0.527);
}
.active {
  background-color: rgb(207 170 101 / 61%);
  .songIcon {
    background-position: -17px -22px;
  }
}
</style>
