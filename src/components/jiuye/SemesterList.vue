<template>
  <!-- 学期列表 -->
  <div v-if="isSemester">
    <div class="semester-list" v-if="totalSemester">
      <div class="s-list">
        <div style="overflow:hidden">
          <div class="blue"></div>
          <p class="title">就业龙虎榜</p>
          <div class="right" @click="showList">
            <img src="../../assets/images/xl.png" alt />
            <p class="total">共{{totalSemester.count}}期</p>
          </div>
        </div>
        <!-- 就业龙虎榜分页 -->
        <div v-if="isShow" style="overflow:hidden;margin:10px 0 ;">
          <div
            class="semesterDomain"
            v-for="(item,index) in semester"
            :key="index"
            @click="getDomain(item.pageIndex)"
          >
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
      <!--  individual semester number -->
      <div style="overflow:hidden;padding-left:10px;">
        <div class="semesterID" v-for="(item,index) in totalSemester.results" :key="index">
          <router-link :to="{path:'/jobDetail',query:{arry:item,shortName,cityId}}">{{item.name}}</router-link>
        </div>
      </div>
      <div class="more" v-if="!sort" @click="more">
        <p v-if="isMore">查看更多>></p>
        <p v-else>全部加载完毕...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cityId", "shortName", "isSemester"],
  data() {
    return {
      semester: "",
      index: 1,
      totalSemester: "",
      size: "", //pageSize,
      pageIndex: "", //pageIndex
      sort: "", //sort的顺序
      isShow: false,
      isMore: true
    };
  },
  watch: {
    cityId: {
      handler: function() {
        this.getSemesterID();
        this.size = 18;
        this.sort = "";
        this.pageIndex = "";
        this.isMore = true;
      }
    },
    size: {
      handler: function() {
        this.getSemesterID();
        if (this.size >= this.totalSemester.count) {
          this.isMore = false;
        } else {
          this.isMore = true;
        }
      }
    },
    pageIndex: {
      handler: function() {
        this.getSemesterID();
      }
    }
  },
  methods: {
    getSemesterID() {
      this.axios
        .get("/api/consume/Semester/PageList", {
          params: {
            OrgId: this.cityId,
            sorttype: this.sort,
            rows: this.size,
            page: this.pageIndex
          }
        })
        .then(res => {
          this.totalSemester = res.data;
        });
      this.axios
        .get("/api/Consume/Semester/SemesterGroups", {
          params: {
            OrgId: this.cityId
            // PageSize: 1000
          }
        })
        .then(res => {
          this.semester = res.data;
        });
    },
    showList() {
      if (this.isShow === true) {
        this.isShow = false;
      } else {
        this.isShow = true;
        Math.floor(this.total/24)
      }
    },
    more() {
      this.size += 18;
    },
    getDomain(page) {
      this.pageIndex = page;
      this.sort = 1;
      this.size = 24;
    },
    Sdetail(id, name) {
      this.$router.push({ path: `/jobDetail/${name}` });
    }
  }
};
</script>

<style>
.semester-list{
  padding-bottom: 32px;
}
.s-list {
  /* padding: 0 35.5px; */
  padding-top: 46px;
  padding-bottom: 42px;
  
  /* padding-bottom:  */
  background: #f5f5f5;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: -9px;
  border-top: 1px solid #e2e2e2;
}
.s-list .blue {
  width: 6px;
  height: 30px;
  background: #64b3f1;
  float: left;
  margin-top: 5px;
  margin-left: 30px;
}
.s-list .title {
  font-size: 32px;
  color: #666;
  font-weight: bold;
  float: left;
  margin-left: 22px;
}
.s-list .right {
  float: right;
  overflow: hidden;
  margin-right: 45px;
}
.s-list .total {
  float: right;
  color: #0084ff;
  font-size: 26px;
  margin-top: 10px;
  margin-right: 10px;
}
.s-list img {
  float: right;
  width: 21.5px;
  height: 9.4px;
  margin-top: 20px;
}
.s-list .semesterDomain {
  background: #ffffff;
  width: 220px;
  height: 54px;
  font-size: 26px;
  text-align: center;
  line-height: 54px;
  color: #282828;
  border-radius: 27px;
  float: left;
  margin-left: 18px;
  margin-top: 26px;
}
.semesterID {
  background: #ffffff;
  width: 224px;
  height: 84px;
  font-size: 26px;
  text-align: center;
  line-height: 84px;
  color: #282828;
  border: 1px solid #e2e2e2;
  float: left;
  margin-right:8px;
  margin-top: 14px;
}
.semester-list .more {
  text-align: center;
  font-size: 26px;
  color: #747474;
  margin-top: 30px;
}
</style>
