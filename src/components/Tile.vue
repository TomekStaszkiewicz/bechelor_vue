<template>
  <div
    v-for="tile in tiles"
    v-bind:style="{
      backgroundImage:
        'url(' +
        (tile.isVisible || selectedTiles.includes(tile)
          ? require(`@/assets/gameImages/${tile.src}`)
          : require(`@/assets/gameImages/background.jpeg`)) +
        ')',
    }"
    v-bind:key="tile.key"
    width="100"
    v-on:click="onClick(tile)"
    class="game-image"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tiles: Array,
    onClick: Function,
    selectedTiles: Array,
  },
});
</script>
<style>
.game-image {
  min-width: 125px;
  min-height: 125px;
  max-width: 125px;
  max-height: 125px;
  margin: 12.5px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
