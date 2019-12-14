<template>
  <div class="IntroVideo" @click="close">
    <div class="x-close" @click="close">x</div>
    <div class="frame">
      <iframe class="iframe" :src="url" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      movie_src: "",
      isVideo: Boolean
    };
  },
  methods: {
    close() {
      this.isVideo = false;
      this.$emit("isVideo", this.isVideo);
    }
  }
};
</script>

<style scoped>
.IntroVideo {
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.IntroVideo .frame {
  background: #fcfcfc;
  width: 640px;
  height: 438px;
  top: 33%;
  left: 5.5%;
  position: absolute;
  border: 15px solid #ccc;
  border-radius: 20px;
}
.IntroVideo .frame  .iframe {
  position: absolute;
  top: 2%;
  left: 3.2%;
  width: 600px;
  height: 418px;
}
.x-close {
  font-size: 38px;
  width: 38px;
  height: 38px;
  right: 18px;
  top: 22px;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  line-height: 38px;
  position: absolute;
  text-align: center;
  background: #eee;
}
</style>
