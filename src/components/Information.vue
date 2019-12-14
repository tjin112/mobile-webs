<template>
    <div class="sub-info">
      <v-header />
      <Nav />
    </div>
</template>

<script>
import VHeader from "./header/VHeader";
import Nav from "./information/Nav";
export default {
  components: {
    VHeader,
    Nav
  },
};
</script>

<style>
.sub-info {
  background: #f4f4f4;
}
</style>
