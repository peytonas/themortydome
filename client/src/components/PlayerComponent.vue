<template>
  <div class="playerComponent">
    <p>{{activePlayer.name}}</p>
    <img :src="activePlayer.imgUrl" alt />
    <div class="row justify-content-center ml-1">
      <h5 id="playerHealth">HP: {{activePlayer.hp}}</h5>
      <progress id="playerHealthBar" class="nes-progress is-error" value="100" max="100"></progress>
    </div>
    <div class="row justify-content-center">
      <h6 id="playerHits">HITS: {{activePlayer.hits}}</h6>
    </div>
    <div class="row justify-content-center mb-2">
      <div class="col-4 text-center">
        <button
          class="nes-btn is-warning"
          v-for="attack in activePlayer.attacks"
          :fighterProp="activePlayer.attacks"
          :key="attack"
        >{{activePlayer.attacks.name}}</button>
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
      playerHealthElement.textContent = "HEALTH: " + player.health.toString();
      playerHitElement.textContent = "HITS: " + player.hits.toString();
      enemyHealthElement.textContent = "HEALTH: " + enemy.health.toString();
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