<template>
  <!-- 咨询分页导航 -->
  <div class="sub-info" style="overflow:hidden">
    <ul class="naviagation">
      <li @click="news" :class="navID=== 1 ? 'active':'deactive'">新闻</li>
      <li @click="corp" :class="navID=== 2 ? 'active':'deactive'">合作</li>
      <li @click="act" :class="navID=== 3 ? 'active':'deactive'">活动</li>
      <li @click="experience" :class="navID=== 4 ? 'active':'deactive'">心得</li>
      <li @click="video" :class="navID=== 5 ? 'active':'deactive'">视频</li>
    </ul>
    <!-- <div class="line"></div> -->
    <News :navID="navID" />
    <Cor :navID="navID" />
    <Act :navID="navID" />
    <Experience :navID="navID" />
    <Video :navID="navID" />
  </div>
</template>

<script>
import News from "./News";
import Cor from "./Cor";
import Act from "./Act";
import Experience from "./Experience";
import Video from "./VideoList";
export default {
  data() {
    return {
      navID: ""
    };
  },
  beforeMount() {
    if (parseInt(localStorage.getItem("temp"))) {
      this.navID = parseInt(localStorage.getItem("temp"));
    } else {
      this.navID = 1;
    }
  },
  mounted() {
    localStorage.clear();
  },
  components: {
    News,
    Cor,
    Act,
    Experience,
    Video
  },
  methods: {
    news() {
      this.navID = 1;
      localStorage.setItem("temp", this.navID);
    },
    corp() {
      this.navID = 2;
      localStorage.setItem("temp", this.navID);
    },
    act() {
      this.navID = 3;
      localStorage.setItem("temp", this.navID);
    },

    experience() {
      this.navID = 4;
      localStorage.setItem("temp", this.navID);
    },
    video() {
      this.navID = 5;
      localStorage.setItem("temp", this.navID);
      // this.$emit("postID", this.navID);
    }
  }
};
</script>

<style>
/* .sub-info {
  padding-bottom: 60px;
} */
.sub-info .naviagation {
  /* padding-left: 30px; */
  margin-top: 8px;
  margin-bottom: 0px;
  overflow: hidden;
  background: #ffffff;
  line-height: 54px;
  letter-spacing: 2px;
  padding: 12.7px 30px;
}
.sub-info .active {
  background: #0084ff !important;
  color: #ffffff !important;
  border-radius: 50px;
}
.sub-info .deactive {
  color: #0084ff !important;
}
.sub-info .naviagation li {
  float: left;
  font-size: 28px;
  color: #0084ff;
  width: 20%;
  text-align: center;
  height: 54px;
  /* font-weight: bold; */
}
.sub-info .naviagation li:hover {
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
