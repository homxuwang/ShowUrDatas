<template>
  <div class="left_mid">
    <div ref="echartsCon" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
 export default {
   name: 'leftMid',
   data () {
     return {
       chart: null
     }
   },
   mounted() {
     this.chart = this.$echarts.init(this.$refs.echartsCon)

     this.chart.setOption({
       tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
       },
       legend: {
         orient: 'vertical',
         x: 'left',
         textStyle: {
           color: '#ffffff',
           fontSize: 10
         },
         data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
       },
       series: [
         {
           name: '访问来源',
           type: 'pie',
           radius: ['50%', '70%'],
           avoidLabelOverlap: false,
           label: {
             normal: {
               show: false,
               position: 'center'
             },
             emphasis: {
               show: true,
               textStyle: {
                 fontSize: '20',
                 fontWeight: 'bold'
               }
             }
           },
           labelLine: {
             normal: {
               show: true
             }
           },
           data: [
             {value: 335, name: '直接访问'},
             {value: 310, name: '邮件营销'},
             {value: 234, name: '联盟广告'},
             {value: 135, name: '视频广告'},
             {value: 1548, name: '搜索引擎'},
           ]
         }
       ]
     })
   },
   components: {

   }
 }
</script>

<style lang='less'>
.left_mid{
  height: 100%;
  width: 100%;
  // border: 1px solid black;
}
 
</style>
