<template>
 <div class="left_content">
   <databox :title="''" :dheight="100">

     <databox :title="'Left_Top'" :dheight="35" :boxb="false">
       <left-top></left-top>
     </databox>

     <databox :title="'Left_Mid'" :dheight="35" :boxb="false">
       <left-mid></left-mid>
     </databox>

     <databox :title="'Left_Bottom'" :dheight="30" :boxb="false">
       <left-bottom></left-bottom>
     </databox>

   </databox>
 </div>
</template>

<script>
import leftTop from './leftTop'
import leftMid from './leftMid'
import leftBottom from './leftBottom'
 export default {
   name:'leftContent',
   data () {
     return {

     }
   },
   components: {
    leftTop,
    leftMid,
    leftBottom
   }
 }
</script>

<style lang="less">
.left_content{
  height: 100%;
  width: 25%;
  padding-left: 3px;
  // border: 1px solid black;
}
</style>