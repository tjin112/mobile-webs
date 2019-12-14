<template>
  <div class="newsDetail">
    <div class="head">
      <img src="../../assets/images/fanhui.png" alt @click="prevPage" />
      <p class="t-title">{{news.title}}</p>
      <p class="time">发布时间：{{news.updateTime*1000 | formatDate}}</p>
    </div>
    <div v-html="news.context" class="context">{{news.context}}</div>
    <p style="margin-left:35.5px">相关阅读:</p>
    <div class="relative" v-for="(item,index) in relativeList" :key="index">
      <img class="dot" src="../../assets/images/tr_list-sytle.png" alt />
      <p @click="relative(item.id)">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsId: this.$route.params.id,
      news: "",
      date: "",
      relativeList: "",
      reletiveId: "",
      type: this.$route.params.type
    };
  },
  watch: {
    newsId: {
      handler: function() {
        this.getRelativeList();
        this.getRelative(this.newsId);
      },
      immediate: true
    }
  },
  mounted() {
  },
  methods: {
    relative(id) {
      this.newsId = id;
      this.$router.push({ path: `/newsDetail/${id}/${this.type}` });
    },
    prevPage() {
      if (this.type == 1) {
        this.$router.push({
          path: "/Information",
        
        });
      }
      if (this.type == 2) {
        this.$router.push({
          path: "/Information",
         
        });
      }
      if (this.type == 3) {
        this.$router.push({
          path: "/Information",
        
        });
      }
      if (this.type == 4) {
        this.$router.push({
          path: "/Information",
         
        });
      }
      // this.$router.back(-1);
    },
    getRelative(val) {
      this.axios.get(`/api/consume/Information/${val}`).then(res => {
        this.news = res.data;
      });
      window.scrollTo(0, 0);
    },
    getRelativeList() {
      this.axios
        .get("http://172.16.66.173:5080/api/consume/Information/RelativeList", {
          params: {
            id: this.newsId,
            num: 3
          }
        })
        .then(res => {
          this.relativeList = res.data;
        });
    }
  }
};
</script>

<style>
.newsDetail {
  clear: both;
  overflow: hidden;
  padding-bottom: 160px;
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
  margin-bottom: 20px;
}
.newsDetail .context {
  padding: 35.5px;
   line-height: 36px;
}
.newsDetail img {
  width: 100% !important;
  height: auto !important;
}
.newsDetail p {
  margin: 0;
}
.time {
  color: #a1a1a1;
  font-size: 22px;
  clear: both;

  /* margin-top: 105px !important; */
}
.newsDetail .span{
 
}
.relative {
  padding-left: 35.5px;
  font-size: 25px;
  overflow: hidden;
  margin-top: 5px;
}
.relative .dot {
  width: 10px !important;
  height: 10px;
  float: left;
  margin-top: 12px;
  margin-left: 30px;
  /* margin-right: 6px; */
}
.relative p {
  color: #666;
  font-size: 20px;
  float: left;
  margin-left: 20px;
  width: 600px;
}
</style>
