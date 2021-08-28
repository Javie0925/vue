<template>
  <div id="app">
    <router-link to="/main"></router-link>
    <h1>首页</h1>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
