<template>
 <div class="left_bottom">
   <div ref="echartsCon" style="width: 100%; height: 100%"></div>
 </div>
</template>

<script>
 export default {
   name: 'leftBottom',
   data () {
     return {
       chart: null
     }
   },
   mounted() {
     this.chart = this.$echarts.init(this.$refs.echartsCon)

     this.chart.setOption({
        title: {
        text: 'Customized Pie',
        left: 'center',
        top: 0,
        textStyle: {
            color: '#ccc',
            fontSize: 15
        }
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
              colorLightness: [0, 1]
          }
      },
      grid:{
        top: 10
      },
      series : [
          {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 5,
                    length2: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
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
.left_bottom{
  height: 100%;
  width: 100%;
  // border: 1px solid black;
} 
</style>
