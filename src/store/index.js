import Vue from 'vue'
import Vuex from 'vuex'
import reject from 'lodash/reject'
import concat from 'lodash/concat'
import find from 'lodash/find'

Vue.use(Vuex)

const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => {
      
      return(res.json())
    })
    .then(res => {
      resolve(res)
    })
    .catch(err => reject(err))
  })
}
const filterModule = {
  namespaced: true,
  state: {
    pageTitle: '',
  },
  mutations: {
    rewritePageTitle(state, newTitle) {
      state.pageTitle = newTitle;
    }
  },
  actions: {
    changePageTitle({ commit }, data) {
      commit('rewritePageTitle', data);
    },
    
  },
  getters: {
    pageTitle: (state) => state.pageTitle,
  }
}

const films = {
  namespaced: true,
  state: {
    filmsList: [],
    favourites: [],
    isLoading: false,
    currentUrl: ''
  },
  mutations: {
    rewriteFilmsList(state, newArray) {
      state.filmsList = newArray;
    },
    updateFavouritesList(state, newArray) {
      state.favourites = newArray;
    },
    changeLoadingStatus(state) {
      state.isLoading = !state.isLoading;
    },
    saveUrl(state, newUrl) {
      state.currentUrl = newUrl
    }
  },
  actions: {
    async makeFilmsRequest({ commit }, url) {
      commit('changeLoadingStatus')
      const list = await makeRequest(url);
      commit('saveUrl', url)
      commit('rewriteFilmsList', list.results)
      commit('changeLoadingStatus')
      // setTimeout(() => commit('changeLoadingStatus'), 500)
    },
    changeFavouriteStatus({ commit, state }, item) {
      const favourites = [...state.favourites]
      const wasFovourite = find(favourites, ['id', item.id])
      const newArr = wasFovourite ? reject(favourites, item) : concat(favourites, item)
      commit('updateFavouritesList', newArr)
    },
    async getFilmInfo({ commit }, url ) {
      commit('changeLoadingStatus')
      await makeRequest(url)
      // console.log(item)
      commit('changeLoadingStatus')
    }
  },
  getters: {
    filmsList: (state) => state.filmsList,
    favouritesList: (state) => state.favourites,
    isLoading: (state) => state.isLoading,
  }
}

const store = new Vuex.Store({
  modules: {
    filterModule,
    films
  }
}) 

export default store;