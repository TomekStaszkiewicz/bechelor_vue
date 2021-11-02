<template>
  <div class="main-div">
    <button
      v-for="level in availableLevels"
      v-bind:key="level"
      value="level"
      v-on:click="onSelect(level)"
      class="btn-level"
    >
      {{ level }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    availableLevels: Array,
    onSelect: Function,
  },
});
</script>

<style>
.main-div {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btn-level {
  width: 300px;
  margin: 10px;
  background-color: skyblue;
  color: black;
  font-size: 36px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
