<template>
  <div class="container">
    <div class="d-flex">
      <side-bar />
      <div id="main">
        <content-header :value="pageTitle" />
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from './SideBar/SideBar'
import ContentHeader from './ContentHeader'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    SideBar,
    ContentHeader,
  },
  computed: {
    ...mapGetters('filterModule', [
      'pageTitle'
    ])
  }  
}
</script>
<style scoped>
#main {
  width: 100%;
  padding: 0 10px;
}
</style>