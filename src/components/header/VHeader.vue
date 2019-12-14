<template>
  <div>
    <div style="height:50px; background:#f4f4f4">
      <div class="left" align="left" style="float:left; width:50%">
        <a href="/"><img src="./logo.png" style="padding-top:14px; padding-left:10.5%" /></a>
        
      </div>
      <div align="right" style="float:left; width:45.5%;; padding-top:18px; ">
        <a style="font-size:14px; color:#0084ff; font-family:SourceHanSanCN-Normal">股票代码：836392</a>
      </div>
    </div>
    <Nav/>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
  name: 'v-header',
    components:{
        Nav
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
.left img {
  height: 42px;
}
</style>
