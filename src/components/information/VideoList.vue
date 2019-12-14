<template>
  <div v-if="isShow" class="video">
    <swiper :options="swiperOption" v-if="story">
      <swiper-slide class="slide-1" v-for="(item,index) in story.videoBanners" :key="index">
        <div class="cardBg" @click="playVideo(item.videoGroup,index)">
          <img :src="item.imageUrl" alt />
          <div
            class="banner-title"
            style="position: absolute;bottom:10px;color:#ffffff;font-size:19px;"
          >
            <p style="float:left; margin-top:5px;">
              <b>＜</b>
              {{ item.videoGroup}}
              <b>＞</b>
            </p>
            <p style="float:left; left:100px;margin-top:5px;">{{item.summary}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="video-part" v-for="(item,index) in story.videoBlocks" :key="index">
      <div style="overflow:hidden">
        <div class="blue"></div>
        <p class="title">{{item.videoGroup}}</p>
        <img
          class="turn"
          src="../../assets/images/turn.png"
          alt
          @click="newContent(item.videoGroup)"
        />
        <p class="change" @click="newContent(item.videoGroup)">换一批</p>
      </div>
      <div
        class="video-img"
        v-for="(v,i) in item.videos"
        :key="i"
        @click="playVideo(item.videoGroup,i)"
      >
        <img :src="v.imageUrl" alt />
        <p class="img-title">{{v.title}}</p>
        <!-- <p class="img-sum">{{v.summary}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["navID"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      isShow: Boolean,
      swiperOption: {
        // sliderPreView:1,
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          renderCustom: function(swiper, current, total) {
            const activeColor = "#ffffff";
            const normalColor = "#c9caca";
            let color = "";
            let paginationStyle = "";
            let html = "";
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor;
              } else {
                color = normalColor;
              }
              paginationStyle = `margin-bottom:5px;background:${color};opacity:1;margin-right:10px;width:7px;height:7px`;
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`;
            }
            return html;
          }
        }
      },
      story: {
        videoBanners: [],
        videoBlocks: [{ videoGroup: "", videos: [] }]
      },
      number: 1, //学员故事
      num: 0, //科普时间
      videoGroup: "",
      stop: false,
      maxPage: 1,
      maxPageS: 1
    };
  },
  watch: {
    navID: {
      handler: function() {
        if (this.navID === 5) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      immediate: true
    },
    number: {
      handler() {
        if (this.number % 2) {
          this.number = 1;
        }
        this.getVideo();
      }
    },
    num: {
      handler() {
        this.getVideoScience(); //科普时间
      }
    }
  },
  mounted() {
    this.getPageInfo();
  },

  methods: {
    //点击事件
    newContent(val) {
      if (val === "学员故事") {
        if (this.number > this.maxPage) {
          this.number = 1;
        } else {
          this.number += 1;
          this.videoGroup = "学员故事";
        }
      }
      if (val === "科普时间") {
        this.num = 1;
        if (this.num < this.maxPageS) {
          this.videoGroup = "科普时间";
          this.num += 1;
        }
      }
    },
    getPageInfo() {
      this.axios
        .get("/api/consume/Information/VideoIndex", {
          params: {
            num: 4
          }
        })
        .then(res => {
          this.story = res.data;
        });
    },
    getVideo() {
      this.axios
        .get("/api/consume/Information/PageList", {
          params: {
            page: this.number,
            rows: 4,
            Type: 5,
            videoGroup: "学员故事"
          }
        })
        .then(res => {
          if (Number.isInteger(res.data.count / 4) === false) {
            this.maxPage = Math.ceil(res.data.count / 4);
          } else {
            this.maxPage = res.data.count / 4;
          }
          if (this.videoGroup === "学员故事") {
            this.story.videoBlocks[0].videos = res.data.results;
          }
          // else {
          //   this.story.videoBlocks[1].videos = res.data.results;
          // }
        });
    },
    getVideoScience() {
      this.axios
        .get("/api/consume/Information/PageList", {
          params: {
            page: this.num,
            rows: 4,
            Type: 5,
            videoGroup: "科普时间"
          }
        })
        .then(res => {
          if (Number.isInteger(res.data.count / 4) === false) {
            this.maxPageS = Math.ceil(res.data.count / 4);
          } else {
            this.maxPageS = res.data.count / 4;
          }
          if (this.videoGroup === "科普时间") {
            this.story.videoBlocks[1].videos = res.data.results;
          }
        });
    },
    playVideo(val, index) {
      const list = "";
      if (val === "学员故事") {
        this.list = this.story.videoBlocks[0].videos;
      } else if (val === "科普时间") {
        this.list = this.story.videoBlocks[1].videos;
      }
      if (!this.number) {
        this.number = 1;
      }
      this.$router.push({
        path: `/video`,
        query: {
          id: val,
          PageIndex: this.number,
          videoList: this.list,
          index: index
        }
      });
    }
  }
};
</script>

<style scoped>
.video {
  background: #ffffff;
  /* margin-bottom: 120px; */
}
.swiper-container {
  margin: 0 auto;
  overflow: hidden;
  width: 90%;
}

.swiper-slide img {
  width: 675px;
  height: 356px;
  z-index: 1;
}
.banner-title {
  overflow: hidden;
  /* background-image: url("/assets/images/top_vedio_title_bg.png"); */
  background: url("static/top_vedio_title_bg.png") no-repeat center;
  width: 100%;
  height: 62px;
  margin-top: -10px;
}
.video .video-part {
  background: #ffffff !important;
  overflow: hidden;
  margin-top: 56px;
  padding: 0 13.5px;
  /* height:600px; */
}
.video-part .change {
  /* width: 400px; */
  float: right;
  color: #747474;
  font-size: 24px;
  margin-right: 20px;
  line-height: 43px;
}
.video-part .turn {
  float: right;
  margin-top: 7px;
  margin-right: 22px;
}
.video .blue {
  width: 6px;
  height: 30px;
  background: #64b3f1;
  float: left;
  margin-top: 5px;
  margin-left: 22px;
}
.video .title {
  font-size: 32px;
  color: #282828;
  font-weight: bold;
  float: left;
  margin-left: 22px;
}
.video-img {
  float: left;
}
.video-img img {
  width: 334px;
  height: 198px;
  margin-left: 21px;
  margin-top: 35px;
}
.img-title {
  margin-left: 22px;
  font-size: 26px;
  color: #444444;
  width: 334px;
  /* height: 120px; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.img-sum {
  margin-left: 22px;
  font-size: 22px;
  color: #8b8b8b;
  margin-top: 19px;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  left: 300px;
}
</style>
