<template>
 <div class="middle_bottom">
  <div ref="echartsCon" id="echartsContainer" style="width: 100%; height: 100%"></div>
 </div>
</template>

<script>
 export default {
   name: 'middleBottom',
   data () {
     return {
       chart: null
     }
   },
   mounted() {
     this.chart = this.$echarts.init(this.$refs.echartsCon)

     this.chart.setOption({
        grid:{
            top: 20,
            width: '80%'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            lineStyle: {
              color: '#ffffff'
            }
          }
        },
        yAxis: {
            type: 'value',
            axisLine: {
            lineStyle: {
              color: '#ffffff'
            }
          }
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
     })
   },
   components: {

   }
 }
</script>

<style lang='less'>
.middle_bottom{
  height: 100%;
  width: 100%;
  // border: 1px solid black;
} 
</style>