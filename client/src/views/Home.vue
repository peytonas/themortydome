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
      <button class="nes-btn is-error mb-2" @click="goFight()">NEW GAME</button>
    </div>
    <div class="col-3">
      <div class="card mb-2">
        <h4>HIGH SCORES</h4>
        <table>
          <tr>
            <th>user</th>
            <th>score</th>
            <th>date</th>
          </tr>
          <User v-for="user in users" :userProp="user" :key="user._id" />
        </table>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import Auth from "../AuthService";
import Link from "../components/LinksComponent";
import User from "../components/ScoreComponent";

export default {
  name: "home",
  mounted() {
    this.getFighters();
    this.getUsers();
  },
  methods: {
    goFight() {
      this.$router.push("/game");
    },
    getFighters() {
      this.$store.dispatch("getFighters");
    },
    getUsers() {
      this.$store.dispatch("getUsers");
    }
  },
  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  components: { Link, User }
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