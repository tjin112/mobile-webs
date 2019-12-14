<template>
  <div class="campus">
    <div style="overflow:hidden">
      <div class="blue"></div>
      <p class="title">校园环境</p>
      <div class="right" @click="showCity">
        <img class="images" src="../../assets/images/xl.png" alt />
        <p class="city">{{campusName}}校区</p>
      </div>
    </div>
    <City :isShow="isShow" @getShow="postShow" @getId="postId" />
    <Info :id="id" @getCampusName="getName" />
  </div>
</template>

<script>
import City from "./City";
import Info from "./Info";
// import func from "../../../vue-temp/vue-editor-bridge";
export default {
  components: {
    City,
    Info
  },
  data() {
    return {
      isShow: false,
      id: "",
      campusName: ""
    };
  },
  mounted() {
    this.id = 1;
  },
  methods: {
    showCity: function() {
      this.isShow = true; 
    },

    postShow: function(val) {
      this.isShow = val;
    },
    postId: function(val) {
      this.id = val;
    },
    getName: function(val) {
      this.campusName = val;
    }
  }
};
</script>

<style>
.campus {
  padding-bottom: 50px;
}
.city {
  font-size: 24px;
  color: #3f97ff;
  float: right;
  margin-right: 20px;
}
.campus .images {
  width: 16px;
  float: right;
  margin-right: 50px;
  margin-top: 10px;
}
.campus .blue {
  width: 6px;
  height: 30px;
  background: #64b3f1;
  float: left;
  margin-top: 5px;
  margin-left: 30px;
}
</style>
