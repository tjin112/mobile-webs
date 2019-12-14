<template>
  <div class="subNews" v-if="isShow">
    <div class="news" v-for="(item,index) in newList.results" :key="index">
      <!-- <router-link :to="{path:'/newsDetail',query:{news:item}}"> -->
      <div @click="NewsDetail(item.id,item.type)">
        <div class="left">
          <img :src="item.imageUrl" />
        </div>
        <div class="right">
          <div class="title">{{item.title}}</div>
          <div class="content">导语：{{item.summary}}</div>
          <div class="date">{{item.createTime*1000 | formatDate}}</div>
        </div>
      </div>
      <!-- </router-link> -->
      <!-- <div class="line"></div> -->
    </div>
    <div class="more" @click="getMore">
      <p v-if="isMore">查看更多>></p>
      <p v-else>全部加载完毕...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["navID"],
  data() {
    return {
      newList: [],
      isShow: true,
      count: "",
      isMore: true
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
    },
    count: {
      handler: function() {
        if (this.count > this.newList.count) {
          this.isMore = false;
        }
        this.getNews();
      },
      immediate: true
    }
  },
  methods: {
    NewsDetail(id,type){
       this.$router.push({ path: `/newsDetail/${id}/${type}` });
    },
    getMore() {
      this.count += 4;
    },
    getNews() {
      this.axios
        .get("/api/consume/Information/PageList", {
          params: {
            Type: 1,
            rows: this.count
          }
        })
        .then(res => {
          this.newList = res.data;
        });
    }
  },
  mounted() {
    this.count = 4;
  }
};
</script>

<style scoped>
.subNews .news {
  /* margin-left: 30px; */
  overflow: hidden;
  padding-top: 34px;
  clear: both;
  padding-left: 30px;
  padding-right: 30px;
  background: #ffffff;
  margin-top: 10px;
}
.subNews .left {
  float: left;

  overflow: hidden;
}
.subNews .right {
  float: left;
  width: 65%;
}
.subNews .left img {
  width: 240px;
  height: 170px;
  border-radius: 10px;
}
.subNews .right .title {
  /* border-bottom:0.1px #bfbfbf solid; */
  margin-bottom: 7px;
  font-size: 26px;
  color: #444444;
  margin-left: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  width: 400px;
  font-weight: normal;
}
.subNews .right .content {
  font-size: 22px;
  color: #8b8b8b;
  margin-left: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  padding-top: 7px;
  border-top: 1px #e2e2e2 solid;
  width: 94%;
  line-height: 32px;
}
.subNews .more {
  padding: 39px 0;
}
.subNews .more p {
  color: #747474;
  font-size: 26px !important;
  text-align: center;
}
.date {
  color: #e2e2e2;
  font-size: 22px;
  clear: both;
  margin-left: 20px;
  margin-top: 2px;
}
</style>
