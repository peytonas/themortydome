<template>
<body class="container-fluid bg">
  <div class="row justify-content-between">
    <div class="col-1 mt-2 text-white">
      <button class="nes-btn is-error text-white ml-2" @click="goHome()">
        <i class="nes-icon close is-small"></i>
      </button>
    </div>
  </div>
  <div class="row justify-content-center">
    <h1 class="card col-5 bg-dark text-white text-center pt-1">MAKE-A-MORTY</h1>
  </div>
  <div class="row justify-content-center overflow">
    <div
      class="col-3 card bg-dark card-text text-center text-white mt-2 ml-1 mr-1"
      v-for="fighter in this.$store.state.fighters"
      :fighterProp="fighter.name"
      :key="fighter._id"
    >
      <img class="card-img" :src="fighter.imgUrl" alt />
      {{fighter.number}}. {{fighter.name}}
      <br />
      <div class="small mb-1">{{fighter.description}}</div>
    </div>
  </div>
</body>
</template>

<script>
import router from "@/router.js";
export default {
  name: "create",
  data() {
    return {
      newFighter: {
        name: "",
        number: "",
        type: "",
        imgUrl: "",
        description: "",
        health: 100,
        hits: 0
      }
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    addFighter() {
      this.$store.dispatch("addFighter", this.newFighter);
      this.newFighter = {
        name: "",
        number: "",
        type: "",
        imgUrl: "",
        description: "",
        hp: 100
      };
    }
  }
};
</script>
<style scoped>
.bg {
  background-image: url("https://external-preview.redd.it/uo0b1tRtOeFEqG7UaBwJ3S3bD6k8IyI8pFOpdN7ZNEo.png?auto=webp&s=82eb73f662e197f6e3ca1304838a4c7c81adc536");
  height: 688px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>