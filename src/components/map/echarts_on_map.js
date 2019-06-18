

const echarts_on_map = {
  _initChart: (chartRef) => {
    chartRef.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
      },
      toolbox:{
        show:true,
        feature : {
            mark : {show: true},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
        }
      },
      calculable: true,
      series: [{
          type: 'pie',
          radius: '60%',
          startAngle:'45',
          label: {
              normal: {
                  show: false
              },
              emphasis: {
                  show: false,
                  textStyle:{
                    color: '#000000',
                    fontWeight:'bold',
                    fontSize:16
                  }
              }
          },
          lableLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
          },
          data:[
            {name:'第一类',value:20},
            {name:'第二类',value:23},
            {name:'第三类',value:45},
            {name:'第四类',value:34},
            {name:'第五类',value:14}
          ]
      }],
      animation: false
    })
  }
}

export default echarts_on_map