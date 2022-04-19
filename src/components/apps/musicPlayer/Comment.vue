<!--
 * @Author: Blueth007
 * @Date: 2022-03-30 14:17:07
 * @LastEditTime: 2022-04-07 16:53:46
 * @Description: 
 * MIT
-->
<template>
  <div class="commentItem">
    <swiperContent @reachEnd="handleReachEnd">
      <div
        v-for="(comment, index) in myLists"
        class="content"
        :key="comment.commentId + index"
      >
        <div class="avatars">
          <img
            :src="comment.user.avatarUrl"
            alt="person"
            v-if="comment.user.avatarUrl"
          />
          <img src="@/assets/person.png" alt="person" v-else />
        </div>
        <div class="content_right">
          <h5>{{ comment.user.nickname }}</h5>
          <p>{{ comment.content }}</p>
          <p class="line-center">
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="18"
              >
                <path
                  v-if="comment.liked"
                  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                ></path>
                <path
                  v-else
                  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                ></path>
              </svg>
            </span>
            <span class="text"> {{ comment.likedCount }}</span>
            <span class="time">{{ comment.timeStr }}</span>
          </p>
        </div>
      </div>
    </swiperContent>
  </div>
</template>

<script>
import swiperContent from "../../tinyComponent/swiperContent.vue";

// eslint-disable-next-line no-unused-vars
import commentsList from "./comment.json";
export default {
  name: "Comment",
  components: { swiperContent },
  props: {
    playingId: {
      type: [String, Number],
    },
    // comments: {
    //   type: Array,
    //   default: () => commentsList.hotComments,
    // },
  },
  data() {
    return {
      offset: 1,
      comments: commentsList.hotComments,
    };
  },
  watch: {
    playingId(newValue) {
 
      this.comments = [];
      this.getComment(newValue);
    },
  },
  computed: {
    myLists({ comments }) {
      if (!comments || comments.length == 0) {
        return [];
      }
      let a = JSON.stringify(comments, [
        "commentId",
        "user",
        "nickname",
        "avatarUrl",
        "content",
        "time",
        "timeStr",
        "liked",
        "likedCount",
      ]);
      let res = JSON.parse(a);
      // console.log("computed:", res);
      return res;
    },
  },
  methods: {
    FormatTime(time) {
      return new Date(time).toLocaleDateString();
    },
    handleReachEnd() {
      this.offset++;
      this.getComment(this.playingId);
    },
    getComment(id) {
      if (!id) {
        return;
      }
      let offset = this.offset;
      this.$axios
        .get("/music/comment/music?id=" + id + "&offset=" + offset)
        .then(({ data }) => {
          // console.log(data);
          if (data.code == 200 && data.comments.length > 0) {
            this.comments.push(...data.comments);
 
          }
        });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.commentItem {
  height: 480px;
  .content_text {
    height: auto;
  }
  .content {
    display: flex;
    display: -webkit-flex;
    margin: 5px 0;
    .avatars {
      width: 40px;
      display: inline-block;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }

    .content_right {
      flex: 1;
      margin-left: 5px;
      h5 {
        font-size: 1.3rem;
      }
      font-size: 1.05rem;
      &::after {
        clear: both;
        content: "";
        display: table;
      }
      .line-center {
        font-size: 1.2rem;
        vertical-align: middle;
      }
      .icon,
      .text {
        vertical-align: middle;
        display: inline-block;
      }
      .time {
        float: right;
      }
    }
  }
}

.commentItem * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
