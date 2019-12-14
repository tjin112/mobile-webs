<template>
    <div class="introductionn-main">
      <div class="line"></div>
      <div v-if="isShow" class="introduction">
        <img src="../../assets/images/shipin.png" alt @click="showVideo" />
        <p class="contxt">博为峰（股票代码：836392），全称上海博为峰软件技术股份有限公司，中国软件人才培训领域的先行者，面向全球的一站式软件测试服务供应商。</p>
        <p
          class="contxt"
        >自2004年成立以来，博为峰一直致力于为应届毕业生和职场新人提供IT职业培训，为国内外客户提供软件测试整体解决方案。公司总部位于上海，并在北京、深圳、广州、成都、南京、西安、杭州、武汉、合肥、重庆、长沙、苏州、南昌、石家庄、昆山等地均设有分支服务机构。</p>
        <p class="title">践行良心教育，铺就职业坦途</p>
        <p class="contxt">作为中国较早成立的IT职业培训机构之一，博为峰先后创立了"51Testing"和"51Code"两大培训品牌。</p>
        <p
          class="contxt"
        >其中，51Testing始终致力于软件测试人才培训，业务范围包含就业培训、企业内训、周末精品班、测试开发精英班、软件测试认证等服务，被誉为"软件测试人才的摇篮"。</p>
        <p
          class="contxt"
        >博为峰始终坚守教学品质，真诚服务学员，发展至今，每年毕业学员已突破10000名，就业率长期保持在99%以上。十数年来，博为峰已先后为7000多家国内外企业输送软件测试骨干及软件技术精英，未来还将根据产业变迁和技术革新开设更多的紧缺人才实训项目：帮助更多的应届毕业生和职场新人找到满意工作，实现职业梦想；帮助更多的用人单位轻松招到可用之才，推动企业发展和产业进步。</p>
      </div>
      <IntroVideo v-if="isVideo" @isVideo="isShowVideo" />
    </div>
 
</template>

<script>
import IntroVideo from "../video/IntroVideo";
export default {
  props: ["navID"],
  components: {
    IntroVideo
  },
  data() {
    return {
      isShow: true,
      isVideo: false
    };
  },
  watch: {
    navID: {
      handler: function() {
        if (this.navID === 1) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      immediate: true
    }
  },
  methods: {
    showVideo() {
      this.isVideo = true;
    },
    isShowVideo: function(val) {
      this.isVideo = val;
    }
  }
};
</script>

<style scoped>
.introduction {
  text-align: center;
  padding: 0 35.5px;
  padding-bottom: 60px;
}
.introductionn-main .line {
  background: #f4f4f4;
  height: 14.5px;
}
.introduction img {
  margin-top: 27px;
  margin-bottom: 3%;
  width: 602px;
  height: 349px;
}
.introduction .contxt {
  color: #858585;
  font-size: 24px;
  text-align: left;
  line-height: 33px;
  text-indent: 2em;
}
.introduction .title {
  width: 100%;
  color: #333;
  line-height: 29px;
  font-weight: bold;
  text-align: left;
  text-indent: 0;
  padding-top: 2%;
  padding-bottom: 2%;
   font-size: 26px;
}
</style>
