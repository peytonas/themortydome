<template>
  <div class="enemyComponent">
    <p>{{activeEnemy.name}}</p>
    <img :src="activeEnemy.imgUrl" alt />
    <div class="row justify-content-center mr-1">
      <h5 id="enemyHealth">HP: {{activeEnemy.currentHp}}</h5>
      <progress
        id="enemyHealthBar"
        class="nes-progress is-error"
        :value="activeEnemy.currentHp"
        :max="activeEnemy.baseHp"
      ></progress>
    </div>
    <div class="row justify-content-center">
      <h6 id="enemyHits">HITS: {{activeEnemy.hits}}</h6>
    </div>
    <div class="row justify-content-center">
      <div class="col-5 text-center mb-2">
        <button
          class="nes-btn is-warning small"
          @click="attackOne()"
        >{{activeEnemy.attacks[0].name}}</button>
      </div>
      <div class="col-5 text-center mb-2">
        <button
          class="nes-btn is-warning small"
          @click="attackTwo()"
        >{{activeEnemy.attacks[1].name}}</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-5 text-center mb-2">
        <button
          class="nes-btn is-warning small"
          @click="attackThree()"
        >{{activeEnemy.attacks[2].name}}</button>
      </div>
      <div class="col-5 text-center mb-2">
        <button
          class="nes-btn is-warning small"
          @click="attackFour()"
        >{{activeEnemy.attacks[3].name}}</button>
      </div>
    </div>
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
  mounted() {
    this.getEnemy();
  },
  computed: {
    activeEnemy() {
      return this.$store.state.activeEnemy;
    },
    user() {
      return this.$store.state.user;
    },
    fighters() {
      return this.$store.state.fighters;
    }
  },
  methods: {
    getEnemy() {
      var i;
      for (i = 0; i < this.fighters.length; i++) {
        console.log(this.fighters[i].name);
        if (this.fighters[i]._id != this.user.mortyDex[i]) {
          this.$store.dispatch("getEnemy", this.fighters[i]._id);
          this.user.mortyDex.push(this.fighters[i]._id);
          {
            break;
          }
        }
      }
    },
    attackOne() {
      this.$store.state.activePlayer.currentHp -= this.activeEnemy.attacks[0].AD;
      this.$store.state.activePlayer.hits++;
    },
    attackTwo() {
      this.$store.state.activePlayer.currentHp -= this.activeEnemy.attacks[1].AD;
      this.$store.state.activePlayer.hits++;
    },
    attackThree() {
      this.$store.state.activePlayer.currentHp -= this.activeEnemy.attacks[2].AD;
      this.$store.state.activePlayer.hits++;
    },
    attackFour() {
      this.$store.state.activePlayer.currentHp -= this.activeEnemy.attacks[3].AD;
      this.$store.state.activePlayer.hits++;
    }
  }
};
</script>
<style>
img {
  margin-top: -40px;
}
</style>