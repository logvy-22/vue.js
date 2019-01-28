import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import ListWithSpinner from '../components/SimpleList/ListWithSpinner.vue'
import Favourites from '../components/Favourites.vue'
import Downloads from '../components/Downloads.vue'
import Purchase from '../components/Purchase.vue'
import FilmDetails from '../components/FilmDetails.vue'

Vue.use(VueRouter);

const routes = [
  { 
  path: '/', 
  component: Home, 
  name: 'home',
  children: [
    {
      path: '',
      name: 'root',
      component: ListWithSpinner
    },
    {
      path: 'downloads',
      name: 'downloads',
      component: Downloads
    },
    {

      path: 'favourites',
      name: 'favourites',
      component: Favourites
    },
    {
      path: 'purchase',
      name: 'purchase',
      component: Purchase
    },
    { 
      path: '/movie/:id', 
      component: FilmDetails 
    },
  ]
  },
  
  { path: '/profile', component: Profile, name: 'profile' },

  { path: '*', redirect: { name: 'home' }}
]

export default new VueRouter({ mode: 'history', routes })