<template>
  <div id="app">
    <top-bar />
    <router-view />
  </div>
</template>
<script>

import './normalize.css'
import './reused-styles.css'
import store  from './store'
import router from './router'
import TopBar from './components/Header/Header'

export default {
  name: 'App',
  store,
  router,
  components: {
    TopBar,
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

</style>
