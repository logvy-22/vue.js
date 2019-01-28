<template>
  <div class="main-block">
    <div
      v-if="isLoading"
      class="overlay"
    >
      <div class="spinner">
        <spinner :loading="isLoading" />
      </div>
    </div>
    <film-list 
      v-else 
      :list="filmsList" 
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Spinner from 'vue-simple-spinner'
import FilmList from './FilmList'

export default {
  components: {
    FilmList,
    Spinner
  },
  computed: {
    ...mapGetters('films', [
      'filmsList',
      'isLoading'
    ])
  }, 
}
</script>
<style lang="scss" scoped>
  .main-block {
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background: #fff;

    .spinner {
      top: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
</style>