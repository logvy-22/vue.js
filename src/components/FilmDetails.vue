<template>
  <div>
    film details {{ $route.params.id }}
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import { getUrlForExactFilm } from '../helpers.js'
export default {
  computed: {
    ...mapGetters('films', ['favouritesList'])
  },
  created: function() {
    const url = getUrlForExactFilm(this.$route.params.id)
    this.getFilmInfo(url)
  },
  methods: {
    ...mapActions('films', [
      'getFilmInfo'
    ])
  }
}
</script>
<style scoped>

</style>
