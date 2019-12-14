<template>
  <transition name="slide-fade">
    <div v-if=" isShow">
      <div class="corList">
        <div class="txt" v-for="(item,index) in txt" :key="index">
          <img src="../../assets/images/icon_new.png" alt />
          <div @click="CorDetail(item.id,item.type)">
            <p>{{item.title}}</p>
          </div>
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
      txt: []
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
    }
  },
  mounted() {
    this.axios
      .get("/api/consume/Information/PageList", {
        params: {
          Type: 2,
          page: 1,
          rows: 10
        }
      })
      .then(res => {
        this.txt = res.data.results;
      });
  },
  methods: {
    CorDetail(id, type) {
      this.$router.push({ path: `/newsDetail/${id}/${type}` });
    }
  }
};
</script>

<style scoped>
.txt {
  overflow: hidden;
}
.corList img {
  width: 54px;
  height: 23px;
  float: left;
  margin-top: 5px;
  margin-left: 30px;
}
.corList p {
  color: #444444;
  font-size: 26px;
  float: left;
  margin-left: 10px;
}
.txt {
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 26px;
  margin-top: 26px;
  margin-left: 30px;
  margin-right: 30px;
}
.txt p {
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  width: 420px;
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
