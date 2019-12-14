<template>
  <div v-if="isShow">
    <div class="latest-title">
      <div class="blue"></div>
      <p class="title">全国就业周报</p>
      <p class="date">{{list.startTime*1000 | format}}-{{list.endTime*1000 | format}}</p>
    </div>
    <div class="laba">
      <img src="../../assets/images/laba.png" alt />
      <p>{{list.context}}</p>
    </div>
    <LatestTb @getLatest="Latest" />
  </div>
</template>
<script>
import LatestTb from "./LatestTable";
export default {
  props: ["isShow"],
  components: {
    LatestTb
  },
  data() {
    return {
      list: ""
    };
  },
  methods: {
    Latest: function(val) {
      this.list = val;
    }
  }
};
</script>

<style scoped>
.latest-title {
  padding: 30px 35.5px;
  overflow: hidden;
  border-top: 1px solid #e2e2e2;
  margin-top: -9px;
}
.latest-title .blue {
  width: 6px;
  height: 30px;
  background: #64b3f1;
  float: left;
  margin-top: 5px;
}
.latest-title .title {
  font-size: 32px;
  color: #282828;
  font-weight: bold;
  float: left;
  margin-left: 22px;
}
.latest-title .date {
  color: #747474;
  float: right;
  line-height: 52px;
}
.laba {
  background: #ff8d86;
  border-radius: 80px;
  width: 90%;
  margin: 0 auto;
  height: 36.4px;
}
.laba img {
  float: left;
  width: 30px;
  margin-left: 10px;
  margin-top: 3px;
}
.laba p {
  float: left;
  color: #ffffff;
  line-height: 36.4px;
  margin-left: 10px;
}
</style>
