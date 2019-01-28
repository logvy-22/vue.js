<template>
  <aside id="side-bar">
    <bar-section 
      :top-line="sectionPages.topLine" 
      :title="sectionPages.title"
    >
      <side-bar-route 
        v-for="section in sectionPages.items" 
        :key="section.route"
        :item="section" 
      />
    </bar-section>
    <bar-section 
      :top-line="sectionBrowsBy.topLine" 
      :title="sectionBrowsBy.title"
    >
      <side-bar-item
        v-for="item in sectionBrowsBy.items"
        :key="item.title"
        :common-filter="sectionBrowsBy.commonFilter"
        :item="item"
      />
    </bar-section>
    <bar-section 
      :top-line="sectionGenres.topLine" 
      :title="sectionGenres.title"
    >
      <side-bar-item
        v-for="item in sectionGenres.items"
        :key="item.title"
        :common-filter="sectionGenres.commonFilter"
        :item="item"
      />
    </bar-section>
  </aside>
</template>
<script>
import BarSection from './Section'
import SideBarItem from './SideBarItem.vue'
import SideBarRoute from './SideBarRoute'

const sectionPages = {
  title: '',
  topLine: false,
  items: [
    { title: 'purchase',
      route: 'purchase'
    },
    { title: 'downloads',
      route: 'downloads'
    },
    { title: 'favourites',
      route: 'favourites'
    }
  ],
 
};
const sectionBrowsBy = {
  title: 'Browse by',
  commonFilter: '',
  topLine: true,
  items: [
    {
      title: 'top movies',
      id: 'movie',
      searchField: 'discover',
      filters: 'sort_by=popularity.desc'
    }, 
    {
      title: 'recently added',
      searchField: 'discover',
      id: 'movie',
      filters: 'sort_by=release_date.desc'
    }, 
    {
      title: 'trending now',
      searchField: 'trending',
      id: 'movie/week'
    }
  ],
}
const sectionGenres = {
  title: 'Browse by genre',
  commonFilter: 'discover/movie',
  topLine: false,
  items: [
    {
      title: 'all',
      filters: ''
    }, 
    {
      title: 'actions',
      filters: 'with_genres=28',
    }, 
    {
      title: 'adventure',
      filters: 'with_genres=12',
    },
    {
      title: 'animation',
      filters: 'with_genres=16',
    },
    {
      title: 'comedy',
      filters: 'with_genres=35',
    },
    {
      title: 'drama',
      filters: 'with_genres=18',
    },
    {
      title: 'family',
      filters: 'with_genres=10751',
    },
    {
      title: 'fantasy',
      filters: 'with_genres=14',
    },
    {
      title: 'horror',
      filters: 'with_genres=27',
    },
    {
      title: 'romance',
      filters: 'with_genres=10749',
    },
    {
      title: 'thriller',
      filters: 'with_genres=53',
    }
  ],
}

export default {
  components: { 
    SideBarItem,
    SideBarRoute, 
    BarSection
  },
  data() {
    return {
      sectionPages: sectionPages,
      sectionBrowsBy: sectionBrowsBy,
      sectionGenres: sectionGenres,
    }
  },
}
</script>

<style lang="scss" scoped>
#side-bar {
  padding-right: 10px;
  width: 230px;
  padding-top: 20px; 
}
#genres {
  display: flex;
  flex-direction: column;
}

</style>