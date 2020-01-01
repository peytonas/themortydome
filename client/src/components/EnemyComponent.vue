<template>
  <div class="enemyComponent">
    <p>{{activeEnemy.name}}</p>
    <img :src="activeEnemy.imgUrl" alt />
    <div class="row justify-content-center mr-1">
      <h6 id="enemyHealth">HP: {{activeEnemy.hp}}</h6>
      <progress id="enemyHealthBar" class="nes-progress is-error" value="100" max="100"></progress>
    </div>
    <div class="row justify-content-center">
      <h6 id="enemyHits">HITS: {{activeEnemy.hits}}</h6>
    </div>
    <!-- <div class="row justify-content-center"></div> -->
  </div>
</template>
<script>
let enemyHealthElement = document.getElementById("enemyHealth");
let enemyHealthBarElement = document.getElementById("enemyHealthBar");
let enemyHitElement = document.getElementById("enemyHits");
// enemyHealthElement.textContent = "HEALTH: " + enemy.health.toString();
// enemyHitElement.textContent = "HITS: " + enemy.hits.toString();
export default {
  name: "enemy",
  computed: {
    activeEnemy() {
      return this.$store.state.activeEnemy;
    }
  },
  mounted() {}
};
</script>
<style>
img {
  margin-top: -40px;
}
</style>