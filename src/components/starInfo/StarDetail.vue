<template>
  <div class="star">
    <!-- <router-view></router-view> -->
    <div class="head">
      <img src="../../assets/images/fanhui.png" alt @click="prevPage" />
      <p class="t-title" style="margin:0">就业明星</p>
    </div>

    <!-- <div id="content">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>
    </div>-->
    <div class="sub-star" id="content">
      <waterfall :col="col">
        <div class="starCard" v-for="(item,index) in starList" :key="index">
          <img :src="item.imageUrl" alt />
          <p class="name">{{item.orginName}}{{item.semester}}期&nbsp;&nbsp;{{item.name}}</p>
          <div class="line"></div>
          <p class="job">入职：{{item.company}}</p>
          <p class="salary">月薪：{{item.salary}}</p>
          <p class="feeling">感言：{{item.feeling}}</p>
        </div>
      </waterfall>
    </div>
  </div>
</template>
<script>
import VHeader from "../header/VHeader";
export default {
  components: {
    VHeader
  },
  data() {
    return {
      starList: [],
      col: 2
    };
  },
  mounted() {
    this.axios.get("/api/consume/ObtainStar").then(res => {
      this.starList = res.data;
    });
  },
  methods: {
    prevPage() {
      this.$router.back(-1);
    }
  }
};
</script>
<style scoped>
.star .head {
  background: #f8f8f8;
  height: 102px;
  text-align: center;
  padding: 0 35.5px;
}
.star .head img {
  width: 14.54px;
  height: 34px;
  margin-top: 36px;
  float: left;
}
.star .head .t-title {
  font-size: 30px;
  color: #282828;
  line-height: 102px;
  float: left;
  width: 97%;
}
.sub-star {
  background: #f8f8f8;
  height: auto;
  padding: 0 30px;
  padding-top: 20px;
  overflow: hidden;
}
.starCard {
  float: left;
  width: 334px;
  margin: 1%;
  background: #ffffff;
  text-align: center;
  padding-bottom: 20px;
  border-radius: 3px;
}
.starCard img {
  width: 88%;
  /* border-radius: 20px; */
  vertical-align: middle;
  padding: 10px;
}

.starCard .name {
  font-size: 25px;
  color: #444444;
  font-family: "SourceHanSansCN-Normal";
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 30px;
  text-align: left;
}
.starCard .line {
  width: 80%;
  height: 2px;
  background: #e2e2e2;
  margin: 0 auto;
}
.starCard .job {
  font-size: 22px;
  text-align: left;
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 0px;
  color: #8b8b8b;
}
.starCard .salary {
  font-size: 22px;
  text-align: left;
  margin-top: 5px !important;
  margin-left: 30px;
  margin-bottom: 0px;
  color: #8b8b8b;
}
.starCard .feeling {
  font-size: 22px;
  text-align: left;
  margin-top: 5px !important;
  margin-left: 30px;
  height: 100px;
  color: #8b8b8b;
}
</style>
