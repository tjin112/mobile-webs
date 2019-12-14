<template>
  <div class="class" v-if="isshow||isShow" @touchmove.prevent @mousewheel.prevent @click="close">
    <div class="classInfo">
      <div
        class="singleClass"
        v-for="(item,index) in className"
        :key="index"
        @click="getClassId(item.id,item.name)"
      >{{item.name}}</div>
    </div>
    <!-- <ClassPage v-if="ID" :ID="ID" /> -->
  </div>
  
</template>

<script>
export default {
  props: ["isShow"],
  data() {
    return {
      className: [
        { name: "就业培训班", id: "jypx" },
        { name: "测试开发班", id: "cskf" },
        { name: "周末精品班", id: "zmjp" },
        { name: "团队内训", id: "tdnx" },
        { name: "委培直托", id: "wpzt" },
        { name: "名校专升本", id: "zsb" },
        { name: "ISTQB认证", id: "istqb" }
      ],
      isshow: false
    };
  },
  watch: {
    isShow: {
      handler() {
        this.isshow = this.isShow;
      },
      immediate: true
    },
    classId: {
      handler() {
        this.showClass();
      }
    }
  },
  methods: {
    close() {
      if (this.isShow === true) {
        this.isshow = false;
        this.$emit("getShow", this.isshow);
      }
    },
    getClassId(id, shortName) {
      this.classId = id;
      this.$router.push({
        path: `/ClassPage/${id}`,
        params: {
          id: id
        }
      });
    }
  }
};
</script>

<style scoped>
.class {
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 190px;
  z-index: 2000;
}
.classInfo {
  width: 100%;
  /* height: 391px; */
  background: #ffffff;
  top: 0px;
  position: absolute;
  overflow: hidden;
  padding: 38px 10px;
  text-align: center;
  padding-bottom: 50px;
}
.classInfo .singleClass {
  background: #f1f1f1;
  height: 84px;
  width: 214px;
  float: left;
  margin: 12px;
  text-align: center;
  line-height: 84px;
  font-size: 26px;
  color: #565656
}
</style>
