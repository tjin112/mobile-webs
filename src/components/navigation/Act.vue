<template>
  <!-- swiper -->
  <transition name="slide-fade">
    <div class="start" v-if="isShow">
      <swiper :options="swiperOption">
        <swiper-slide
          class="slide-1"
          v-for="(item,index) in actCard"
          :key="index"
          style="width:0px;"
        >
          <div class="t-card" style=" box-shadow: 0 0 6px #d9d9d9;">
            <div @click="ActDetail(item.id,item.type)">
              <div class="cardBg">
                <img :src="item.imageUrl" alt />
              </div>
              <div class="contentBg">
                <p class="actTitle">{{item.title}}</p>
                <p class="des">{{item.summary}}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </transition>
</template>

<script>
// import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: ["navID"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      actCard: [],
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesOffsetBefore: 10,
        loop: true
      },
      isShow: true
    };
  },
  watch: {
    navID: {
      handler: function() {
        if (this.navID === 3) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.axios
      .get("/api/consume/Information/PageList", {
        params: {
          Type: 3,
          page: 1,
          rows: 7
        }
      })
      .then(res => {
        this.actCard = res.data.results;
      });
  },
  methods: {
    ActDetail(id, type) {
      this.$router.push({ path: `/newsDetail/${id}/${type}` });
    }
  }
};
</script>

<style scoped>
.start .cardBg {
  /* width: 300px; */
  height: 193px;
  /* border-radius: 12px; */
  overflow: hidden;
  /* clear: both; */
}
.actTitle {
  font-size: 26px;
  color: #444444;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 18px;
  margin-bottom: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}
.des {
  font-size: 22px;
  color: #8b8b8b;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
    line-height: 32px;
}
.swiper-container {
  margin: 0 auto;
  margin-top: 16px;
  /* height: 500px !important; */
  /* overflow: visible; */
}
.t-card {
  padding: 18px;
  width: 320px !important;
  /* height: 470px; */
  border-radius: 10px;
}
.swiper-slide {
  /* padding: 18px; */
  text-align: center;
  height: 450px;
  padding-top: 18px;
}
.swiper-slide img {
  width: 300px;
  height: 193px;
}
.contentBg {
  padding: 18px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(130px);
  opacity: 1;
}
</style>
