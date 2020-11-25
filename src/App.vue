<!--
 * @Description: file content
 * @Author: sunkl
 * @Date: 2020-09-20 03:49:48
 * @LastEditors: sunkl
 * @LastEditTime: 2020-11-26 02:16:13
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
  }
}
</script>

<style>
@import '~@/assets/scss/reset.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
