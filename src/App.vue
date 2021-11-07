<template>
  <div class="body">
    <div id="app">
      <master msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<style>
  @import './assets/css/normalize.css';
  @import './assets/css/webflow.css';
  @import './assets/css/themeclassic1.webflow.css';
  @import './assets/css/player.css';
</style>

<script>
import master from './components/master.vue'
export default {
  name: 'App',
  components: {
    master
  }
}
</script>

<style>

</style>
