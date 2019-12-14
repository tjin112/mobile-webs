<template>
  <transition name="slide-fade">
    <div v-if="isShow" class="camp">
      <div class="campus-card" v-for="(item,index) in cityInfo" :key="index">
        <div class="campus-title">
          <div class="blue-city"></div>
          <div class="campus-center">
            {{item.name}}：
            <a
              :href="'tel:'+item.phone.substring(0, 10)"
              v-if="index===9"
            >{{item.phone.substring(0, 10)}}</a>
            <a :href="'tel:'+item.phone.substring(12)" v-if="index===9">{{item.phone.substring(11)}}</a>
            <a :href="'tel:'+item.phone.substring(12)" v-else>{{item.phone}}</a>
          </div>
        </div>
        <div style="overflow: hidden;">
          <img class="map" src="../../assets/images/index_map.png" alt />
          <p class="address">{{item.address}}</p>
        </div>
        <div class="pic">
          <div class="pic-url" v-for="(v,i) in picList[index]" :key="i" style="float:left;">
            <img
              class="school"
              :src="v.url"
              v-if="picList[index][i].type===1"
              @click="getPic(v.url)"
            />
            <img
              class="school"
              src="../../assets/images/shipin.png"
              alt
              v-if="picList[index][i].type===2"
              @click="isVideo(v.url)"
            />
          </div>
        </div>
      </div>
      <CampVideo :url="url" v-if="isShowVideo" @isVideo="getVideo" />
      <div class="picutre" v-if="isPic" @click="isClose">
        <img :src="picUrl" alt />
      </div>
    </div>
  </transition>
</template>

<script>
import CampVideo from "../video/CampusVideo";
export default {
  props: ["navID"],
  components: {
    CampVideo
  },
  data() {
    return {
      isShow: true,
      cityInfo: [],
      id: "",
      picList: "",
      newList: [],
      url: "",
      isShowVideo: false,
      picUrl: "",
      isPic: false
    };
  },
  watch: {
    navID: {
      handler: function() {
        if (this.navID === 4) {
          this.isShow = true;
          localStorage.setItem("tempID", this.navID);
        } else {
          this.isShow = false;
        }
      },
      immediate: true
    }
  },
  beforeMount() {},
  mounted() {
    this.axios
      .get("/api/consume/Organization/OrganizationExtendList", {
        params: {
          position: 2
        }
      })
      .then(res => {
        this.cityInfo = res.data;
        for (let index = 0; index < this.cityInfo.length; index++) {
          this.newList.push(this.cityInfo[index].mediaInfoList);
        }
        const data = [];
        for (let index = 0; index < this.newList.length; index++) {
          const items = [];
          for (let i = 0; i < this.newList[index].length; i++) {
            if (this.newList[index].length > 0) {
              var v = {};
              if (this.newList[index][i].type === 2) {
                items[2] = this.newList[index][i];
              }
              //type 1 为无视频
              else if (this.newList[index][i].type === 1) {
                if (!items[0]) {
                  items[0] = this.newList[index][i];
                } else if (!items[1]) {
                  items[1] = this.newList[index][i];
                } else if (!items[2]) {
                  items[2] = this.newList[index][i];
                }
              }
            }
          }
          data.push(items);
        }
        this.picList = data;
      });
  },
  methods: {
    isVideo(val) {
      this.url = val;
      this.isShowVideo = true;
    },
    getVideo(val) {
      this.isShowVideo = val;
    },
    getPic(val) {
      this.picUrl = val;
      this.isPic = true;
    },
    isClose() {
      this.isPic = false;
    }
  }
};
</script>

<style scoped>
.camp {
  background: #f4f4f4;
  padding-bottom: 30px;
}
.campus-card {
  background: #ffffff;
  padding: 30px 0px;
  overflow: hidden;
  margin-top: 20px;
}
.campus-card .campus-title {
  border-bottom: 1px solid #e2e2e2;
  overflow: hidden;
  padding-bottom: 15px;
  margin-bottom: 14.5px;
  margin-left: 35.5px;
}
.campus-card .campus-title .blue-city {
  background: #0084ff;
  height: 25px;
  width: 4px;
  float: left;
  margin-top: 5px;
  margin-left: 10px;
}
.campus-card .campus-title .campus-center {
  font-size: 25.5px;
  float: left;
  margin-left: 20px;
}
.campus-card .map {
  width: 22px;
  height: 27px;
  float: left;
  margin-left: 35.5px;
}
.campus-card .address {
  float: left;
  margin-left: 10px;
  color: #8b8b8b;
  width: 87%;
}
.campus-card .pic {
  padding-left: 20px;
  margin-top: 20px;
}
.campus-card .pic .school {
  width: 225.5px;
  height: 134.5px;
  margin-left: 10px;
}
.default {
  content: none;
  background: url("/shipin.png") no-repeat center;
  width: 225.5px;
  height: 134.5px;
  margin-left: 10px;
}
.campus-card .pic .video {
  width: 225.5px;
  height: 134.5px;
  margin-left: 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(230px);
  opacity: 0.5;
}
.picutre {
  background: black;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.picutre img {
  position: fixed;
  width: 582px;
  height: 331px;
  top: 33%;
  left: 11.5%;
  animation-name: car;
  animation-duration: 250ms;
  animation-iteration-count: 1;
}

@keyframes car {
  /*from{
					transform: translate3d(0,0,0);
				}
				to{
					transform: translate3d(1000px,0,0);
				}*/
  0% {
    transform: translate3d(1000px, 0, 0);
  }
}
</style>
