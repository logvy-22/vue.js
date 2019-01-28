<template>
  <li 
    class="genre-item" 
    @click="onChooseSideBarSection"
  >
    <router-link :to="{ name: item.route}">
      {{ item.title }}
    </router-link>
  </li>     
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: { 
    item: {
      type: Object,
      required: true,
    }
    
  },
  methods: {
    ...mapActions('filterModule', [
      'changePageTitle',
      
    ]),
    onChooseSideBarSection() {
      const { title } = this.item
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