<template>
  <div v-if="!gameFinished">
    <h2>Comparisions: {{ clickCounter }}</h2>
    <h2>Time: {{ timeDisplay }}</h2>
  </div>
  <div v-if="!gameFinished" class="game-container">
    <TileComponent
      :onClick="clickTile"
      :tiles="tiles"
      :selectedTiles="selectedTiles"
    />
  </div>
  <Modal :open="gameFinished" :time="timeDisplay" :counter="clickCounter" />
</template>

<script lang="ts">
import TileComponent from "@/components/Tile.vue";
import Modal from "@/components/Modal.vue";
import { Tile } from "@/managers/types";
import { defineComponent } from "vue";
import { GameData } from "./types";

export default defineComponent({
  components: {
    TileComponent,
    Modal,
  },
  data: function (): GameData {
    return {
      tiles: this.$gameManager.tiles,
      selectedTiles: [],
      isClicked: false,
      clickCounter: 0,
      timer: 0,
      intervalId: 0,
      gameFinished: false,
    };
  },
  computed: {
    timeDisplay(): string {
      const minutes = Math.floor(this.timer / 60);
      const seconds = this.timer % 60;
      return `${minutes < 10 ? "0" : ""}${minutes} : ${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    },
  },
  methods: {
    clickTile(tile: Tile): void {
      if (tile.isVisible || this.isClicked) {
        return;
      }
      if (!this.clickCounter && !this.selectedTiles.length) {
        this.intervalId = setInterval(() => {
          this.timer += 1;
        }, 1000);
      }
      this.isClicked = true;
      this.selectedTiles.push(tile);
      if (this.selectedTiles.length === 2) {
        this.$gameManager.compareImages(
          this.selectedTiles[0],
          this.selectedTiles[1]
        );
        this.clickCounter++;
        setTimeout(() => {
          if (this.$gameManager.isFinished) {
            clearInterval(this.intervalId);
            this.intervalId = 0;
            this.gameFinished = true;
          }
          this.selectedTiles = [];
          this.isClicked = false;
        }, 500);
      } else {
        this.isClicked = false;
      }
    },
  },
});
</script>
<style scoped>
.game-container {
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
}
</style>
