<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  margin:0;
  height: 100%;
  overflow:hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;  
}
</style>
