<template>
  <div class="hot">
    <div class="line"></div>
    <div class="img">
      <img src="../assets/images/banner1.png" alt />
    </div>
    <div style="overflow:hidden">
      <div class="blue"></div>
      <p class="title">最新热点</p>
      <router-link to="/Information">
        <p class="more">更多></p>
      </router-link>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from "./navigation/Nav";
export default {
  components: {
    Nav
  },
  data() {
    return {
      id: ""
    };
  },
  methods: {}
};
</script>

<style>
.hot {
  padding-top: 52px;
}
.line {
  background: #f4f4f4;
  height: 12px;
}
.hot .img {
  text-align: center;
  margin-top: 42px;
  margin-bottom: 52px;
}
.hot .img img {
  width: 689px;
  height: 240px;
  border-radius: 10px;
}
.hot .blue {
  width: 6px;
  height: 30px;
  background: #64b3f1;
  float: left;
  margin-top: 5px;
  margin-left: 30px;
}
.title {
  font-size: 32px;
  color: #282828;
  font-weight: bold;
  float: left;
  margin-left: 22px;
}
.hot .more {
  float: right;
  font-size: 22px;
  margin-right: 35.5px;
  line-height: 44px;
  color: #666;
}
</style>
