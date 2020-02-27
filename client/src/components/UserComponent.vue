<template>
  <div
    class="user row justify-content-center"
    :style="{order: sortScoresAsc ? this.user.highScore : 0 || sortScoresDesc ? -this.user.highScore : 0}"
  >
    <div class="col border-right border-white ml-3">{{user.name}}</div>
    <div class="col ml-3">{{user.highScore}}</div>
  </div>
</template>
<script>
export default {
  name: "User",
  mounted() {},
  computed: {},
  data() {
    return {
      newDate: this.user.updatedAt.substring(0, this.user.updatedAt.length - 14)
    };
  },
  methods: {},
  props: ["user", "sortScoresAsc", "sortScoresDesc"]
};
</script>
<style scoped>
.col {
  height: 2vh;
  align-items: center;
  display: flex;
  justify-content: center;
}
.row {
  font-size: 1rem;
}
</style>