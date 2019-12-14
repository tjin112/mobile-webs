<template>
  <div v-if="isShow">
    <div class="exp" v-for="(item,index) in expList.results" :key="index">
      <!-- <router-link :to="{path:'/newsDetail',query:{news:item}}"> -->
      <div @click="getExp(item.id,item.type)">
        <div class="left">
          <img :src="item.imageUrl" alt />
        </div>
        <div class="right">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.summary}}</div>
          <p class="date">{{item.createTime*1000 | formatDate}}</p>
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
      expList: [],
      isShow: true,
      count: "",
      isMore: true
    };
  },
  watch: {
    navID: {
      handler: function() {
        if (this.navID === 4) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      immediate: true
    },
    count: {
      handler: function() {
        if (this.count > this.expList.count) {
          this.isMore = false;
        }
        this.getNews();
      },
      immediate: true
    }
  },
  methods: {
    getExp(id, type) {
      this.$router.push({ path: `/newsDetail/${id}/${type}` });
    },
    getMore() {
      this.count += 4;
    },
    getNews() {
      this.axios
        .get("/api/consume/Information/PageList", {
          params: {
            Type: 4,
            rows: this.count
          }
        })
        .then(res => {
          this.expList = res.data;
        });
    }
  },
  mounted() {
    this.count = 4;
  }
};
</script>

<style scoped>
.exp {
  margin-top: 10px;
  overflow: hidden;
  padding-top: 34px;
  clear: both;
  padding: 30px;
  background: #ffffff;
}
.left {
  float: left;
}
.right {
  float: left;
  width: 65%;
}
.left img {
  width: 240px;
  height: 170px;
  border-radius: 10px;
}
.right .title {
  font-size: 26px;
  color: #444444;
  margin-left: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  font-weight: normal;
  width: 94%;
  margin-bottom: 7px;
}
.right .content {
  font-size: 22px;
  color: #8b8b8b;
  padding-top: 7px;
  margin-left: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 94%;
  border-top: #e2e2e2 1px solid;
  line-height: 32px;
}
.news .line {
  color: #e2e2e2;
  height: 2px;
  margin-top: 190px;
}
.more {
  /* margin-bottom: 64px; */
  padding: 39px 0;
}
.more p {
  color: #747474;
  font-size: 26px;
  text-align: center;
}
.right .date {
  color: #e2e2e2;
  font-size: 22px;
  clear: both;
  margin-left: 14px;
  margin-top: 5px;
}
</style>
