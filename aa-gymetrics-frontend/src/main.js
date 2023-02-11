import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faUserLock,
  faTriangleExclamation,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import "@/assets/tailwind.css";
import router from "./router";
import store from "./store";

//Icons
library.add(faChevronDown);
library.add(faChevronUp);
library.add(faUserLock);
library.add(faTriangleExclamation);
library.add(faEye);
library.add(faEyeSlash);

createApp(App)
  .use(store)
  .use(router)
  //  .use(VueSession)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
