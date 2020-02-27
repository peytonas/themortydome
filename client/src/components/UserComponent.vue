<template>
  <div
    class="user row"
    :style="{order: sortScoresAsc ? total : 0 || sortScoresDesc ? -total : 0 || sortDateAsc ? singlePoints : 0 || sortDateDesc ? -singlePoints : 0}"
  >
    <div class="col">{{userProp.name}}</div>
    <div class="col">{{userProp.highScore}}</div>
    <div class="col">{{this.newDate}}</div>
  </div>
</template>
<script>
export default {
  name: "User",
  mounted() {},
  computed: {},
  data() {
    return {
      newDate: this.userProp.updatedAt.substring(
        0,
        this.userProp.updatedAt.length - 14
      )
    };
  },
  methods: {},
  props: [
    "userProp",
    "sortScoresAsc",
    "sortScoresDesc",
    "sortDateAsc",
    "sortDateDesc"
  ]
};
</script>
<style scoped>
.col {
  height: 20px;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
}
.row {
  font-size: 0.75rem;
}
</style>