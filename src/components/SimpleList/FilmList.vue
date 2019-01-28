<template>
  <ul class="film-list">
    <film-item
      v-for="film in list" 
      :key="film.id" 
      :item="film" 
    />
  </ul>
</template>
<script>
import FilmItem from './FilmItem'

export default {
  components: {
    FilmItem
  },
  props: {
    list: {
      type: Array,
      required: true,
    }
  },

}
</script>
<style lang="scss" scoped>
  .film-list {
    display: flex;
    flex-wrap: wrap;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background: #fff;
  }
</style>