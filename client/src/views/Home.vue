<template>
<body class="bg min-height">
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
  <div class="row justify-content-between">
    <div class="col-4 ml-2">
      <div class="nes-select is-success">
        <select required id="success_select">
          <option value disabled selected hidden>pick-a-morty...</option>
          <option
            v-for="fighter in this.$store.state.fighters"
            :fighterProp="fighter.name"
            :key="fighter._id"
          >{{fighter.name}}</option>
        </select>
      </div>
      <div class="text-center">
        <button class="nes-btn is-success mt-2" @click="selectMorty()">select</button>
      </div>
    </div>
  </div>
  <div class="row justify-content-left"></div>
  <div class="row justify-content-center pt-2 mb-2">
    <div class="col-4 text-center">
      <button class="nes-btn is-primary" onclick="reset()">reset</button>
    </div>
  </div>
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
    this.$store.dispatch("getFighters");
  },
  methods: {
    //NOTE will make chosen Morty the "activePlayer" and render via PlayerComponent .
    selectMorty() {
      this.$store.dispatch("getPlayer");
      console.log(this.$store.state.activePlayer);
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
        title: "Are you sure?",
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
    goCreate() {
      this.$router.push("/create");
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
.font {
  font-family: "Press Start 2p";
  font-size: 10px;
}
</style>