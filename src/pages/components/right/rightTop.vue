<template>
 <div class="right_top">
   <div ref="echartsCon" id="echartsContainer" style="width: 100%; height: 100%"></div>
 </div>
</template>

<script>
 export default {
   name: 'rightTop',
   data () {
     return {
       chart: null
     }
   },
   mounted() {
     this.chart = this.$echarts.init(this.$refs.echartsCon)

     this.chart.setOption({
       dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
            ]
        },
        grid: {containLabel: true},
        xAxis: {
          name: 'amount',
          axisLine: {
            lineStyle: {
              color: '#ffffff'
              
            }
          },
          axisLabel: {
            rotate: 45
          },
          nameTextStyle: {
            fontSize: 10
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#ffffff'
            }
          }
        },
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#D7DA8B', '#E15457']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
     })
   },
   components: {

   }
 }
</script>

<style lang='less'>
.right_top{
  height: 90%;
  width: 100%;
  // border: 1px solid black;
} 
</style>