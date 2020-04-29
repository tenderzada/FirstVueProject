<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 元素占位 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App'
}
</script>

<style>
</style>
