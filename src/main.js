import { createApp } from "vue";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./Index.vue";

const app = createApp(Index);

app.AOS = AOS;
AOS.init();

app.mount("#app");
