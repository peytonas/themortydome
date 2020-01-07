<template>
<body class="home bg container-fluid">
  <div class="row justify-content-between">
    <div class="col-1 mt-2 text-center">
      <button class="nes-btn is-error text-white" @click="logout()">
        <i class="nes-icon close is-small"></i>
      </button>
    </div>
    <div class="col-1 mt-2 text-center">
      <button class="nes-btn is-error text-white" @click="goCreate()">
        <h6>&pi;</h6>
      </button>
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-6 text-center nes-container is-centered is-dark is-rounded">
      <h3 class="nes-text is-warning">WELCOME TO</h3>
      <h1 class="nes-text is-primary">THE MORTYDOME</h1>
    </div>
  </div>
  <div class="row justify-content-center">
    <form @submit.prevent="selectMorty()" class="col-4 ml-2">
      <div class="nes-select is-success">
        <select name="fighters" required>
          <option value disabled selected hidden>PICK-A-MORTY...</option>
          <option
            value="fighter"
            v-for="fighter in this.$store.state.fighters"
            :fighterProp="fighter.name"
            :key="fighter._id"
          >{{fighter.number}}. {{fighter.name}}</option>
        </select>
      </div>
      <div class="text-center">
        <button type="submit" value="submit" class="nes-btn is-success mt-2">select</button>
      </div>
    </form>
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
  <!-- <div class="row justify-content-center pt-2 mb-2">
    <div class="col-4 text-center">
      
    </div>
  </div>-->
</body>
</template>

<script>
import Auth from "../AuthService";
import Enemy from "../components/EnemyComponent";
import Player from "../components/PlayerComponent";
import Item from "../components/ItemComponent";

export default {
  name: "home",
  mounted() {
    this.getFighters();
    this.$store.dispatch("getEnemy");
    this.$store.dispatch("getPlayer");
  },
  methods: {
    //NOTE should make chosen Morty the "activePlayer" and render via PlayerComponent .
    selectMorty(fighter) {
      this.$store.dispatch("getPlayer", fighter._id);
      console.log(this.$store.state.activePlayer.name);
    },
    logout() {
      // @ts-ignore
      const toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false
      });
      // @ts-ignore
      Swal.fire({
        title: "log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#92cc40",
        cancelButtonColor: "#e76e55",
        confirmButtonText: "log out!"
      }).then(result => {
        if (result.value) {
          // @ts-ignore
          this.$store.dispatch("logout");
          toast.fire({
            icon: "success",
            title: "logged out!"
          });
        }
      });
    },
    getFighters() {
      this.$store.dispatch("getFighters");
    },
    goCreate() {
      this.$router.push("/create");
    },
    reset() {
      this.$store.state.activePlayer.currentHp = this.$store.state.activePlayer.baseHp;
      this.$store.state.activeEnemy.currentHp = this.$store.state.activeEnemy.baseHp;
      this.$store.state.activePlayer.hits = 0;
      this.$store.state.activeEnemy.hits = 0;
    }
  },
  data() {
    return {};
  },
  computed: {},
  components: { Enemy, Player, Item }
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