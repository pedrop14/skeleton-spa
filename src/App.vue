<template>
  <div id="app">
    <loading :loading="loadingOptions"></loading>
    <router-view/>
  </div>
</template>

<script>
import loading from '@/components/loading.vue'

export default {
  name: 'Skeleton',
  components: {
    loading
  },
  data () {
    return {
      loadingOptions: {
        showLoading: true,
        text: 'Carregando...',
        height: 30,
        width: 30
      }
    }
  },
  mounted () {

  },
  created () {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
