
<template>
  <div>
    <v-header />
    <FirstSwiper />
    <Class />
    <Star />
    <Teacher />
    <Hot />
    <Problem />
    <Campus />
  </div>
</template>

<script>
import VHeader from "./header/VHeader";
import FirstSwiper from "./swiper/First-swiper";
import Class from "./Class";
import Star from "./Star";
import Teacher from "./Teacher";
import Hot from "./Hot";
import Problem from "./Problem";
import Campus from "./campus/Campus";
export default {
  components: {
    VHeader,
    FirstSwiper,
    Class,
    Star,
    Teacher,
    Hot,
    Problem,
    Campus
  },
  data() {
    return {
      isShow: Boolean
    };
  },
  mounted() {
    // document.documentElement.scrollTop || document.body.scrollTop;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
.bground {
  background: #000;
  opacity: 0.7;
}
.none-b {
  background: none;
}
</style>
