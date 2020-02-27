<template>
  <div class="tableComponent container-fluid nes-container is-dark is-rounded">
    <div class="row justify-content-left table align-items-center">
      <div class="col nes-text is-primary">
        <b>UserName</b>
      </div>
      <div class="col text-center th nes-text is-primary">
        <b>Score</b>
        <i class="fas fa-sort-down ml-2 mb-2" @click="sortByScoresDesc"></i>
        <i class="fas fa-sort-up ml-2 mt-1" @click="sortByScoresAsc"></i>
      </div>
    </div>
    <div class="d-flex flex-column">
      <UserComponent
        class="td"
        v-for="user in users"
        :user="user"
        :key="user._id"
        :sortScoresAsc="sortScoresAsc"
        :sortScoresDesc="sortScoresDesc"
        :sortDatesAsc="sortDatesAsc"
        :sortDatesDesc="sortDatesDesc"
      />
    </div>
  </div>
</template>
<script>
import router from "../router";
import UserComponent from "../components/UserComponent";
export default {
  name: "Table",
  data() {
    return {
      sortScoresAsc: false,
      sortScoresDesc: true,
      sortDatesAsc: false,
      sortDatesDesc: false
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    sortByScoresAsc() {
      if ((this.sortScoresAsc = !this.sortScoresAsc)) {
        this.sortScoresDesc = false;
        this.sortAnswersAsc = false;
        this.sortAnswersDesc = false;
      }
    },
    sortByScoresDesc() {
      if ((this.sortScoresDesc = true)) {
        this.sortScoresAsc = false;
        this.sortAnswersAsc = false;
        this.sortAnswersDesc = false;
      }
    }
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
.table {
  border-collapse: collapse;
}
.td {
  text-align: left;
  padding: 5px;
}
.col {
  height: 35px;
  border: 3px solid #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
