<template>
  <div class="tableComponent container-fluid">
    <div class="row justify-content-left table align-items-center">
      <div class="col">
        <b>UserName</b>
      </div>
      <div class="col text-center th">
        <b>Score</b>
        <!-- <i class="fas fa-sort-down ml-2 mb-2" @click="sortByAnswerDesc(question.id)"></i>
          <i class="fas fa-sort-up ml-2 mt-1" @click="sortByAnswerAsc(question.id)"></i>
        <i class="fas fa-chart-bar ml-2 mb-2" @click="viewStats(question.id)"></i>-->
      </div>
      <div class="col">
        Date
        <!-- <i class="fas fa-sort-down ml-2 mb-2" @click="sortByPointsDesc"></i>
        <i class="fas fa-sort-up ml-2 mt-1" @click="sortByPointsAsc"></i>-->
      </div>
    </div>
    <UserComponent
      class="td"
      v-for="user in users"
      :key="user._id"
      :userProp="user"
      :sortScoresAsc="sortScoresAsc"
      :sortScoresDesc="sortScoresDesc"
      :sortDateAsc="sortDateAsc"
      :sortDateDesc="sortDateDesc"
    />
  </div>
</template>
<script>
import router from "../router";
import UserComponent from "../components/UserComponent";
export default {
  name: "Table",
  data() {
    return {
      // sortName: false,
      sortScoresAsc: false,
      sortScoresDesc: false,
      sortDateAsc: false,
      sortDateDesc: false
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    // sortByName() {
    //   this.sortName = !this.sortName;
    //   function compare(a, b) {
    //     if (a.name < b.name) return -1;
    //     if (a.name > b.name) return 1;
    //     return 0;
    //   }
    //   return this.participants.sort(compare);
    // },
    // sortByPointsAsc() {
    //   if ((this.sortPointsAsc = !this.sortPointsAsc)) {
    //     this.sortName = false;
    //     this.sortPointsDesc = false;
    //     this.sortAnswersAsc = false;
    //     this.sortAnswersDesc = false;
    //   }
    // },
    // sortByPointsDesc() {
    //   if ((this.sortPointsDesc = !this.sortPointsDesc)) {
    //     this.sortName = false;
    //     this.sortPointsAsc = false;
    //     this.sortAnswersAsc = false;
    //     this.sortAnswersDesc = false;
    //   }
    // },
    // sortByAnswerAsc(id) {
    //   this.qId = id;
    //   if ((this.sortAnswersAsc = !this.sortAnswersAsc)) {
    //     this.sortName = false;
    //     this.sortAnswersDesc = false;
    //     this.sortPointsAsc = false;
    //     this.sortPointsDesc = false;
    //   }
    // },
    // sortByAnswerDesc(id) {
    //   this.qId = id;
    //   if ((this.sortAnswersDesc = !this.sortAnswersDesc)) {
    //     this.sortName = false;
    //     this.sortAnswersAsc = false;
    //     this.sortPointsAsc = false;
    //     this.sortPointsDesc = false;
    //   }
    // }
  },
  mounted() {},
  components: { UserComponent },
  props: []
};
</script>
<style scoped>
.row {
  margin: 0px;
}
.sort {
  font-size: 0.75rem;
}
.table {
  border-collapse: collapse;
  border: 1px solid #ffffff;
}
.td {
  text-align: left;
  padding: 5px;
  border: 1px solid #ffffff;
}
.col {
  height: 48px;
  background-color: #231e1f;
  color: white;
  border: 1px solid #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
