import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css"
import ru from "element-plus/es/locale/lang/ru";
import "./style.css";
import App from "./App.vue";

app.use(ElementPlus, { locale: ru });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

createApp(App).mount("#app");
