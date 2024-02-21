import "./assets/base.css";
import "./index.css";
import "./App.vue";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
