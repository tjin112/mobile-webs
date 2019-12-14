<template>
  <div v-if=" isShow">
    <div class="corList">
      <div class="txt" v-for="(item,index) in txt.results" :key="index">
        <img src="../../assets/images/tr_list-sytle.png" alt />
        <div @click="CorDetail(item.id,item.type)">
          <p>{{item.title}}</p>
          <div class="date">{{item.createTime*1000 | formatDate}}</div>
        </div>
      </div>
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
      isShow: true,
      txt: [],
      isMore: true,
      count: ""
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
    },
    count: {
      handler: function() {
        if (this.count > this.txt.count) {
          this.isMore = false;
        }
        this.getNews();
      },
      immediate: true
    }
  },
  methods: {
    CorDetail(id, type) {
      this.$router.push({ path: `/newsDetail/${id}/${type}` });
    },
    getMore() {
      this.count += 13;
    },
    getNews() {
      this.axios
        .get("/api/consume/Information/PageList", {
          params: {
            Type: 2,
            rows: this.count
          }
        })
        .then(res => {
          this.txt = res.data;
        });
    }
  },
  mounted() {
    this.count = 13;
  }
};
</script>

<style scoped>
.txt {
  overflow: hidden;
  margin-top: 10px !important ;
  padding-top: 32px;
}
.corList {
  background: #ffffff;
  padding-bottom: 30px;
}
.corList img {
  width: 10px;
  height: 10px;
  float: left;
  margin-top: 15px;
  margin-left: 30px;
}
.corList p {
  color: #444444;
  font-size: 26px;
  float: left;
  margin-left: 20px;
  /* float: left; */
}
.txt {
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 32px;
  margin-top: 26px;
  margin-left: 30px;
  margin-right: 30px;
}
.txt p {
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  width: 460px;
}
.more {
  /* margin-bottom: 64px; */
  /* height: 39px; */
  padding: 39px 0;
}
.more p {
  color: #747474;
  font-size: 26px;
  text-align: center;
}
.corList .date {
  font-size: 18px;
  color: #bfbfbf;
  float: right;
}
</style>
