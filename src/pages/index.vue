<template>
  <div class="home">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './header'
import appFooter from './footer'
import appContent from './content'
export default {
  name: 'home',
  components: {
    appHeader,
    appFooter,
    appContent
  },
  data () {
    return {
      
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>
.home{
  background: url(../assets/img/bg.png) repeat-x;
  margin:0;
  width: 100%;
  height: 100%;
}
</style>
