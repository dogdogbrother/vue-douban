<template>
  <div id="app">
    <douban-header></douban-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header'

export default {
  name: 'app',
  components:{
    "douban-header":Header
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
}
</style>
