import Vue from 'vue'
import Vuex from 'vuex'
import VueDraggable from 'vue-draggable'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'
import { defaultCoreCipherList } from 'constants'
//import { getMaxListeners } from 'cluster'
//import { addListener } from 'cluster'

Vue.use(Vuex)
Vue.use(VueDraggable)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    fighter: [],
    activeEnemy: {},
    activePlayer: {},
    user: {},
  },
  mutations: {
    resetState(state, user) {
      state.user = {}
    },

    setUser(state, user) {
      state.user = user
    },
    setFighters(state, fighter) {
      state.fighter = fighter
    }
  },
  actions: {
    addFighter({ commit, dispatch }, fighterData) {
      api.post('fighters', fighterData)
        .then(serverBoard => {
          dispatch('getFighters')
        })
    },

    //#region -- AUTH STUFF --
    async register({
      commit,
      dispatch
    }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({
          name: "home"
        })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({
      commit,
      dispatch
    }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({
          name: "home"
        })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({
          name: "login"
        })
      } catch (e) {
        console.warn(e.message)
      }
    },

  }
})