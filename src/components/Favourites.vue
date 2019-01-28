<template>
  <div>
    <span
      v-if="!favouritesList.length"
      class="empty-list-text"
    >
      Your list is empty
    </span>
    <ul class="film-list">
      <film-item
        v-for="film in favouritesList" 
        :key="film.id" 
        :item="film" 
      />
    </ul>
  </div>
</template>
<script>
import FilmItem from './SimpleList/FilmItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    FilmItem
  },
  computed: {
    ...mapGetters('films', ['favouritesList'])
  }
}
</script>
<style scoped>
.film-list {
  display: flex;
  flex-wrap: wrap;
}  
.empty-list-text {
  display: block;
  font-size: 20px;
  margin: 30px;
}
</style>
