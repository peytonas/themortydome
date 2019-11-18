<template>
<body class="container-fluid garage min-height">
  <div class="row justify-content-between">
    <div class="col-1 mt-2">
      <button class="nes-btn is-error text-white" @click="goHome()">
        <i class="nes-icon close is-small"></i>
      </button>
    </div>
  </div>
  <div class="row justify-content-center">
    <h1 class="card col-5">MAKE A MORTY</h1>
  </div>
</body>
</template>

<script>
import router from "@/router.js";
export default {
  name: "Create",
  data() {
    return {};
  },

  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style>
.garage {
  background-image: url("https://external-preview.redd.it/uo0b1tRtOeFEqG7UaBwJ3S3bD6k8IyI8pFOpdN7ZNEo.png?auto=webp&s=82eb73f662e197f6e3ca1304838a4c7c81adc536");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}
</style>