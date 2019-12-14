// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import "lib-flexible/flexible.js";
import Moment from "moment";
import waterfall from 'vue-waterfall2'

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(Moment);
Vue.use(waterfall)

Vue.filter("formatDate", function(value) {
  return Moment(value).format("YYYY-MM-DD");
});
Vue.filter("format", function(value) {
  return Moment(value).format("YYYY/MM/DD");
});

router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
