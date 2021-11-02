import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import gameManagerPlugin from "./plugins/GameManagerPlugin";

createApp(App).use(router).use(gameManagerPlugin).mount("#app");
