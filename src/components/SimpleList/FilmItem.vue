<template>
  <li class="list-item">
      <div 
        class="icon-background"
        @click="clickToFavour"
      >
        <div :class="['add-to-favourits', {'favourited': fovouriteStatus}]">
          <span>+</span>
        </div>
      </div>
      <router-link :to="routeLink">
        <img 
          :src="imgSrc"
          alt=""
          class="poster"
        >
        <span class="film-name">
          {{ item.title }}
        </span>
      </router-link>
  </li>
</template>
<script>
import * as Constant from '../../constants.js'
import { mapActions, mapGetters } from 'vuex';
import find from 'lodash/find'

export default {
  props: { 
    item: {
      type: Object,
      required: true,
    }
  },
  computed: {
    imgSrc: function() {
      if (!this.item.poster_path) {
        return 'http://placehold.jp/500x750.png?text=No poster'
      }
      return (Constant.BASE_POSTER_URL + this.item.poster_path)
    },
    routeLink : function() {
      return `/movie/${this.item.id}`
    },
    ...mapGetters('films', ['favouritesList', ]),
    fovouriteStatus: function() {
      return find(this.favouritesList, ['id', this.item.id])
    }

  },
  methods: {
    ...mapActions('films', ['changeFavouriteStatus']),
    clickToFavour(e) {
      e.stopPropagation();
      this.changeFavouriteStatus(this.item)
    }
  },
}
</script>
<style lang="scss" scoped>
  .list-item {
    width: 25%;
    padding: 10px;
    margin: 15px 0;
    position: relative;
    
    .poster {
      width: 100%;
      height: auto;
    }
    .icon-background {
      position: absolute;
      border-radius: 50%;
      right: 20px;
      background: rgba(0, 0, 0, .3);
      top: 20px;
      height: 30px;
      width: 30px;
    }
    .add-to-favourits {
      position: absolute;
      border-radius: 50%;
      right: 5px;
      border: 1px #fff solid;
      top: 5px;
      height: 20px;
      width: 20px;
      color: #fff;
      cursor: pointer;

      &.favourited {
        border-color: #2ad181;
        color: #2ad181;
      }

      span {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        font-weight: 900;
      }
    }

    .film-name {
      font-weight: 600;
      text-decoration: none !important;
      color: #131010;
    }
  }
</style>