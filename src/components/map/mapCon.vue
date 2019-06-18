<template>
  <div id="map_div">
    <div ref="mapCont" id="map">
      <layers-box v-on:checkedOption="handleCheckedOption"></layers-box>
      <div v-show="showPiemap" id="chart_km" ref="chart_km" :style="{ height: chartHW + 'px' , width: chartHW + 'px' } "></div>
    </div>  
  </div>
 
</template>

<script>
import 'ol/ol.css'
import {Map,View} from 'ol'
import GeoJSON from 'ol/format/GeoJSON.js'
import {Tile as TileLayer, Vector as VectorLayer,Heatmap as HeatmapLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource,XYZ as XYZLayer} from 'ol/source.js';
import {defaults as defaultControls, OverviewMap, ZoomToExtent} from 'ol/control.js';
import { Icon,Style,Circle,Fill,Stroke} from 'ol/style.js'
import Overlay from 'ol/Overlay'
import echarts_on_map from './echarts_on_map'
 export default {
   name: 'VMap',
   data () {
     return {
       map: null,
       chartHW: 60,
       chart_km: null,
       heatMapLayer: null, //热力图图层
       heatMapSource: null, //热力图数据源
       showPiemap: false,
       showHeatmap: false
     }
   },
   mounted() {
     this._initMap()
     //在mouted的时候就初始化表格吧,后面只控制表格Overlay这个div的显示和隐藏
     this._initCharts()
    //  地图缩放变化时调整echarts图的大小
    if(this.showPiemap) {
      this.map.getView().on('change:resolution',() => {
      let nowZoom =  this.map.getView().getZoom()
      // console.log(nowZoom)  
      setTimeout(() => {
        this.chartHW = Math.pow(2,nowZoom - 0.7 )
        this.chart_km.resize()
      },100)      
     })
    }
    

    if(this.showHeatmap){
      debugger
      this.heatMapLayer.getSource().on('addfeature', function(event) {        
        var name = event.feature.get('BOU2006_NA');
        var value = event.feature.get('InputValue');
        event.feature.set('weight', value / 10000);
      });
    }
   },
   components: {
   },
   computed: {
   },
   watch: { //watch不要用箭头函数!!!用了箭头函数的话,this就是指向函数体而不是Vue了
            //watch不要用箭头函数!!!用了箭头函数的话,this就是指向函数体而不是Vue了
            //watch不要用箭头函数!!!用了箭头函数的话,this就是指向函数体而不是Vue了
     /**
      * 控制饼图Overlay的显示与否,这里暂时不用watch监控了,而是直接在div上用v-show控制(后面如果div多的话可以进行控制)
      */
     showPiemap: function(val) {
     },
     /**
      * 控制热力图层的显示与否
      */
     showHeatmap: function(val,oldVal) {
       console.log(val,oldVal)
       if(val) {
         //先判断热力图数据源是否创建
         this._checkheatMapSource()
         //创建热力图
         this._initHeatMap()
         //将热力图加到地图中
         this.map.addLayer(this.heatMapLayer)
       }else if(!val){
         //移除热力图Feature
        //  var features = this.heatMapLayer.getSource().getFeatures();
        //   features.forEach((feature) => {
        //       this.heatMapLayer.getSource().removeFeature(feature);
        //   });
        //移除热力图图层
        this.map.removeLayer(this.heatMapLayer)
       }
     }

   },
   methods: {
     /**
      * 初始化地图
      */
     _initMap() {      
      //导航控件
      let mapZoomToExtent = new ZoomToExtent({
        extent: [90, 15, 113, 33]
      })
      //云南省底图
      let vectorSource = new VectorSource({
        url: '../../../static/data/ynxian.json',
        format: new GeoJSON()
      })

      //天地图矢量图层
      var TiandiMap_vec = new TileLayer({
            name: "天地图矢量图层",
            source: new XYZLayer({
                url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=47a54d0e03f2c2d89db2ebe06c240493",
                wrapX: false
            })
        });
      //天地图矢量注记
      var TiandiMap_cva = new TileLayer({
            name: "天地图矢量注记图层",
            source: new XYZLayer({
                url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=47a54d0e03f2c2d89db2ebe06c240493" ,
                wrapX: false
            })
        });


      let vectorLayer = new VectorLayer({
        source: vectorSource,
        style: new Style({
          //填充色
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.7)'
          }),
          //边线颜色
          stroke: new Stroke({
              color: '#0099FF',
              width: 2
          }),
          //形状
          image: new Circle({
              radius: 7,
              fill: new Fill({
                  color: '#0099FF'
              })
          })
        })
      })

      var mapcontainer = this.$refs.mapCont;
      this.map =  new Map({
        target:  mapcontainer,
        controls: defaultControls().extend([
          mapZoomToExtent
        ]),
        layers: [
          TiandiMap_vec,
          vectorLayer,
          TiandiMap_cva
          ],
        view: new View({
          projection: "EPSG:4326",
          zoom: 6,
          center: [102.73,25.04],
          extent: [94, 20, 110, 30],
          minZoom: 6,
          maxZoom: 9
        })
      });
      
     },
     /**
      * 初始化表格图层,用openlayers的Overlay存放
      */
     _initCharts() {
       this.chart_km = this.$echarts.init(this.$refs.chart_km)
       echarts_on_map._initChart(this.chart_km)
     
       var centerKmOverlay = [102.73,25.04];
       let PieOfKm = new Overlay({
         position: centerKmOverlay,
         positioning: 'center-center',
         element: document.getElementById('chart_km')
       })

       this.map.addOverlay(PieOfKm)
     },
     /**
      * 初始化热力图
      */
     _initHeatMap() {      
       //如果没有创建,则进行创建
       if(this.heatMapLayer == null){
          this.heatMapLayer = new HeatmapLayer({
          source: this.heatMapSource,
          //这里可以根据自己项目的实际，绑定页面的控件动态调整
          blur: 10,
          radius: 14
        })
       }
       
     },
     /**
      * 看HeaptMap图层是否创建,如果没有创建则创建一个
      */
     _checkheatMapLayer() {

     },
     /**
      * 看heatMapSource是否创建,如果没有则创建一个
      */
     _checkheatMapSource() {
       if(!this.heatMapSource){
         this.heatMapSource = new VectorSource({
            url: '../../../static/data/ynPointHeatMap.json',
            format: new GeoJSON()
          })
       }
     },
     _changeChartHW(chartEle,newHW) {
       
     },
     /**
      * 接受并处理子组件的参数,是否显示对应图类型
      * data为一个对象,其字段:
      * isShow 是否显示当前的控件(boolean)
      * whichType 要控制的控件(热力图/饼图)
      */     
     handleCheckedOption (data){
       console.log(data)
       let _this = this
       _this[data.whichType] = data.isShow
       console.log('after ', _this[data.whichType])
     }
   }
 }
</script>

<style lang="less">
#map_div{
  height:100%;
}
#map{
  height: 100%;  
}
.el-checkbox__label{
  color: #409EFF;
}
.el-checkbox{  
  background-color: rgba(0,60,136,0.55)
}
 
</style>
