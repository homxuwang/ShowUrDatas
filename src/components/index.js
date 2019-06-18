import databox from './dataBox'
import VMap from './map/mapCon'
import LayersBox from './layerBox'

const components = {
  databox,
  VMap,
  LayersBox
}

const install = (Vue, options = {}) => {
  if(install.installed) return
  //注册为全局组件
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
  install.installed = true
}

install.installed = false

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  install.installed = true
}

const Vcomp = {
  ...components,
  install
}

export default Vcomp