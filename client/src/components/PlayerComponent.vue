<template>
  <div class="col-4 text-center" id="player">
    <img class="img" src="https://pocketmortys.net/images/assets/MortyDefaultDown_1.png" alt="001" />
    <div class="row justify-content-center ml-1">
      <h5 id="playerHealth">HEALTH: 100</h5>
      <progress id="playerHealthBar" class="nes-progress is-error" value="100" max="100"></progress>
    </div>
    <div class="row justify-content-center">
      <h6 id="playerHits">HITS: 0</h6>
    </div>
    <div class="row justify-content-center mb-2">
      <div class="col-4 text-center">
        <button class="nes-btn is-warning" onclick="scream(enemy), zap(player)">scream</button>
      </div>
      <div class="col-4 text-center">
        <button class="nes-btn is-warning" onclick="cry(enemy), zap(player)">cry</button>
      </div>
      <div class="col-4 text-center">
        <button
          class="nes-btn is-warning"
          onclick="fetalPosition(player), zap(player)"
        >fetal position</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "player",
  props: ["fighterProp"],
  computed: {
    fighters() {
      return this.$store.state.activePlayer;
    }
  }
};
</script>