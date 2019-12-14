<template>
  <div>
    <vheader />
    <iframe :src="url" frameborder="0" id="show-iframe" style></iframe>
  </div>
</template>

<script>
import Vheader from "../header/VHeader";
export default {
  components: {
    Vheader
  },
  data() {
    return {
      classId: "",
      url: ""
    };
  },
  mounted() {
    this.classId = this.$route.params.id;
    const oIframe = document.getElementById("show-iframe");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + "px";
    oIframe.style.height = deviceHeight - 165 + "px";
    var frame = document.getElementById("show-iframe");
    frame.onload = function() {
      var u = navigator.userAgent;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isiOS) {
        var iframebody = frame.contentWindow.document.body;
        iframebody.style.width = document.body.clientWidth + "px";
        iframebody.style.height = oIframe.style.height;
      }
    };
  },

  watch: {
    classId: {
      handler() {
        this.showClass();
      }
    },
    $route: {
      deep: true,
      handler(val) {
        this.classId = this.$route.params.id;
      }
    }
  },
  methods: {
    showClass() {
      if (this.classId === "cskf") {
        this.url = "../../static/cskf/index.html";
      } else if (this.classId === "istqb") {
        this.url = "../../static/istqb/index.html";
      } else if (this.classId === "jypx") {
        this.url = "../../static/jypx/index.html";
      } else if (this.classId === "tdnx") {
        this.url = "../../static/tdnx/index.html";
      } else if (this.classId === "wpzt") {
        this.url = "../../static/wpzt/index.html";
      } else if (this.classId === "zmjp") {
        this.url = "../../static/zmjp/index.html";
      } else if (this.classId === "zsb") {
        this.url = "../../static/zsb/index.html";
      }
    }
  }
};
</script>

<style scoped>
iframe {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  min-width: 100%;
  *width: 100%;
  width: 1px;
  /* margin-bottom: 120px !important; */
}
</style>
