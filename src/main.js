import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ru from "element-plus/es/locale/lang/ru";
import "./style.css";
import "element-plus/dist/index.css";
import { createVfm } from "vue-final-modal";
import "vue-final-modal/style.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const vfm = createVfm();

app.use(createPinia());
app.use(ElementPlus, { locale: ru });
app.use(router);
app.use(vfm);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

