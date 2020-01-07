<template>
<body class="home bg container-fluid">
  <Link />
  <div class="row justify-content-around">
    <div class="col-6 text-center nes-container is-centered is-dark is-rounded">
      <h3 class="nes-text is-warning">WELCOME TO</h3>
      <h1 class="nes-text is-primary">THE MORTYDOME</h1>
    </div>
  </div>
  <div class="row justify-content-center text-center">
    <div class="col-3"></div>
    <div class="col-6 text-center">
      <button class="nes-btn is-error mb-2" @click="goFight()">FIGHT</button>
    </div>
    <div class="col-3">
      <div class="card mb-2">
        <h4>HIGH SCORES</h4>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import Auth from "../AuthService";
import Enemy from "../components/EnemyComponent";
import Player from "../components/PlayerComponent";
import Item from "../components/ItemComponent";
import Link from "../components/LinksComponent";

export default {
  name: "home",
  mounted() {
    this.getFighters();
  },
  methods: {
    //NOTE should make chosen Morty the "activePlayer" and render via PlayerComponent .
    selectMorty(fighter) {
      this.$store.dispatch("getPlayer", fighter._id);
      console.log(this.$store.state.activePlayer.name);
    },
    goFight() {
      this.$router.push("/game");
    },
    getFighters() {
      this.$store.dispatch("getFighters");
    }
  },
  data() {
    return {};
  },
  computed: {},
  components: { Enemy, Player, Item, Link }
};
</script>
<style scoped>
.bg {
  background: linear-gradient(#4caf50, yellow) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>