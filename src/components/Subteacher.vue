<template>
  <div>
    <!-- <router-view></router-view> -->
    <v-header />
    <div class="t-nav">
      <ul>
        <li @click="showT">
          <p :class="navId ===1 ? 'actived':''">教学力量</p>
        </li>
        <li @click="showJob">
          <p :class="navId ===2 ? 'actived':''">就业力量</p>
        </li>
      </ul>
    </div>
    <transition name="slide-fade">
      <div class="sub-teacher" v-if="isshow">
        <div
          class="teacherCard"
          v-for="(item,index) in teacherList"
          :key="index"
          @click="Tdetail(item.id)"
        >
          <div class="img-background">
            <!-- <img src="../assets/images/tea3.png" alt /> -->
            <img :src="item.imageUrl" alt />
          </div>
          <p class="name">{{item.name}}</p>
          <p class="lvl">{{item.title}}</p>
          <div class="line"></div>
          <p class="exp">{{item.summary}}</p>
        </div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="sub-teacher" v-if="!isshow">
        <div
          class="teacherCard"
          v-for="(item,index) in teacherList"
          :key="index"
          @click="Tdetail(item.id)"
        >
          <div class="img-background">
            <!-- <img src="../assets/images/tea3.png" alt /> -->
            <img :src="item.imageUrl" alt />
          </div>
          <p class="name">{{item.name}}</p>
          <p class="lvl">{{item.title}}</p>
          <div class="line"></div>
          <p class="exp">{{item.summary}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import VHeader from "./header/VHeader";
export default {
  components: {
    VHeader
  },
  data() {
    return {
      teacherList: [],
      navId: "",
      isshow: true
    };
  },
  watche: {
    navId: {
      handler() {
        this.showT();
      },
      immediate: true
    }
  },
  mounted() {
    this.navId = 1;
    this.getTeacher();
  },
  methods: {
    Tdetail(id) {
      this.$router.push({ path: `/teacherDetail/${id}` });
    },
    showJob() {
      this.navId = 2;
      this.isshow = false;
      this.getTeacher();
    },
    showT() {
      this.navId = 1;
      this.isshow = true;
      this.getTeacher();
    },
    getTeacher() {
      this.axios
        .get("/api/consume/TeacherInfo/PageList", {
          params: {
            Type: this.navId
          }
        })
        .then(res => {
          this.teacherList = res.data.results;
        });
    }
  }
};
</script>
<style scoped>
.t-nav {
  height: 97px;
}
.t-nav ul {
  overflow: hidden;
}
.t-nav ul li {
  float: left;
  width: 50%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 28px;
  color: #282828;
  padding: 30px 0;
}
.t-nav ul li p {
  width: 170px;
  margin: 0px auto;
}
.actived {
  background: #0084ff !important;
  color: #ffffff !important;
  border-radius: 50px;
}
.sub-teacher {
  background: #f4f4f4;
  height: auto;
  padding: 20px 30px;
  padding-top: 20px;
  overflow: hidden;
}
.teacherCard {
  float: left;
  width: 47.2%;
  margin: 1.4%;
  background: #ffffff;
  text-align: center;
  padding-top: 28px;
}
.teacherCard .img-background {
  width: 194px;
  height: 194px;
  border-radius: 100%;
  background: #000000;
  overflow: hidden;
  margin-left: 74px;
}
.teacherCard img {
  width: 194px;
  /* height: 194px; */
  border-radius: 100%;
  vertical-align: middle;
  /* margin-top: 28px; */
}
.teacherCard .name {
  font-size: 28px;
  color: #444444;
  font-family: "SourceHanSansCN-Normal";
  margin-top: 36px;
  font-weight: bold;
}
.teacherCard .lvl {
  font-size: 22px;
  color: #64b3f1;
  margin-top: 4px;
  margin-bottom: 8px;
}
.teacherCard .line {
  width: 64%;
  height: 2px;
  background: #e2e2e2;
  margin: 0 auto;
  /* margin-top: 2px; */
}
.teacherCard .exp {
  font-size: 22px;
  color: #8b8b8b;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  padding-top: 8px;
  padding-left: 10%;
  width: 80%;
  margin-bottom: 20px;
  text-align: left;
  line-height: 32px;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(530px);
  opacity: 0.5;
}
</style>
