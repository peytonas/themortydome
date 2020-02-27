<template>
<body class="home bg container-fluid">
  <Links />
  <div class="row justify-content-around">
    <img class="height" src="https://thumbs.gfycat.com/MagnificentRectangularFinch-max-1mb.gif" alt />
    <div class="col-6 text-center nes-container is-centered is-dark is-rounded">
      <h3 class="nes-text is-warning">WELCOME TO</h3>
      <h1 class="nes-text is-warning">THE MORTYDOME</h1>
    </div>
  </div>
  <div class="row justify-content-center text-center">
    <div class="col-3 text-center">
      <button class="nes-btn is-error mb-2" @click="goFight()">NEW GAME</button>
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-5 text-center">
      <div class="nes-container is-rounded is-dark">
        <h3 class="nes-text is-primary">HIGH SCORES</h3>
      </div>
      <Table />
    </div>
  </div>
</body>
</template>

<script>
import Auth from "../AuthService";
import Links from "../components/LinksComponent";
import Table from "../components/TableComponent";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    goFight() {
      this.$router.push("/game");
    },
    getUsers() {
      this.$store.dispatch("getUsers");
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  components: { Links, Table }
};
</script>
<style>
.height {
  height: 165px;
  width: auto;
  position: absolute;
  top: 1;
  padding: 15px;
  left: 0;
}
.bg {
  height: 100vh;
  background: linear-gradient(#4caf50, yellow) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>