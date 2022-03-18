<!--
 * @Author: Blueth007
 * @Date: 2022-03-07 17:02:45
 * @LastEditTime: 2022-03-15 12:34:19
 * @Description: 
 * MIT
-->

<template>
  <div class="office_container">
    <ul class="nav_list">
      <li>
        <router-link class="linkItem" to="/office/docPreview">docx</router-link>
      </li>
      <li>
        <router-link class="linkItem" to="/office/excelPreview"
          >excel</router-link
        >
      </li>
      <li>
        <router-link class="linkItem" to="/office/pdfPreview">pdf</router-link>
      </li>
      <li>
        <router-link class="linkItem" to="/office/editor">富文本</router-link>
      </li>
    </ul>
    <div class="officeView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.office_container {
  width: 1400px;

  margin: 0 auto;
  font-size: 1.5rem;
}
.nav_list {
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    display: inline-block;
  }
  li a {
    display: inline-block;
    margin: 15px;
    padding: 8px 20px;
    border-radius: 8px;
    background-color: #37e79e;
  }
  .router-link-exact-active {
    /* 路由点击后的样式 */
    background-color: orange;
    /* 添加需要的样式 */
  }
}
.officeView {
  width: 1200px;
  margin: 0 auto;
}
</style>
