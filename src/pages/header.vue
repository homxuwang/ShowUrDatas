<template>
 <div class="app_header">
   <div class="bg_header">
     <div class="t_title">
        数据展示系统
     </div>
     <div class="tabs_header">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="选项1" name="first"></el-tab-pane>
          <el-tab-pane label="选项2" name="second"></el-tab-pane>
          <el-tab-pane label="选项3" name="third"></el-tab-pane>
          <el-tab-pane label="选项4" name="fourth"></el-tab-pane>
        </el-tabs>
     </div>
   </div>
  
 </div>
</template>

<script>
 export default {
   name: 'appHeader',
   data () {
     return {
       activeName: 'first'
     }
   },
   methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
   },
   components: {

   }
 }
</script>

<style lang="less">
.app_header{
  width: 100%;
  height: 60px;
  position: relative;
  padding: 0 20px;
  .bg_header{
    width: 100%;
    height: 40px;
    background: url(../assets/img/title.png) no-repeat;
    background-size: 100% 100%;
    .t_title {
		    width: 100%;
		    height: 100%;
		    text-align: center;
		    font-size: 2.5em;
		    line-height: 45px;
        color: #fff;
        text-shadow: 0px 0px 13px rgb(0, 238, 238);
    }
    .tabs_header{
       margin-top: -25px;
       float:right;
       width:30%;
       right: 20px;
    }
  }
}
</style>
<style lang="less">
.el-tabs__item{
  color: #fff;
}
</style>
