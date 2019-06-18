<template>
 <div class="layersbox">
  <el-checkbox-group 
    v-model="checkedList"
    :min="0"
    :max="2">
    <el-checkbox v-for="type in mapLayers" 
                 :label="type.name" 
                 :key="type.value" 
                 @change="checked=>_isCheckedLayerBox(checked,type.value)">
      {{type.name}}
    </el-checkbox>
  </el-checkbox-group>
 </div>
</template>

<script>
const mapLayersArr = [
  {
    name: '热力图',
    value: 'Heatmap'
  },
  // {
  //   name: '饼状图',
  //   value: 'Piemap'
  // }
  ];
 export default {
   name: 'LayersBox',
   data () {
     return {
       checkedList: [],
       mapLayers: mapLayersArr
     }
   },
   methods: {
     //向父组件传参,是否显示当前选中的图类型
     _isCheckedLayerBox(checked,type){
       let fatherValue = 'show' + type
       let checkedOption = {
         isShow: checked,
         whichType: fatherValue
       }
       
       this.$emit('checkedOption',checkedOption)
     }
   },
   components: {

   }
 }
</script>

<style lang="less">
.layersbox{
  z-index: 500;
  position: absolute;
  right: 55px;
  top: 2px;
  width: 20px;
  background-color: rgba(20, 36, 68, 0.5);
}
</style>

<style lang="less">
.el-checkbox{
  margin: 3px 5px 2px 2px;
}
.el-checkbox__label{
  color: #ffffff;
}
</style>
