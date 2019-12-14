<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Index from "./components/Index";
export default {
  name: "App",
  components: {
    Index
  }
};
</script>

<style>
#app {
  font-family: 'SourceHanSansCN';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 110px;
}
</style>
