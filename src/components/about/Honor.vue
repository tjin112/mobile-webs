<template>
  <!-- swiper -->
  <transition name="slide-fade">
    <div class="honor" v-if="isShow">
      <div class="honor-card" v-for="(item,index) in honorCard" :key="index">
        <div class="images">
          <img :src="item.imageUrl" alt />
        </div>
        <div class="division"></div>
        <div style="text-align: center">
          <div class="year">{{item.year}}</div>
          <div class="content">{{item.name}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["navID"],
  data() {
    return {
      isShow: true,
      honorCard: []
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
    }
  },
  mounted() {
    this.axios.get("/api/consume/CertInfo/PageList").then(res => {
      this.honorCard = res.data.results;
    });
  }
};
</script>

<style scoped>
.honor {
  /* padding: 0 35.5px; */
  background: #f4f4f4;
  overflow: hidden;
  height: 100%;
}
.honor .honor-card {
  background: #ffffff;
  width: 44%;
  padding-bottom: 10px;
  float: left;
  margin-left: 30px;
  margin-bottom: 32.7px;
}
.honor .honor-card .images {
  text-align: center;
  padding: 7%;
}
.honor .honor-card .images img {
  width: 272px;
  /* height: 197.7px; */
  margin: 0px auto;
}
.honor .honor-card .division {
  border-bottom: 1px solid #e2e2e2;
  height: 8px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(230px);
  opacity: 0.5;
}
</style>
