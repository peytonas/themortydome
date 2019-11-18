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

let playerHealthElement = document.getElementById("playerHealth")
let playerHealthBarElement = document.getElementById("playerHealthBar")
let playerHitElement = document.getElementById("playerHits")
let enemyHealthElement = document.getElementById("enemyHealth")
let enemyHealthBarElement = document.getElementById("enemyHealthBar")
let enemyHitElement = document.getElementById("enemyHits")

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    resetState(state, user) {
      state.user = {}
    },

    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async zap(player) {
      if (player.health > 0) {
        player.health -= enemy.attacks.zap
        // @ts-ignore
        playerHealthBarElement.value -= enemy.attacks.zap;
      }
      player.hits++
      update();
    },
    async reset() {
      player.health = 100;
      // @ts-ignore
      playerHealthBarElement.value = 100;
      player.attacks.cry = 5
      player.attacks.scream = 1
      enemy.attacks.zap = 5
      player.hits = 0;
      enemy.health = 100;
      // @ts-ignore
      enemyHealthBarElement.value = 100;
      enemy.hits = 0;
      update();
    },
    async update() {
      playerHealthElement.textContent = "HEALTH: " + player.health.toString()
      playerHitElement.textContent = "HITS: " + player.hits.toString()
      enemyHealthElement.textContent = "HEALTH: " + enemy.health.toString()
      enemyHitElement.textContent = "HITS: " + enemy.hits.toString()
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