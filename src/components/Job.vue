<template>
  <div class="job">
    <v-header />
    <swiper :options="swiperOption">
      <swiper-slide>
        <div :class="isChecked===0 ? 'ischeck':''" class="checked" @click="getNewestJob()">最新</div>
      </swiper-slide>
      <swiper-slide
        v-for="(item,index) in cityList"
        :key="index"
        @click.native="getCityId(item.id,item.shortName)"
      >
        <div :class="isChecked==item.id ? 'ischeck':''">{{item.shortName}}</div>
      </swiper-slide>
    </swiper>
    <Lastest :isShow="isShow" />
    <SemesterList :cityId="cityId" :shortName="shortName" :isSemester="isSemester" />
  </div>
</template>
  
<script>
// swiper options example:
// import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import VHeader from "./header/VHeader";
import Lastest from "./jiuye/LastestJob";
import SemesterList from "./jiuye/SemesterList";
export default {
  //   name: "carrousel",
  components: {
    swiper,
    swiperSlide,
    VHeader,
    SemesterList,
    Lastest
  },
  data() {
    return { 
      swiperOption: {
        slidesPerView: 7
        // centeredSlides: true
      },
      cityList: [],
      cityId: "",
      isClass: false,
      shortName: "",
      isSemester: true,
      isShow: true,
      isChecked: ""
    };
  },
  mounted() {
    this.axios.get("/api/consume/Organization/").then(res => {
      this.cityList = res.data;
    });
    this.isChecked = 0;
  },
  // beforeRouteLeave(to, from, next) {
  //   // 设置下一个路由的 meta
  //   to.meta.keepAlive = true; // B 跳转到 A 时，让 A 缓存，即不刷新
  //   next();
  // },
  methods: {
    getCityId(id, name) {
      this.cityId = id;
      this.shortName = name;
      this.isClass = true;
      this.isSemester = true;
      this.isShow = false;
      // (this.isChecked = 2),
      this.isChecked = id;
    },
    getNewestJob() {
      this.isSemester = false;
      this.isShow = true;
      this.isChecked = 0;
    }
  }
};
</script>
<style scped>
.ischeck {
  background: url("src/assets/images/a1.png") no-repeat center;
  background-size: 100%;
  height: 90px;
  color: #1289ff;
}
.job .checked:hover {
  background: url("src/assets/images/a1.png") no-repeat center;
  background-size: 100%;
  height: 90px;
  /* width: 178px !important; */
  /* overflow:visible */
}
.job .swiper-container {
  padding: 0px 0;
  text-align: center;
  height: 82px;
  z-index: 1;
  width: 100%;
  /* border-bottom: 1px solid #e2e2e2; */
}
.job .swiper-slide {
  width: auto; /*设为固定值*/
  /*根据内容调整宽度*/
  text-align: center;
  color: #9c9c9c;
  line-height: 82px;
  font-size: 28px;
}
</style>
