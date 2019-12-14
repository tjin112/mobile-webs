<template>
  <div class="className">
    <div
      class="card"
      v-for="(item,index) in classList"
      :key="index"
      @click="getClassId(item.classId,item.shortName)"
    >
      <img :src="item.url" alt />
      <p>{{item.className}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classList: [
        {
          url: require("../assets/images/kc_icon1.png"),
          className: "就业培训班",
          classId: 1,
          shortName: "jypx"
        },
        {
          url: require("../assets/images/kc_icon2.png"),
          className: "测试开发班",
          classId: 2,
          shortName: "cskf"
        },
        {
          url: require("../assets/images/kc_icon3.png"),
          className: "周末精品班",
          classId: 3,
          shortName: "zmjp"
        },
        {
          url: require("../assets/images/kc_icon4.png"),
          className: "团队内训",
          classId: 4,
          shortName: "tdnx"
        },
        {
          url: require("../assets/images/kc_icon5.png"),
          className: "委培直招",
          classId: 5,
          shortName: "wpzt"
        },
        {
          url: require("../assets/images/kc_icon6.png"),
          className: "名校专升本",
          classId: 6,
          shortName: "zsb"
        },
        {
          url: require("../assets/images/kc_icon7.png"),
          className: "ISTQB认证",
          classId: 7,
          shortName: "istqb"
        }
      ]
    };
  },
  methods: {
    getClassId(id, shortName) {
      this.$router.push({
        path: `/ClassPage/${shortName}`,
        params: {
          id: shortName
        }
      });
    }
  }
};
</script>

<style>
.className {
  padding-left: 36px;
  padding-right: 36px;
  height: 450px;
  clear: both;
}
.card {
  width: 25%;
  float: left;
  text-align: center;
  margin-top: 64px;
  /* margin-left: 52px; */
}
.card img {
  width: 96px;
  height: 96px;
}
.card p {
  font-size: 26px;
  color: #282828;
  margin-top: 24px;
}
</style>
