// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vcomp from './components/index.js'
import VCharts from 'v-charts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'v-charts/lib/style.css'
import echarts from 'echarts';


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(Vcomp)
//配置echarts
Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
