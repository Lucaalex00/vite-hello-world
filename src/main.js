import { createApp } from "vue";

import "./style.css";
import App from "./components/App.vue"; /* IMPORT App.vue from COMPONENTS FOLDER */
import anotherApp from "./components/AnotherHello.vue";

createApp(App).mount("#app");
createApp(anotherApp).mount("#anotherApp");
