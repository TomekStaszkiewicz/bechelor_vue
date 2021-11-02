<template>
  <Difficulty
    :availableLevels="Object.keys(availableLevels)"
    :onSelect="onSelectLevel"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Difficulty from "@/components/Difficulty.vue";
import { GamePhase } from "@/managers/types";

const availableLevels = {
  Easy: 4,
  Medium: 6,
  Hard: 8,
};

export default defineComponent({
  components: {
    Difficulty,
  },
  data: function () {
    return {
      availableLevels,
    };
  },
  methods: {
    onSelectLevel(l: keyof typeof availableLevels) {
      console.log(`New level ${l}`);
      this.$gameManager.gamePhase = GamePhase.BEFORE_START;
      this.$gameManager.generateTiles(availableLevels[l]);
      this.$router.push("game");
    },
  },
});
</script>
