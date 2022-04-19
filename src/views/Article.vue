<!--
 * @Author: Blueth007
 * @Date: 2022-03-07 15:37:36
 * @LastEditTime: 2022-03-29 10:53:50
 * @Description: 
 * MIT
-->
<template>
  <div>
    <Navigation></Navigation>
    <main class="main content">
      <div class="main-area">
        <article>
          <ul>
            <li v-for="item in lists" :key="item.id">
              <router-link :to="'/article/' + item.id">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </article>
      </div>
      <div class="sidebar">sidebar</div>
    </main>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  name: "Article",
  components: { Navigation },
  data() {
    return {
      lists: [
        {
          id: 1,
          title: "article 1",
        },
        {
          id: 2,
          title: "article 2",
        },
        {
          id: 3,
          title: "article 3",
        },
        {
          id: 4,
          title: "article 4",
        },
        {
          id: 5,
          title: "article 5",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1024px;
  min-height: calc(100vh - 5.1rem);

  .main-area {
    position: relative;
    width: 820px;
    max-width: 100%;
    box-sizing: border-box;
    border: 1px solid #15d34e;

    article {
      background: #ffff;
      padding: 2.68rem;
      font-size: 16px;
    }
  }
  .sidebar {
    position: absolute;
    right: 0;
    top: 0;
    border: 1px solid #ac1b1b;
    background: #ffff;
    width: 25rem;
    height: 100%;
    padding: 1.67rem;
    box-sizing: border-box;
    font-size: 16px;
  }
}
</style>
