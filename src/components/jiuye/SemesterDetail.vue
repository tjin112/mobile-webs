<template>
  <div class="sDetail">
    <div class="head">
      <img src="../../assets/images/fanhui.png" alt @click="prevPage" />
      <p class="t-title" style="margin:0">{{shortName}}{{sName}}</p>
    </div>
    <table v-if="studentList.length">
      <thead>
        <tr>
          <th style="width:15%">姓名</th>
          <th style="width:12%">学历</th>
          <th style="width:25%">毕业学校</th>
          <th style="width:21%">专业</th>
          <th style="width:27%">就业企业</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in studentList" :key="index">
          <td v-html="item.name">{{item.name}}</td>
          <td v-html="item.degree" style="background:#f0f5fa">{{item.degree}}</td>
          <td v-html="item.lastSchool">{{item.lastSchool}}</td>
          <td v-html="item.major" style="background:#f0f5fa">{{item.major}}</td>
          <td v-html="item.company">
            <p style="width:89%">{{item.company}}</p>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="weekend">
      <p>本期为周末班，学员均为已就业人员，不涉及就业信息。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "", //SemesterId
      sName: "",
      shortName: "",
      cityId: "",
      studentList: ""
    };
  },
  created() {},
  mounted() {
    this.id = this.$route.query.arry.id;
    this.sName = this.$route.query.arry.name;
    this.shortName = this.$route.query.shortName;
    this.cityId = this.$route.query.cityId;
    this.axios
      .get("api/consume/ObtainInfo", {
        params: {
          OrgId: this.cityId,
          SemesterId: this.id
        }
      })
      .then(res => {
        this.studentList = res.data;
      });
  },
  methods: {
    prevPage() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.sDetail {
  background: #f8f8f8;
  margin-top: -5px;
  /* padding-bottom: 40px; */
}
.sDetail .head {
  background: #f8f8f8;
  height: 102px;
  text-align: center;
  padding: 0 35.5px;
}
.sDetail .head img {
  width: 14.54px;
  height: 34px;
  margin-top: 36px;
  /* margin-left: 35.5px; */
  float: left;
}
.sDetail .head .t-title {
  font-size: 30px;
  color: #282828;
  line-height: 102px;
  /* float: left; */
  width: 100%;
}
table {
  background-color: #fff;
  border-collapse: collapse;
  width: 700px;
  margin: 20px auto;
  /* overflow: hidden; */
  table-layout: fixed;
  margin-bottom: 40px;
  border-radius: 20px;
}

th {
  /* background-color: #6f9eff; */
  color: #fff;
  cursor: pointer;
  /* border: 1px solid #7caff4; */
  line-height: 63px;
  font-weight: normal;
  font-size: 24px;
  border-right: 1px solid #7caff4;
}
thead {
  overflow: hidden;
  width: 90%;
  border-radius: 20px;
  background: #6f9eff;
}
tr {
  height: 36px;
  border-radius: 20px;
  overflow: hidden;
}

td {
  background-color: #f9f9f9;
  line-height: 51px;
  font-size: 20px;
  color: #565656;
  padding: 0 10px;
}
th {
  line-height: 54px;
}
td {
  text-align: center;
  /* width: 60px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #e2e2e2;
}
.company {
  overflow: hidden;
  /* width: 20%; */
  padding-right: 10px;
  padding-left: 12px;
}
.weekend {
  background: #6f9eff;
  width: 90%;
  height: 76px;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  margin-top: 40px;
}
.weekend p {
  line-height: 76px;
  color: #ffffff;
  font-size: 22px;
}
</style>
