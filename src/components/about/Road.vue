<template>
  <transition name="slide-fade">
    <div v-if=" isShow">
      <div class="road">
        <div :class="index%2===0 ? 'white':'gray'" v-for="(item,index) in roadList" :key="index">
          <p class="time-axis-date">{{item.year}}</p>
          <span class="year-circle"></span>
          <div class="vertical"></div>

          <div
            style="clear:both; position: relative;height:60px;"
            v-for="(v,i) in item.event"
            :key="i"
          >
            <div class="con"></div>
            <p class="month">{{v.month}}</p>

            <p class="event">{{v.content}}</p>
            <div class="vertical-con"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["navID"],
  data() {
    return {
      isShow: true,
      roadList: []
    };
  },
  watch: {
    navID: {
      handler: function() {
        if (this.navID === 2) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.axios.get("/api/consume/History").then(res => {
      this.roadList = res.data;
    });
  }
};
</script>

<style scoped>
.white {
  background: #ffffff;
  width: 100%;
  height: 100%;
  padding: 0 35.5px;
  clear: both;
  padding-top: 20px;
}
.gray {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  padding: 0 35.5px;
  clear: both;
  padding-top: 20px;
}
.time-axis-date {
  color: #6c9cff;
  font-size: 25px;
  float: left;
  margin-top: -10px;
}
.year-circle {
  float: left;
  position: absolute;
  width: 8.5px;
  height: 8.5px;
  border: 3px solid #6c9cff;
  border-radius: 100%;
  background: #ffffff;
  left: 129px;
}
.vertical {
  width: 2px;
  background: #6c9cff;
  margin-left: 82px;
  padding-bottom: 10px;
  height: 26px;
  margin-top: 10px;
  position: absolute;
  left: 53px;
  margin-top: 15px;
}
.vertical-con {
  position: absolute;
  padding-bottom: 200px;
  width: 2px;
  background: #6c9cff;
  left: 100px;
  top: 26px;
}
.con {
  float: left;
  position: absolute;
  left: 95.5px;
  top: 17px;
  width: 5.5px;
  height: 5.5px;
  border: 2px solid #6c9cff;
  border-radius: 100%;
  background: #ffffff;
}
.month {
  font-size: 24px;
  color: #8b8b8b;
  float: left;
  margin-bottom: 10px;
  margin-left: 120px;
  line-height: 45px;
}
.event {
  color: #565656;
  font-size: 24px;
  float: left;
  margin-left: 20px;
  width: 450px;
  line-height: 40px;
  padding-top: 4px;
}
.padding-none {
  padding-top: 0px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(230px);
  opacity: 0.5;
}
</style>
