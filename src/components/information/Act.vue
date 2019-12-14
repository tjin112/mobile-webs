<template>
  <!-- swiper -->
  <div class="act" v-if="isShow">
    <Header />
    <div class="sub-act">
      <div class="actCard" v-for="(item,index) in actCard.results" :key="index">
        <div @click="ActDetail(item.id,item.type)">
          <div class="image">
            <img :src="item.imageUrl" alt />
          </div>
          <p class="sub-act-title">{{item.title}}</p>
          <p class="exp">{{item.summary}}</p>
          <p class="date">{{item.createTime*1000 | formatDate}}</p>
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
      actCard: [],
      isShow: true,
      count: "",
      isMore: true
    };
  },
  watch: {
    navID: {
      handler: function() {
        if (this.navID === 3) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      immediate: true
    },
    count: {
      handler: function() {
        if (this.count > this.actCard.count) {
          this.isMore = false;
        }
        this.getNews();
      },
      immediate: true
    }
  },
  methods: {
    ActDetail(id, type) {
      this.$router.push({ path: `/newsDetail/${id}/${type}` });
    },
    getMore() {
      this.count += 6;
    },
    getNews() {
      this.axios
        .get("/api/consume/Information/PageList", {
          params: {
            Type: 3,
            rows: this.count
          }
        })
        .then(res => {
          this.actCard = res.data;
        });
    }
  },
  mounted() {
    this.count = 6;
  }
};
</script>

<style scoped>
.sub-act {
  background: #f4f4f4;
  height: auto;
  /* padding: 0 28px; */
  padding-top: 28px;
  overflow: hidden;
}
.actCard {
  float: left;
  width: 334px;
  height: 484px;
  margin-bottom: 20px;
  background: #ffffff;
  text-align: center;
  border: 1px solid #e2e2e2;
  margin-left: 26px;
}
.actCard img {
  /* width: 265px;
  height: 293px;; */
  width: 100%;
  height: 237px;
  vertical-align: middle;
  /* margin-top: 28px; */
}

.actCard .sub-act-title {
  font-size: 26px;
  color: #444444;
  /* margin-top: 4px; */
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  width: 266px;
  margin: 0 auto;
  margin-top: 15px;
  border-bottom: 1px #e2e2e2 solid;
  padding-bottom: 7px;
  font-family: "SourceHanSansCN-Normal";
}
.actCard .exp {
  font-size: 22px;
  color: #8b8b8b;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  padding-left: 10%;
  width: 80%;
  text-align: left;
  margin-top: 10px;
  line-height: 32px;
}
.act .more {
  /* margin-bottom: 64px; */
  /* height: 39px; */
  padding: 39px 0;
}
.act .more p {
  color: #747474;
  font-size: 26px;
  text-align: center;
}
.actCard .date {
  text-align: right;
  font-size: 18px;
  color: #bfbfbf;
  margin-top: 5px;
  margin-right: 10px;
}
</style>
