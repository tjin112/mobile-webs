
<template>
  <!-- 咨询分页导航 -->
  <div>
    <v-header />
    <div class="sub-about" style="overflow:hidden">
      <ul class="naviagation">
        <li @click="news" :class="navID=== 1 ? 'active':'deactive'">简介</li>
        <li @click="corp" :class="navID=== 2 ? 'active':'deactive'">历程</li>
        <li @click="act" :class="navID=== 3 ? 'active':'deactive'">荣誉</li>
        <li @click="experience" :class="navID=== 4 ? 'active':'deactive'">校区</li>
      </ul>
      <!-- <div class="line"></div> -->
      <Introduction :navID="navID" />
      <Road :navID="navID" />
      <Honor :navID="navID" />
      <Camp :navID="navID" />
    </div>
  </div>
</template>

<script>
import VHeader from "../header/VHeader";
import Introduction from "./Introduction";
import Road from "./Road";
import Honor from "./Honor";
import Camp from "./Camp";
export default {
  data() {
    return {
      navID: ''
    };
  },
  components: {
    VHeader,
    Introduction,
    Road,
    Honor,
    Camp
  },
  beforeMount() {
    if (parseInt(localStorage.getItem("tempID"))) {
      this.navID = parseInt(localStorage.getItem("tempID"));
    }else{
      this.navID = 1;
    }
  },
  mounted() {
    localStorage.clear();
  },
  methods: {
    news() {
      this.navID = 1;
    },
    corp() {
      this.navID = 2;
    },
    act() {
      this.navID = 3;
    },

    experience() {
      this.navID = 4;
    }
  }
};
</script>

<style>
.sub-about .naviagation {
  /* padding-left: 30px; */
  margin-top: 8px;
  margin-bottom: 0px;
  overflow: hidden;
  background: #ffffff;
  line-height: 54px;
  letter-spacing: 2px;
  padding: 12.7px 30px;
}
.sub-about .active {
  background: #0084ff !important;
  color: #ffffff !important;
  border-radius: 50px;
}
.sub-about .deactive {
  color: #282828 !important;
}
.sub-about .naviagation li {
  float: left;
  font-size: 28px;
  color: #282828;
  width: 25%;
  text-align: center;
  height: 54px;
  /* font-weight: bold; */
}
.sub-about .naviagation li:hover {
  background: #0084ff;
  color: #ffffff;
  border-radius: 50px;
}
/* .sub-info .click {
  margin-left: 128px;
} */
.naviagate .line {
  margin-bottom: 34px;
}
</style>
