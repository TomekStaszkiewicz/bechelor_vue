<template>
  <div v-if="open" class="modal-container">
    <h2>Congratulations!</h2>
    <h3>Time: {{ time }}</h3>
    <h3>Number of comparision: {{ counter }}</h3>
    <button v-on:click="restartGame()" class="restart-button">
      Play again!
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    open: Boolean,
    time: String,
    counter: Number,
  },
  methods: {
    restartGame(): void {
      this.$router.push("/");
    },
  },
});
</script>

<style>
.modal-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.restart-button {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: aqua;
  cursor: pointer;
}
</style>
