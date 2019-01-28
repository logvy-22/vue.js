<template>
  <li 
    :id="item.title"
    class="genre-item" 
    @click="onChooseSideBarSection"
  >
    <router-link :to="{ name: 'root'}">
      {{ item.title }}
    </router-link>
  </li>     
</template>
<script>
import { mapActions } from 'vuex'
import { getUrl } from '../../helpers.js'

export default {
  props: { 
    item: {
      type: Object,
      required: true,
    },
    commonFilter: {
      type: String,
      default: '',
      required: false,
    }
  },
  methods: {
     ...mapActions('filterModule', [
      'changePageTitle',
      
    ]),
    ...mapActions('films', [
      'makeFilmsRequest'
    ]),
    onChooseSideBarSection() {
      const { title, id , filters, searchField } = this.item
      const mainFilter = searchField ? `${searchField}/${id}` : this.commonFilter
      const url = getUrl({ sortBy: mainFilter, filters})
      this.makeFilmsRequest(url)
      this.changePageTitle(title)
    },
  },
}
</script>
<style lang="scss" scoped>
.genre-item {
  cursor: pointer;
  padding: 5px 0;

  a {
    color: rgb(19, 16, 16);
    text-decoration: none;

    
  }
  // &.checked a{
  //     color: #2ad181;
  //     font-weight: 600;
  //   }
  
}
    
</style>