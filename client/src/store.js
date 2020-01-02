import Vue from 'vue'
import Vuex from 'vuex'
import VueDraggable from 'vue-draggable'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

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
    fighters: [],
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
    setFighters(state, fighters) {
      state.fighters = fighters
    },
    setActiveEnemy(state, activeEnemy) {
      state.activeEnemy = activeEnemy
    },
    setActivePlayer(state, activePlayer) {
      state.activePlayer = activePlayer
    }
  },
  actions: {
    async getFighters({ commit, dispatch, state }) {
      try {
        let fighters = await api.get(`/fighters/`)
        commit('setFighters', fighters.data)
        return state.fighters
      } catch (error) {
        console.error(error)
      }
    },
    async getEnemy({ commit, dispatch }, fighterId) {
      api.get(`/fighters/5df01fa5c260cd61e53e8e2f`)
        .then(res => {
          commit('setActiveEnemy', res.data)
        })
    },
    async getPlayer({ commit, dispatch }, fighter) {
      debugger
      api.get(`/fighters/${fighter._id}`)
        .then(res => {
          commit('setActivePlayer', res.data)
        })
    },
    async addFighter({ commit, dispatch }, fighterData) {
      try {
        let res = await api.post('fighters', fighterData)
        dispatch('getFighters')
      } catch (error) {
        console.error(error)
      }
    },
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