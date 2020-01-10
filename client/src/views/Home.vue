<template>
<body class="home bg container-fluid">
  <Link />
  <div class="row justify-content-around">
    <img class="height" src="https://thumbs.gfycat.com/MagnificentRectangularFinch-max-1mb.gif" alt />
    <div class="col-6 text-center nes-container is-centered is-dark is-rounded">
      <h3 class="nes-text is-warning">WELCOME TO</h3>
      <h1 class="nes-text is-primary">THE MORTYDOME</h1>
    </div>
  </div>
  <div class="row justify-content-center text-center">
    <div class="col-4 text-center">
      <button class="nes-btn is-error mb-2" @click="goFight()">NEW GAME</button>
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-5">
      <div class="nes-table-responsive with-title">
        <table id="myTable2" class="nes-table is-bordered is-centered is-dark">
          <thead>
            <tr>
              <th @click="sortTable(0)">user</th>
              <th @click="sortTable(1)">score</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <User v-for="user in users" :userProp="user" :key="user._id" />
          </tbody>
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
    this.getScores();
    this.sortTable();
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
    },
    getScores() {
      for (var key in this.$store.state.users) {
        if (this.$store.state.users[key].highScore) {
          this.$store.state.scores.push(this.$store.state.users[key].highScore);
          this.$store.dispatch("getUsers");
          // console.log(this.$store.state.scores.length);
          // console.log(this.$store.state.scores[0]);
          // console.log(this.$store.state.scores[1]);
          // console.log(this.$store.state.scores[2]);
        }
      }
      // this.$store.dispatch("getScores");
    },
    sortTable(n) {
      var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
      table = document.getElementById("myTable2");
      switching = true;
      // Set the sorting direction to ascending:
      dir = "asc";
      /* Make a loop that will continue until
  no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
    first, which contains table headers): */
        for (i = 1; i < rows.length - 1; i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
      one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount++;
        } else {
          /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
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
.height {
  height: 165px;
  width: auto;
  position: absolute;
  top: 1;
  padding: 15px;
  left: 0;
}
.bg {
  height: 688px;
  background: linear-gradient(#4caf50, yellow) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>