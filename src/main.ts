import { createApp } from "vue";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";
import router from "./router";
import { checkStorage } from "./services/auth";
import { store } from "./store";
import "./index.css";

const app = createApp(App);

app.use(VueClickAway);

checkStorage().then(() => {
  app.use(store);
  app.use(router);

  router.isReady().then(() => app.mount("#app"));
});
