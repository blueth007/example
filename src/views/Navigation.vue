<!--
 * @Author: Blueth007
 * @Date: 2022-03-07 14:49:32
 * @LastEditTime: 2022-03-07 17:07:41
 * @Description: 
 * MIT
-->

<template>
  <header class="navbar">
    <ul class="navbar_list">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="">首页</router-link></li>
      <li><router-link to="/article">文章</router-link></li>
      <li><router-link to="/office">office</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 5rem;
  z-index: 250;
  font-size: 16px;
  .navbar_list {
    display: flex;
    li,
    a {
      display: inline-block;
      margin: 0 1.334rem;
      height: 5rem;
      line-height: 5rem;
    }
  }
}
</style>
