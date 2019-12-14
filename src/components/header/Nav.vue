<template>
  <!-- 最新热点的nav -->
  <div style="overflow:hidden;">
    <ul class="header">
      <li class="header-nav" @click="noShow">
        <router-link to="/" exact>首页</router-link>
      </li>
      <li class="header-nav" @click="show">
        <router-link to="#" exact>课程</router-link>
      </li>
      <li class="header-nav" @click="noShow">
        <router-link to="/teacher" exact>师资</router-link>
      </li>
      <li class="header-nav" @click="noShow">
        <router-link to="/job" exact>就业</router-link>
      </li>
      <li class="header-nav" @click="noShow">
        <router-link :to="{path:'/Information',query:{navID:1}}" exact>资讯</router-link>
      </li>
      <li class="header-nav" @click="noShow">
        <router-link to="/about" exact>关于</router-link>
      </li>
    </ul>
    <ClassInfo :isShow="isShow" @getShow="postShow" />
  </div>
</template>
<script>
import ClassInfo from "./ClassInfo";
export default {
  components: {
    ClassInfo
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    postShow: function(val) {
      this.isShow = val;
    },
    noShow() {
      this.isShow = false;
    }
  }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
a {
  text-decoration: none;
  color: #282828;
  padding-bottom: 5px;
}
.router-link-active {
  color: #0084ff;
  border-bottom: solid #0084ff;
  display: inline-block;
  width: 100%;
}
.header {
  overflow: hidden;
  /* padding:32px 30px;; */
  background: #f4f4f4;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  height: 96px;
  position: relative;
}
.header li {
  float: left;
  font-size: 30px;
  color: #282828;
  /* font-weight: bold; */
  text-align: center;
  /* padding-top: 32px; */
  line-height: 86px;
  text-decoration: none;
}

.header-nav {
  width: 16.6%;
}
</style>
