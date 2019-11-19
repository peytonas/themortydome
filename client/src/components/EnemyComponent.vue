<template>
  <div class="col-4 text-center" id="enemy">
    <p>{{fighterProp.name}}</p>
    <img :src="fighterProp.img" alt="vm" />
    <div class="row justify-content-center mr-1">
      <h6 id="enemyHealth">HEALTH: {{fighterProp.health}}</h6>
      <progress id="enemyHealthBar" class="nes-progress is-error" value="100" max="100"></progress>
    </div>
    <div class="row justify-content-center">
      <h6 id="enemyHits">HITS: {{fighterProp.hits}}</h6>
    </div>
    <div class="row justify-content-center"></div>
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
  props: ["fighterProp"],
  computed: {
    fighters() {
      return this.$store.state.activeEnemy;
    }
  },
  mounted() {}
};
</script>