<template>
  <div>
    <table>
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
        <tr v-for="(item,index) in LatestList.obtainInfoList" :key="index">
          <td v-html="item.name">{{item.name}}</td>
          <td v-html="item.degree" style="background:#f0f5fa">{{item.degree}}</td>
          <td v-html="item.lastSchool">{{item.lastSchool}}</td>
          <td v-html="item.major" style="background:#f0f5fa">{{item.major}}</td>
          <td v-html="item.company">{{item.company}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LatestList: ""
    };
  },
  mounted() {
    this.axios.get("/api/consume/ObtainInfo/Hot").then(res => {
      this.LatestList = res.data;
      this.$emit("getLatest", this.LatestList);
    });
  }
};
</script>

<style>
table {
  background-color: #fff;
  border-collapse: collapse;
  width: 700px;
  margin: 20px auto;
  table-layout: fixed;
  margin-bottom: 60px;
  border: 1px solid #e2e2e2;
}

th {
  background-color: #6f9eff;
  color: #fff;
  cursor: pointer;
  border-right: 1px solid #7caff4;
  line-height: 63px;
  font-weight: normal;
  font-size: 24px;
}
thead {
  overflow: hidden;
}
tr {
  height: 36px;
  border-radius: 10px;
  overflow: hidden;
}

td {
  background-color: #f9f9f9;
  line-height: 51px;
  font-size: 20px;
  color: #565656;
  padding: 0 10px;
}

td {
  text-align: center;
  width: 100%;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  border: 1px solid #e2e2e2;
}
.company {
  overflow: hidden;
  /* width: 20%; */
  padding-right: 10px;
  padding-left: 12px;
}
</style>
