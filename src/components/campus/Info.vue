<template>
  <!-- swiper -->
  <div style="z-index:1000" class="campus-info">
    <swiper
      :options="swiperOption"
      v-if="campusDetail.mediaInfoList &&newArr.length>0"
      class="campus-slider"
    >
      <swiper-slide class="slide-1" v-for="(item,index) in newArr" :key="index">
        <img :src="item.url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <p class="campusName">{{campusDetail.name}}</p>
    <div style="overflow:hidden">
      <div class="info-left">
        <div class="add">
          <img src="../../assets/images/index_map.png" alt />
          <p class="address">{{campusDetail.address}}</p>

          <a
            class="map"
            :href="'https://map.baidu.com/mobile/webapp/search/search/qt=s&wd='+campusDetail.address"
          >查看路线</a>
        </div>
        <div class="transport">
          <img src="../../assets/images/index_car.png" alt />
          <p class="train" v-if="campusDetail.train">地铁路线：{{campusDetail.train}}</p>

          <p class="bus" v-if="campusDetail.bus">公交路线：{{campusDetail.bus}}</p>
        </div>
      </div>
      <div class="info-right">
        <a :href="'tel:'+campusDetail.phone.substring(0, 11)" v-if="campusDetail.name==='重庆中心'">
          <img src="../../assets/images/index_tel.png" alt />
        </a>
        <a :href="'tel:'+campusDetail.phone" v-else>
          <img src="../../assets/images/index_tel.png" alt />
        </a>
      </div>
    </div>
    <div class="officalContact">
      <img class="wechat" src="../../assets/images/weibo.png" alt />
      <a href="https://weibo.com/bwfpeixun?is_hot=1#_loginLayer_1557711253300">官方微博</a>
      <div class="line_v"></div>
      <img class="weibo" src="../../assets/images/wecat.png" alt />
      <!-- <a href="http://www.51testing.net/weixin.html">官方微信</a> -->
      <router-link to="/wechat">官方微信</router-link>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: ["id"],
  data() {
    return {
      campusDetail: [],
      swiperOption: {
        // sliderPreView:1,
        autoplay: true,
        loop: true,
        slidesOffsetBefore: 0
      },
      newArr: []
    };
  },
  watch: {
    id: {
      handler: function() {
        this.newArr = [];
        this.axios
          .get(`/api/consume/Organization/${this.id}`, {
            params: {
              position: 1
            }
          })
          .then(res => {
            this.campusDetail = res.data;
            if (this.campusDetail.mediaInfoList instanceof Array) {
              this.campusDetail.mediaInfoList.forEach(item => {
                if (item.type === 1) {
                  this.newArr.push(item);
                }
              });
            }
            this.$emit("getCampusName", this.campusDetail.shortName);
          });
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.campus-info .swiper-container {
  margin: 0 auto;
  margin-top: 34px;
  overflow: hidden;
  width: 90% !important;
}

.campus-info .campus-slider .swiper-slide img {
  width: 675px;
  height: 320px;
}
.campus-info .campusName {
  font-size: 28px;
  color: #444444;
  margin-top: 36px;
  margin-left: 30px;
  /* font-weight: bold; */
  margin-bottom: 41px;
}
.campus-info .info-left {
  width: 620px;
  float: left;
  overflow: hidden;
}
.info-right {
  float: left;
  border-left: 1px solid #e2e2e2;
  height: 139px;
  margin-right: -10px;
  padding-top: 20px;
  /* padding-left: 20px; */
  overflow: hidden;
}
.info-right img {
  width: 49px;
  height: 51px;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 0;
}
.campus-info .add {
  overflow: hidden;
  /* margin-top: 41px; */
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 24px;
  margin-left: 30px;
  margin-right: 35px;
  margin-bottom: 20px;
}
.campus-info .add img {
  float: left;
  width: 17px;
  height: 21px;
  /* margin-left: 30px; */
  margin-right: 15px;
  margin-top: 4.5px;
}
.campus-info .add .map {
  float: left;
  width: 20%;
  color: #ff6e6e;
  font-size: 20px;
  margin-left: 20px;
}
.campus-info .add .address {
  color: #565656;
  font-size: 20px;
  width: 70%;
  float: left;
}
.campus-info .transport {
  overflow: hidden;
  /* padding-bottom: 24px; */
  margin-left: 30px;
  margin-right: 30px;
  /* margin-bottom: 20px; */
  margin-top: 20px;
}
.campus-info .transport img {
  float: left;
  width: 24px;
  height: 14px;
  /* margin-left: 30px; */
  margin-right: 15px;
  margin-top: 10px;
}
.campus-info .transport p {
  color: #565656;
  font-size: 20px;
  float: left;
  width: 90%;
  height: auto;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.campus-info .transport .bus {
  padding-left: 37px;
  margin-top: 10px;
}

.campus-info .officalContact {
  height: 100px;
}
.campus-info .officalContact .wechat {
  width: 68px;
  height: 68px;
  float: left;
  margin-top: 44px;
  margin-left: 151px;
  margin-right: 0px !important;
}
.campus-info .officalContact a {
  float: left;
  font-size: 26px;
  color: #a3a3a4;

  margin-top: 57px;
  margin-left: 16px !important;
}
.campus-info .line_v {
  height: 48px;
  float: left;
  background: #e2e2e2;
  width: 1px;
  margin-top: 50px;
  margin-left: 34px;
}
.campus-info .officalContact .weibo {
  width: 68px;
  height: 68px;
  float: left;
  margin-top: 44px;
  margin-left: 34px;
  margin-right: 0px !important;
}
</style>
