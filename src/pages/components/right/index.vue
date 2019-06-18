<template>
 <div class="right_content">
   <databox :title="''" :dheight="100">
     <databox :title="'Right_Top'" :dheight="60" :boxb="false">
      <right-top></right-top>
     </databox>
     <databox :title="'Right_Bottom'" :dheight="40" :boxb="false">
      <right-bottom></right-bottom>
     </databox>   
   </databox>
  
 </div>
</template>

<script>
import rightTop from './rightTop'
import rightBottom from './rightBottom'
 export default {   
   components: {
     rightTop,
     rightBottom
   },
   data () {
     return {

     }
   }
 }
</script>

<style lang='less'>
.right_content{
  height: 100%;
  width: 25%;
  // border: 1px solid black;
}
 
</style>
