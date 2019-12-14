<template>
  <!-- 最新热点的nav -->
  <div style="overflow:hidden">
    <ul class="naviagate">
      <li @click="news" :class="navID=== 1 ? 'active':'deactive'">新闻</li>
      <li class="click" @click="corp">合作</li>
      <li class="click" @click="act">活动</li>
      <li class="click" @click="experience">心得</li>
    </ul>
    <div class="line"></div>
    <News :navID="navID" />
    <Cor :navID="navID" />
    <Act :navID="navID" />
    <Experience :navID="navID" />
  </div>
</template>

<script>
import News from "./News";
import Cor from "./Cor";
import Act from "./Act";
import Experience from "./Experience";
export default {
  data() {
    return {
      navID: 1
    };
  },
  components: {
    News,
    Cor,
    Act,
    Experience
  },
  methods: {
    news() {
      this.navID = 1;
      this.$emit("postID", this.navID);
    },
    corp() {
      this.navID = 2;
      this.$emit("postID", this.navID);
    },
    act() {
      this.navID = 3;
      this.$emit("postID", this.navID);
    },

    experience() {
      this.navID = 4;
      this.$emit("postID", this.navID);
    }
  }
};
</script>

<style>
.naviagate {
  padding-left: 70px;
  margin-top: 42px;
  margin-bottom: 28px;
  overflow: hidden;
}
.active {
  color: #0084ff !important;
}
.deactive {
  color: #282828 !important;
}
.naviagate li {
  float: left;
  font-size: 30px;
  color: #282828;
  font-weight: bold;
}
.naviagate li:hover {
  color: #0084ff;
  /* font-size: 30px; */
}
.click {
  margin-left: 128px;
}
.naviagate .line {
  margin-bottom: 34px;
}
</style>
