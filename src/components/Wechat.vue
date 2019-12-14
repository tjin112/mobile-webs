<template>
  <div class="wechat">
    <div class="head">
      <img src="../assets/images/fanhui.png" alt @click="prevPage" />
      <p class="t-title" style="margin:0">博为峰官方微信公众号</p>
    </div>
    <img src="../assets/images/wechat.jpg" alt class="image" />
    <p class="p">长按保存二维码</p>
    <p class="p">打开微信扫一扫</p>
    <p class="p">关注博为峰官方</p>
  </div>
</template>

<script>
export default {
  methods: {
    prevPage() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.wechat {
  text-align: center;
}
.wechat .head {
  background: #f8f8f8;
  height: 102px;
  text-align: center;
  padding: 0 35.5px;
}
.wechat .head img {
  width: 14.54px;
  height: 34px;
  margin-top: 36px;
  /* margin-left: 35.5px; */
  float: left;
}
.wechat .head .t-title {
  font-size: 30px;
  color: #282828;
  line-height: 102px;
  float: left;
  width: 97%;
}
.wechat .image {
  width: 600px;
  margin-top: 60px;
  /* height: 780px; */
}
.wechat .p {
  font-size: 30px;
  color: #0d6fb8;
  font-weight: bold;
}
</style>
