import GameManager from "@/managers/GameManager";
import { Plugin } from "vue";

const gameManagerPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$gameManager = new GameManager();
  },
};

declare module "@vue/runtime-core" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $gameManager: GameManager;
  }
}

export default gameManagerPlugin;
