<template>
<body class="home bg container-fluid">
  <Link />
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">PICK-A-MORTY</h4>
        </div>
        <div class="modal-body">
          <p
            v-for="fighter in fighters"
            :fighterProp="fighter"
            :key="fighter._id"
            @click="selectMorty(fighter._id)"
          >{{fighter.number}}. {{fighter.name}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">&times;</button>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-between text-center">
    <div class="col-4">
      <Player />
    </div>
    <div class="col-2 text-center align-self-end">
      <button class="nes-btn is-primary" @click="reset()">reset</button>
    </div>
    <div class="col-4">
      <Enemy />
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
  name: "game",
  mounted() {
    this.getFighters();
    this.$store.dispatch("getEnemy");
    this.$store.dispatch("getPlayer");
    this.modalOpen();
  },
  computed: {
    fighters() {
      return this.$store.state.fighters;
    }
  },
  methods: {
    modalOpen() {
      $("#myModal").modal("show");
    },
    selectMorty(fighterId) {
      this.$store.dispatch("getPlayer", fighterId);
    },
    getFighters() {
      this.$store.dispatch("getFighters");
    },
    reset() {
      this.$store.state.activePlayer.currentHp = this.$store.state.activePlayer.baseHp;
      this.$store.state.activeEnemy.currentHp = this.$store.state.activeEnemy.baseHp;
      this.$store.state.activePlayer.hits = 0;
      this.$store.state.activeEnemy.hits = 0;
    }
  },

  components: { Enemy, Player, Item, Link }
};
</script>
<style scoped>
.bg {
  background-image: url("https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png");
  height: 688px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>