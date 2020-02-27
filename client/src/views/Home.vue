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
    <div class="col-4 text-center">
      <button class="nes-btn is-error mb-2" @click="goFight()">NEW GAME</button>
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-5 text-center">
      <div class="nes-container is-rounded is-dark ml-n2">
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
    return {
      // page: 0
    };
  },
  mounted() {
    this.getUsers();
    // this.getScores();
    // this.sortTable();
  },
  methods: {
    goFight() {
      this.$router.push("/game");
    },
    getUsers() {
      this.$store.dispatch("getUsers");
    }
    //   sortTable(n) {
    //     var table,
    //       rows,
    //       switching,
    //       i,
    //       x,
    //       y,
    //       shouldSwitch,
    //       dir,
    //       switchcount = 0;
    //     table = document.getElementById("myTable2");
    //     switching = true;
    //     // Set the sorting direction to ascending:
    //     dir = "asc";
    //     /* Make a loop that will continue until
    // no switching has been done: */
    //     while (switching) {
    //       // Start by saying: no switching is done:
    //       switching = false;
    //       rows = table.rows;
    //       /* Loop through all table rows (except the
    //   first, which contains table headers): */
    //       for (i = 1; i < rows.length - 1; i++) {
    //         // Start by saying there should be no switching:
    //         shouldSwitch = false;
    //         /* Get the two elements you want to compare,
    //     one from current row and one from the next: */
    //         x = rows[i].getElementsByTagName("TD")[n];
    //         y = rows[i + 1].getElementsByTagName("TD")[n];
    //         /* Check if the two rows should switch place,
    //     based on the direction, asc or desc: */
    //         if (dir == "asc") {
    //           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //             // If so, mark as a switch and break the loop:
    //             shouldSwitch = true;
    //             break;
    //           }
    //         } else if (dir == "desc") {
    //           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
    //             // If so, mark as a switch and break the loop:
    //             shouldSwitch = true;
    //             break;
    //           }
    //         }
    //       }
    //       if (shouldSwitch) {
    //         /* If a switch has been marked, make the switch
    //     and mark that a switch has been done: */
    //         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //         switching = true;
    //         // Each time a switch is done, increase this count by 1:
    //         switchcount++;
    //       } else {
    //         /* If no switching has been done AND the direction is "asc",
    //     set the direction to "desc" and run the while loop again. */
    //         if (switchcount == 0 && dir == "asc") {
    //           dir = "desc";
    //           switching = true;
    //         }
    //       }
    //     }
    //   }
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