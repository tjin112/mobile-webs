<template>
  <transition name="slide-fade">
    <div v-if="isShow">
      <div class="news" v-for="(item,index) in expList" :key="index">
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
        <div class="line"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["navID"],
  data() {
    return {
      expList: [],
      isShow: true
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
    }
  },
  mounted() {
    this.axios
      .get("/api/consume/Information/PageList", {
        params: {
          Type: 4,
          page: 1,
          rows: 4
        }
      })
      .then(res => {
        this.expList = res.data.results;
      });
  },
  methods: {
    getExp(id, type) {
      this.$router.push({ path: `/newsDetail/${id}/${type}` });
    }
  }
};
</script>

<style scoped>
.news {
  margin-left: 30px;
  overflow: hidden;
  padding-top: 34px;
  clear: both;
  padding-right: 30px;
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
  height: 160px;
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
  width: 300px;
}
.right .content {
  font-size: 22px;
  color: #8b8b8b;
  margin-top: 40px;
  margin-left: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 400px;
    line-height: 32px;
}
.news .line {
  color: #e2e2e2;
  height: 2px;
  margin-top: 190px;
}
.date {
  color: #e2e2e2;
  font-size: 22px;
  clear: both;
  margin-left: 14px;
  margin-top: 5px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(130px);
  opacity: 1;
}
</style>
