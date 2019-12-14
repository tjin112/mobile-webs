<template>
  <div class="city-campus" v-if="isshow ||isShow" @click="quit">
    <div class="citycenter">
      <div
        class="center"
        v-for="(item,index) in cityList"
        :key="index"
        @click="showCampusInfo(item.id)"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isShow"],
  data() {
    return {
      cityList: [],
      isClick: true,
      id: "",
      campusName: "",
      isshow:Boolean
    };
  },
  watch:{
    isshow:{
      handler:function(){
        this.isshow = this.isShow;
      },
      immediate:true
    }
  },
  mounted() {
    this.axios.get("/api/consume/Organization/").then(res => {
      this.cityList = res.data;
    });
  },
  methods: {
    showCampusInfo: function(cityID) {
      this.$emit("getId", this.id);
      this.isClick = false;
      this.id = cityID;
      this.$emit("getShow", this.isClick);
      this.$emit("getId", this.id);
    },
    quit(){
      if(this.isShow===true){
        this.isshow = false;
        this.$emit("getShow", this.isshow);
      }
    }
  }
};
</script>

<style>
.city-campus {
  z-index: 2000;
  overflow: hidden;
  clear: both;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
   position: fixed;
   left: 0;
   top: 0;
}
.citycenter {
  width: 94%;
  background: #ffffff;
  overflow: hidden;
  clear: both;
  padding: 20px;
  position: fixed;
  top: 30%;
  z-index: 2000;
}
.center {
  float: left;
  background: #f5f5f7;
  width: 31.3%;
  text-align: center;
  height: 100px;
  font-size: 26px;
  margin: 1%;
  line-height: 100px;
}
</style>
