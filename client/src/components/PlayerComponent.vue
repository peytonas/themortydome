<template>
  <div class="playerComponent">
    <p>{{activePlayer.name}}</p>
    <img :src="activePlayer.imgUrl" alt />
    <div class="row justify-content-center ml-1">
      <h5 id="playerHealth">HP: {{activePlayer.currentHp}}</h5>
      <progress
        id="playerHealthBar"
        class="nes-progress is-error"
        :value="activePlayer.currentHp"
        :max="activePlayer.baseHp"
      ></progress>
    </div>
    <div class="row justify-content-center">
      <h6 id="playerHits">HITS: {{activePlayer.hits}}</h6>
    </div>
    <div class="row justify-content-center">
      <div class="col-5 text-center mb-2">
        <button
          class="nes-btn is-warning small"
          @click="attackOne()"
        >{{activePlayer.attacks[0].name}}</button>
      </div>
      <div class="col-5 text-center mb-2">
        <button
          class="nes-btn is-warning small"
          @click="attackTwo()"
        >{{activePlayer.attacks[1].name}}</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-5 text-center mb-2">
        <button
          class="nes-btn is-warning small"
          @click="attackThree()"
        >{{activePlayer.attacks[2].name}}</button>
      </div>
      <div class="col-5 text-center mb-2">
        <button
          class="nes-btn is-warning small"
          @click="attackFour()"
        >{{activePlayer.attacks[3].name}}</button>
      </div>
    </div>
  </div>
</template>
<script>
// let playerHealthElement = document.getElementById("playerHealth");
// let playerHealthBarElement = document.getElementById("playerHealthBar");
// let playerHitElement = document.getElementById("playerHits");

export default {
  name: "player",
  computed: {
    activePlayer() {
      return this.$store.state.activePlayer;
    },
    mortyDex() {
      return this.$store.state.user.mortyDex;
    }
  },
  methods: {
    attackOne() {
      this.$store.state.activeEnemy.currentHp -= this.$store.state.activePlayer.attacks[0].AD;
      this.$store.state.activeEnemy.hits++;
    },
    attackTwo() {
      this.$store.state.activeEnemy.currentHp -= this.$store.state.activePlayer.attacks[1].AD;
      this.$store.state.activeEnemy.hits++;
    },
    attackThree() {
      this.$store.state.activeEnemy.currentHp -= this.$store.state.activePlayer.attacks[2].AD;
      this.$store.state.activeEnemy.hits++;
    },
    attackFour() {
      this.$store.state.activeEnemy.currentHp -= this.$store.state.activePlayer.attacks[3].AD;
      this.$store.state.activeEnemy.hits++;
    },
    gameOver() {
      if (this.$store.state.activePlayer.currentHp <= 0) {
        alert("Way to go, Morty...");
      }
    }
  }
};
</script>
<style>
img {
  margin-top: -40px;
}
</style>