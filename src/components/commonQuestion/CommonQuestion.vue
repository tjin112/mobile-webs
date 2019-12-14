<template>
  <div class="newsDetail">
    <div class="head">
      <img src="../../assets/images/fanhui.png" alt @click="prevPage" />
      <p class="t-title" style="margin:0">{{news.title}}</p>
      <p class="time">发布时间：{{news.updateTime*1000 | formatDate}}</p>
    </div>

    <div v-html="news.context" class="context">{{news.context}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsId: "",
      news: "",
      date: ""
    };
  },
  mounted() {
    this.newsId = this.$route.query.news.id;

    this.axios.get(`/api/consume/CommonQuestion/${this.newsId}`).then(res => {
      this.news = res.data;
    });
  },
  methods: {
    prevPage() {
      this.$router.back(-1);
    }
  }
};
</script>

<style>
.newsDetail {
  clear: both;
  overflow: hidden;
}
.newsDetail .head {
  background: #f8f8f8;
  text-align: center;
  padding: 0 35.5px;
  overflow: hidden;
  padding-bottom: 34px;
}
.newsDetail .head img {
  width: 21px !important;
  height: 40px !important;
  margin-top: 42px;
  /* margin-left: 35.5px; */
  float: left;
}
.newsDetail .head .t-title {
  font-size: 30px;
  margin-left: 25px !important;
  margin-top: 37px !important;
  color: #282828;
  float: left;
  width: 604px;
  padding-left: 4%;
  padding-bottom: 28px;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 20px !important;
}
.newsDetail .context {
  padding: 35.5px;
}
.newsDetail img {
  width: 100% !important;
  height: auto !important;
}
.time {
  color: #a1a1a1;
  font-size: 22px;
  clear: both;
}
</style>
