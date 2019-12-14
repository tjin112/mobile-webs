<template>
  <swiper :options="swiperOption" v-if="imgAddress.length>0">
    <swiper-slide class="slide-1" v-for="(item,index) in imgAddress" :key="index">
      <a :href="item.link"><img :src="item.imageUrl" alt /></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
// import "swiper/dist/css/swiper.css";
// import axios from 'axios'
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.axios
      .get("/api/consume/Banner", {
        params: {
          bannerType: 2
        }
      })
      .then(res => {
        this.imgAddress = res.data;
      });
  },
  data() {
    return {
      imgAddress: [],
      swiperOption: {
        effect: "coverflow",
        slidesPerView: 1,
        grabCursor: true,
        coverflowEffect: {
          rotate: 5,
          stretch: 10,
          depth: 20,
          modifier: 2,
          slideShadows: false,
          // spaceBetween:10
        },
        autoplay: true,
        spaceBetween: 0,
        slidesOffsetBefore: 25,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          renderCustom: function(swiper, current, total) {
            const activeColor = "#5db75d";
            const normalColor = "#c1d5ff";
            let color = "";
            let paginationStyle = "";
            let html = "";
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor;
              } else {
                color = normalColor;
              }
              paginationStyle = `margin-bottom:5px;background:${color};opacity:1;margin-right:20px;width:15px;height:15px;border-radius:50%;`;
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`;
            }
            return html;
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100% !important;
  /* padding: 50px !important; */
  margin: 0 auto;
  margin-top: 18px;
}
.swiper-slide {
  background-position: 50% !important;
  background-size: cover !important;
  width: 100% !important;
}
.swiper-slide img {
  width: 660px;
  height: 360px;
  border-radius: 20px;
}
.swiper-pagination-custom {
  bottom: 10px;
  left: 0;
  width: 100%;
}
/*自定义分页器的样式，这个你自己想要什么样子自己写*/
.swiper-pagination-customs {
  width: 30px;
  height: 4px;
  display: inline-block;
  background: #000;
  opacity: 0.3;
  margin: 0 5px;
}
/*自定义分页器激活时的样式表现*/
.swiper-pagination-customs-active {
  opacity: 1;
  background-color: #f78e00;
}
</style>