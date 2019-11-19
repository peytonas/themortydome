<template>
<body class="container-fluid garage min-height">
  <div class="row justify-content-between">
    <div class="col-1 mt-2 text-white">
      <button class="nes-btn is-error text-white" @click="goHome()">
        <i class="nes-icon close is-small"></i>
      </button>
    </div>
  </div>
  <div class="row justify-content-center">
    <h1 class="card col-5">MAKE-A-MORTY</h1>
  </div>
  <div class="row justify-content-center">
    <button
      type="button"
      class="nes-btn is-success"
      data-toggle="modal"
      data-target="#exampleModal"
    >NEW MORTY</button>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog text-center" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">MAKE-A-MORTY</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addFighter">
              <div class="form-group">
                <label>name</label>
                <input class="form-control" placeholder="Morty" v-model="newFighter.name" required />
              </div>
              <div class="form-group">
                <label>image</label>
                <input
                  class="form-control"
                  placeholder="url..."
                  v-model="newFighter.imgUrl"
                  required
                />
              </div>
              <div class="form-group">
                <label>description</label>
                <input
                  class="form-control"
                  placeholder="description..."
                  v-model="newFighter.description"
                  required
                />
              </div>
              <div class="form-group">
                <label>health</label>
                <input class="form-control" placeholder="100" v-model="newFighter.health" required />
              </div>
              <div class="form-group">
                <label>hits</label>
                <input class="form-control" placeholder="0" v-model="newFighter.hits" required />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="nes-btn is-primary" data-dismiss="modal">close</button>
            <button type="button" class="nes-btn is-primary" @click="addFighter()">create Morty</button>
          </div>
        </div>
      </div>
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
        imgUrl: "",
        description: "",
        health: 100,
        hits: 0
      };
    }
  }
};
</script>
<style>
</style>