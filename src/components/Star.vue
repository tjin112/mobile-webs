<template>
  <!-- 首页的就业明星模块 -->
  <!-- swiper -->
  <div class="start">
    <div style="overflow:hidden;margin-bottom:15px;">
      <div class="blue"></div>
      <p class="title">就业明星</p>
      <router-link to="/stardetail">
        <p class="more">更多></p>
      </router-link>
    </div>

    <swiper :options="swiperOption" class="star-swiper">
      <swiper-slide class="slide-1" v-for="(item,index) in classCard" :key="index">
        <div class="cardBg">
          <img :src="item.imageUrl" alt />
        </div>
        <p class="semester" style="margin-top:12px">{{item.name}}</p>
        <p class="job">就职：{{item.company}}</p>
        <p class="salary">薪资：{{item.salary}}/月</p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  mounted() {},
  data() {
    return {
      classCard: [],
      swiperOption: {
        slidesPerView: 2.2,
        spaceBetween: 5
        // slidesOffsetBefore: -100,
      }
    };
  },
  mounted() {
    this.axios
      .get("/api/consume/ObtainStar", {
        params: {
          num: 7
        }
      })
      .then(res => {
        this.classCard = res.data;
      });
  },
  methods: {}
};
</script>

<style scoped>
.start {
  padding-left: 30px;
  padding-top: 40px;
}
.start .blue {
  width: 6px;
  height: 30px;
  background: #64b3f1;
  float: left;
  margin-top: 5px;
}
.start .title {
  font-size: 32px;
  color: #282828;
  font-weight: bold;
  float: left;
  margin-left: 22px;
}
.start .more {
  float: right;
  font-size: 22px;
  margin-right: 35.5px;
  line-height: 44px;
  color: #666;
}
.start .cardBg {
  width: 300px;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  clear: both;
  overflow: hidden;
}
.start .salary,
.start .semester,
.start .job {
  font-size: 24px;
  color: #444444;
  margin-top: 6px;
  margin-left: 15px;
}
.start .star-swiper .swiper-container {
  /* width: 100% !important; */
  /* padding: 50px !important; */
  margin: 0 auto;
  margin-top: 34px;
}
.start .star-swiper .swiper-slide {
  /* background-position: 50% !important;
  background-size: cover !important; */
  width: 323px !important;
  /* margin-left: 80px; */
}
.start .star-swiper .swiper-slide img {
  width: 297px;
   height: 236px;
   border-radius: 10px;
}
</style>
