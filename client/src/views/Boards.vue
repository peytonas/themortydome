<template>
<body class="container-fluid bg">
  <div class="col-1 mt-2">
    <button class="nes-btn is-error text-white" @click="logout()">
      <i class="nes-icon close is-small"></i>
    </button>
  </div>
  <div class="row justify-content-around">
    <div class="col-6 text-center nes-container is-centered is-dark is-rounded">
      <h3 class="nes-text is-warning">WELCOME TO</h3>
      <h1 class="nes-text is-primary">THE MORTYDOME</h1>
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4 text-center" id="player">
      <img
        class="img"
        src="https://pocketmortys.net/images/assets/MortyDefaultDown_1.png"
        alt="001"
      />
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
    <div class="col-4 text-center" id="enemy">
      <img
        class="img"
        src="https://pocketmortys.net/images/assets/MortyVoltamatronDown_1.png"
        alt="vm"
      />
      <div class="row justify-content-center mr-1">
        <h6 id="enemyHealth">HEALTH: 100</h6>
        <progress id="enemyHealthBar" class="nes-progress is-error" value="100" max="100"></progress>
      </div>
      <div class="row justify-content-center">
        <h6 id="enemyHits">HITS: 0</h6>
      </div>
      <div class="row justify-content-center"></div>
    </div>
  </div>
  <div class="row justify-content-left">
    <div class="col-6">
      <button id="mmc" class="nes-btn is-success disabled">
        <img
          src="https://pocketmortys.net/images/items/MortyManipulatorChip.png"
          alt
          style="height: 40px; width: 40px"
        />
      </button>
      <button id="ams" class="nes-btn is-success disabled" onclick="attackMegaSeed(player)">
        <img
          src="https://pocketmortys.net/images/items/AttackMegaSeed.png"
          alt
          style="height: 40px; width: 40px"
        />
      </button>
      <button id="ser" class="nes-btn is-success disabled" onclick="serum(player)">
        <img
          src="https://pocketmortys.net/images/items/Serum.png"
          alt
          style="height: 40px; width: 40px"
        />
      </button>
      <button id="lp" class="nes-btn is-success disabled" onclick="lovePotion(enemy)">
        <img
          src="https://pocketmortys.net/images/items/LovePotion.png"
          alt
          style="height: 40px; width: 40px"
        />
      </button>
      <audio id="pass-butter">
        <source src="rick-passbutter.mp3" type="audio/mpeg" />
      </audio>
      <button
        id="br"
        class="nes-btn is-success"
        onclick="document.getElementById('dialog-rounded').showModal(); butterRobot()"
      >
        <img
          src="https://pocketmortys.net/images/items/ButterRobot.png"
          alt
          style="height: 40px; width: 40px"
        />
      </button>
      <dialog class="nes-dialog is-rounded" id="dialog-rounded">
        <form method="dialog">
          <p>What is my purpose?</p>
          <p class="text-center">[press esc to exit]</p>
        </form>
      </dialog>
      <button id="ieh" class="nes-btn is-success disabled">
        <img
          src="https://pocketmortys.net/images/items/IQEnhancingHelmet.png"
          alt
          style="height: 40px; width: 40px"
        />
      </button>
    </div>
  </div>
  <div class="row justify-content-center pt-2 mb-2">
    <div class="col-4 text-center">
      <button class="nes-btn is-primary" onclick="reset()">RESET</button>
    </div>
  </div>
</body>
</template>

<script>
import Auth from "../AuthService";

export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards"); //which board has the lists
  },
  data() {
    return {
      newBoard: {
        title: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "" };
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style scoped>
.font {
  font-family: "Press Start 2p";
  font-size: 10px;
}
.text-color {
  color: #908a99;
}
</style>