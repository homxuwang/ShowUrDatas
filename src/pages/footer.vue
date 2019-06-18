<template>
  <div id="app_footer">
    <div class="info">
      <span>@Copyright homxuwang</span>
      <span>2019/04 --  </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appFooter',
  data() {
    return{
    }
  },
  created() {
   
  },
  methods: {}
}
</script>
<style lang='less'>
#app_footer {
  width: 100%;
  height: 40px;
  margin-top: 2px;
  position: relative;
  text-align: center;
  background-color: rgba(20, 36, 68, 0.9);
  color: rgb(239, 239, 239);
  .info {
    margin: 0 auto;
    font-size: 12px;
    line-height: 40px;
    color: #EEE;
    background-color: rgba(0, 0, 0, 0.15);
    span {
      margin: 0 10px;
    }
  }
}
</style>