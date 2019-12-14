<template>
  <div class="s-video">
    <div style="background:black;height:57.2px;width:100%;  position:fixed;top:0;z-index:1000">
      <img src="../../assets/images/close.png" alt @click="close" />
    </div>
    <div style="background:black;  padding-bottom: 72px;">
      <div
        v-for="(item,index) in videoList"
        :key="index"
        style="z-index:100; padding-bottom:31px;position: relative;"
      >
        <!-- 遮罩  -->
        <div :class="index!==currentIndex? 'video':''"></div>
        <video :src="item.videoUrl" controls="controls" width="100%" height="200"></video>
        <p class="s-title">{{item.title}}</p>
        <p class="sum">{{item.summary}}</p>
      </div>

      <p class="dixian" v-if="!ishow">我们是有底线的！</p>
      <p class="dixian" v-if="ishow">下拉加载更多</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      id: this.$route.query.id,
      videoList: {},
      idx: this.$route.query.index,
      isClass: "",
      newArr: [],
      scroll: "",
      currentIndex: 0,
      navID: 5,
      ishow: true,
      newVideo: {}
    };
  },
  created() {
    this.videoList = this.$route.query.videoList;
    this.page = this.$route.query.PageIndex;
  },
  watch: {
    idx: {
      handler() {
        this.scrolling();
      },
      immediate: true
    },
    newVideo: {
      handler() {
        this.ishow = false;
      }
      // immediate: true
    }
  },
  mounted() {
    localStorage.setItem("temp", this.navID);
    this.scrolling();
    const self = this;
    //监听页面到达底部
    window.onscroll = function() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
      if (
        Math.ceil(scrollTop + windowHeight) == scrollHeight ||
        parseInt(scrollTop + windowHeight) == scrollHeight
      ) {
        self.page += 1;
        self.getMoreVideo(self.page);
      }
    };
    //监听滚动条位置
    window.addEventListener("scroll", this.scrollTop);
  },
  methods: {
    scrolling() {
      if (this.idx === 0) {
        window.scrollTo(0, this.idx * 300);
      } else if (this.idx === 1) {
        window.scrollTo(0, this.idx * 265);
      } else {
        this.page += 0;
        // this.getMoreVideo();
        window.scrollTo(0, this.idx * 260 + 32);
      }
    },
    getMoreVideo(val) {
      this.axios
        .get("/api/consume/Information/PageList", {
          params: {
            page: val,
            rows: 4,
            Type: 5,
            videoGroup: this.id
          }
        })
        .then(res => {
          for (var i = 0; i < res.data.results.length; i++) {
            this.videoList.push(res.data.results[i]);
          }
          this.newVideo = this.videoList;
        });
    },
    close() {
      this.$router.push({
        path: "/Information"
      });
    },
    scrollTop() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.currentIndex = Math.floor((this.scroll + 57) / 270);
    }
  }
};
</script>

<style scoped>
.video {
  z-index: 2000;
  overflow: hidden;
  clear: both;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0px;
  opacity: 0.5;
}

.s-video {
  padding-bottom: 40px;
  z-index: 1;
  background: black;
  padding-top: 85px;
}
.s-video img {
  margin: 34.5px 50px;
  width: 36px;
  height: 35px;
}
.s-video .s-title {
  font-size: 26px;
  color: #e0e0e0;
  margin-left: 30px;
  margin-top: 31px;
}
.s-video .sum {
  font-size: 22px;
  color: #7f889d;
  margin-top: 15px;
  margin-left: 30px;
}
.dixian {
  color: white;
  font-size: 22px;
  text-align: center;
  padding-bottom: 350px;
  margin-top: 100px;
}
</style>
