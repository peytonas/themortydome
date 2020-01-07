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
        <button class="nes-btn is-warning small">{{activePlayer.attacks[0].name}}</button>
      </div>
      <div class="col-5 text-center mb-2">
        <button class="nes-btn is-warning small">{{activePlayer.attacks[1].name}}</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-5 text-center mb-2">
        <button class="nes-btn is-warning small">{{activePlayer.attacks[2].name}}</button>
      </div>
      <div class="col-5 text-center mb-2">
        <button class="nes-btn is-warning small">{{activePlayer.attacks[3].name}}</button>
      </div>
    </div>
  </div>
</template>
<script>
let playerHealthElement = document.getElementById("playerHealth");
let playerHealthBarElement = document.getElementById("playerHealthBar");
let playerHitElement = document.getElementById("playerHits");

export default {
  name: "player",
  computed: {
    activePlayer() {
      return this.$store.state.activePlayer;
    }
  },
  methods: {
    update() {
      playerHealthElement.textContent = "HP: " + player.health.toString();
      playerHitElement.textContent = "HITS: " + player.hits.toString();
      enemyHealthElement.textContent = "HP: " + enemy.health.toString();
      enemyHitElement.textContent = "HITS: " + enemy.hits.toString();
    }
  }
};
</script>
<style>
img {
  margin-top: -40px;
}
</style>