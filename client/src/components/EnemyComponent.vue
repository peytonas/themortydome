<template>
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
</template>