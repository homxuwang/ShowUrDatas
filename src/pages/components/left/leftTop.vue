<template>
 <div class="left_top">
  <div ref="echartsCon" id="echartsContainer" style="width: 100%; height: 100%"></div>
 </div>
</template>

<script>
 export default {
   name: 'leftTop',
   data () {
     return {
       chart: null
     }
   },
   mounted() {
     this.chart = this.$echarts.init(this.$refs.echartsCon);

     this.chart.setOption({
          title: {
              text: 'ECharts',
              textStyle: {
                color: '#ffffff',
                fontSize: 15
              }
          },
          grid:{
            top: 30
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋'],
              axisLine: {
                lineStyle: {
                  color: '#ffffff'
                }
              }              
          },
          yAxis: {
            axisLine: {
                lineStyle: {
                  color: '#ffffff'
                }
              }
          },
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10]
          }]
      });
   },
   components: {

   }
 }
</script>

<style lang="less">
.left_top{
  height: 100%;
  width: 100%;
  // border: 1px solid black;
} 
</style>

