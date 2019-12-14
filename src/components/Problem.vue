<template>
  <div class="problem">
    <!-- <div class="line"></div> -->
    <div style="overflow:hidden; margin-top:18px;">
      <div class="blue"></div>
      <p class="title">常见问题</p>
    </div>
    <div class="question" v-for="(item,index) in questionList" :key="index">
      <router-link :to="{path:'/CommonQuestion',query:{news:item}}">
        <img src="../assets/images/tr_list-sytle.png" alt />
        <p>{{item.title}}</p>
        <div class="detail">></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionList: []
    };
  },
  mounted() {
    this.axios
      .get("/api/consume/CommonQuestion/PageList", {
        params: {
          rows: 3
        }
      })
      .then(res => {
        this.questionList = res.data.results;
      });
  }
};
</script>

<style>
.problem {
  padding-top: 10px;
  margin-bottom: 50px;
}
.problem .blue {
  width: 6px;
  height: 30px;
  background: #64b3f1;
  float: left;
  margin-top: 5px;
  margin-left: 30px;
}
.problem .title {
  font-size: 32px;
  color: #282828;
  font-weight: bold;
  float: left;
  margin-left: 22px;
  margin-bottom: 8px;
}
.question {
  overflow: hidden;
  padding: 30px 0px;
  border-bottom: 1px solid #e2e2e2;
  margin: 0 30px;
}
.question img {
  width: 8px;
  height: 8px;
  float: left;
  margin-right: 20px;
  margin-top: 15px;
}
.question p {
  float: left;
  color: #444444;
  font-size: 26px;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  width: 80%;
}
.question .detail {
  float: right;
  color: #3f97ff;
  font-size: 30px;
  margin-right: 20px;
  height: 16px;
  font-weight: bold;
}
</style>
