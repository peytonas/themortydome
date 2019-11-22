<template>
<body class="container-fluid garage min-height">
  <div class="row justify-content-between">
    <div class="col-1 mt-2 text-white">
      <button class="nes-btn is-error text-white ml-2" @click="goHome()">
        <i class="nes-icon close is-small"></i>
      </button>
    </div>
  </div>
  <div class="row justify-content-center">
    <h1 class="card col-5 text-center">MAKE-A-MORTY</h1>
  </div>
  <div class="row justify-content-center">
    <button
      type="button"
      class="nes-btn is-success"
      data-toggle="modal"
      data-target="#createModal"
    >NEW MORTY</button>
    <div
      class="modal fade"
      id="createModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog text-center" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">MAKE-A-MORTY</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addFighter">
              <div class="form-group">
                <label>name</label>
                <input
                  class="form-control"
                  placeholder="input name..."
                  v-model="newFighter.name"
                  required
                />
              </div>
              <div class="form-group">
                <label>image</label>
                <input
                  class="form-control"
                  placeholder="input url..."
                  v-model="newFighter.imgUrl"
                  required
                />
              </div>
              <div class="form-group">
                <label>description</label>
                <input
                  class="form-control"
                  placeholder="input description..."
                  v-model="newFighter.description"
                  required
                />
              </div>
              <div class="form-group">
                <label>hp</label>
                <input
                  class="form-control"
                  placeholder="input hp..."
                  v-model="newFighter.hp"
                  required
                />
              </div>
              <div class="form-group">
                <label>type</label>
                <input
                  class="form-control"
                  placeholder="input type..."
                  v-model="newFighter.type"
                  required
                />
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