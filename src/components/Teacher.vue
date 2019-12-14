<template>
  <div class="teacher">
    <div style="overflow:hidden;margin-bottom:15px">
      <div class="blue"></div>
      <p class="title">授课师资</p>
      <router-link to="/teacher">
        <p class="more">更多></p>
      </router-link>
    </div>
    <!-- swiper -->
    <swiper :options="swiperOption" v-if="teacherList.length>0" class="t-swiper">
      <swiper-slide class="slide-1" v-for="(item,index) in teacherList" :key="index">
        <router-link to="/teacher">
          <div class="teacherCard">
            <div style="background:#000000;border-radius:5px;" class="cardT">
              <!-- <img src="../assets/images/tea3.png" alt /> -->
              <img :src="item.imageUrl" alt />
            </div>

            <p class="name">{{item.title}} {{item.name}}</p>
            <p class="description">{{item.summary}}</p>
          </div>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev" style>
        <img src="../assets/images/sz_left.png" alt style="width:24px;height:24px" />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="../assets/images/sz_right.png" alt style="width:24px;height:24px" />
      </div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      id: "",
      teacherList: [],
      swiperOption: {
        effect: "coverflow",
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 10,
        coverflowEffect: {
          rotate: 0,
          stretch: 115,
          depth: 70,
          modifier: 1,
          slideShadows: false
        },
        // autoplay: true,

        slidesOffsetBefore: 110,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    this.axios
      .get("/api/consume/TeacherInfo/PageList", {
        params: {
          num: 12
        }
      })
      .then(res => {
        this.teacherList = res.data.results;
      });
  },
  methods: {}
};
</script>

<style scoped>
.teacher {
  padding-top: 40px;
}
.teacher .blue {
  width: 6px;
  height: 30px;
  background: #64b3f1;
  float: left;
  margin-top: 5px;
  margin-left: 30px;
}
.teacher .title {
  font-size: 32px;
  color: #282828;
  font-weight: bold;
  float: left;
  margin-left: 22px;
}
.teacher .more {
  float: right;
  font-size: 22px;
  margin-right: 35.5px;
  line-height: 44px;
  color: #666;
}
.cardT {
  width: 430px;
  height: 335px;
  margin: 0 auto;
}
.teacherCard {
  /* height: 596px; */
  width: 500px;
  box-shadow: 0 0 6px #d9d9d9;
  border-radius: 10px;
  padding: 34px 0;
  text-align: center;
}
.teacher .name {
  font-size: 28px;
  color: #444444;
  font-family: "SourceHanSANScn-Normal";
  border-bottom: 1px solid #e2e2e2;
  width: 458px;
  padding-bottom: 20px;
  padding-top: 24px;
  text-align: left;
  /* padding-left: 34px; */
  margin: 0 auto;
}
.teacher .description {
  font-size: 24px;
  color: #565656;
  text-align: left;
  margin-top: 19px;
  padding: 0 28px;
  line-height: 32px;
}
.teacher .t-swiper .swiper-container {
  width: 100% !important;
  /* padding: 50px !important; */
  margin: 0 auto;
  margin-top: 30px;
}
.teacher .t-swiper .swiper-slide {
  background-position: 50% !important;
  background-size: cover !important;
  width: 100% !important;
}
.teacher .t-swiper .swiper-slide img {
  height: 333px;
}

.t-swiper .swiper-button-next {
  background-image: none;
  right: 13%;
}
.t-swiper .swiper-button-prev {
  background-image: none;
  left: 17%;
}
.t-swiper .swiper-button-prev img {
  box-shadow: 0 0 15px #9ec9ff;
  border-radius: 50px;
}
.t-swiper .swiper-button-next img {
  box-shadow: 0 0 15px #9ec9ff;
  border-radius: 50px;
}
</style>