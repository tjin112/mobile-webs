<template>
  <div class="tDetail">
    <div class="head">
      <img src="../../assets/images/fanhui.png" alt @click="prevPage" />
      <p class="t-title" style="margin:0">师资详情</p>
    </div>
    <div class="introduction">
      <div class="left">
        <img :src="introduction.imageUrl" alt />
      </div>
      <div class="right">
        <div class="name">{{introduction.name}}</div>
        <p v-html="introduction.introduction"></p>
      </div>
    </div>
    <div class="line"></div>
    <div class="projectExp">
      <p>项目经历</p>
      <div v-for="(item,index) in procjectExperience" :key="index" style="overflow:hidden">
        <div class="content" v-if="item">
          <img src="../../assets/images/tr_list-sytle.png" alt />
          <p class="project" v-if="item" style="margin:0">{{item}}</p>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="projectExp">
      <p>培训经历</p>
      <div v-for="(item,index) in trainExperience" :key="index" style="overflow:hidden">
        <div class="content" v-if="item">
          <img src="../../assets/images/tr_list-sytle.png" alt />
          <p class="project" v-if="item" style="margin:0">{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      introduction: [],
      procjectExperience: [],
      trainExperience: []
    };
  },
  mounted() {
    this.axios.get(`/api/consume/TeacherInfo/${this.id}`).then(res => {
      this.introduction = res.data;
      this.procjectExperience = res.data.procjectExperience
        .replace(/\[|]/g, "")
        .split(",");
      this.trainExperience = res.data.trainExperience
        .replace(/\[|]/g, "")
        .split(",");
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
.tDetail .head {
  background: #f8f8f8;
  height: 102px;
  text-align: center;
  padding: 0 35.5px;
}
.tDetail .head img {
  width: 14.54px;
  height: 34px;
  margin-top: 36px;
  /* margin-left: 35.5px; */
  float: left;
}
.tDetail .head .t-title {
  font-size: 30px;
  color: #282828;
  line-height: 102px;
  float: left;
  width: 97%;
}
.introduction {
  overflow: hidden;
  padding-left: 35.5px;
  margin-top: 18px;
  margin-bottom: 27px;
}
.left {
  /* width: 152px;
  height: 230px; */
  float: left;
  background: black;
  /* width: 218px; */
  height: 328px;
}
.left img {
  /* width: 2px; */
  height: 321px;
  /* margin-top: 18px; */
}
.right {
  float: left;
  margin-left: 22px;
  width: 400px;
}
.right .name {
  font-size: 25px;
  color: #444444;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 10px;
  margin-top: 20px;
  width:96%;
}
.right p {
  font-size: 22px;
  color: #8b8b8b;
  width: 98%;
  margin-top: 10px !important;
  line-height: 36px;
}
.tDetail .line {
  height: 14.5px;
  background: #f8f8f8;
}
.projectExp {
  padding-top: 20px;
  padding-bottom: 62px;
}
.projectExp p {
  padding-left: 35.5px;
  font-size: 25px;
  color: #282828;
}
.projectExp .project {
  font-size: 21px;
  color: #444444;
  width: 572px;
  float: left;
  padding-left: 20px;
}
.projectExp img {
  width: 7.3px;
  height: 7.3px;
  float: left;
  margin-top: 10px;
  /* margin-left: 35.5px; */
}
.content {
  border-bottom: 1px solid #e2e2e2;
  overflow: hidden;
  padding: 18px 0;
  margin: 0 70px;
}
</style>
