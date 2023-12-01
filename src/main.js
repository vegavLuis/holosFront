import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { es } from "vuetify/locale";

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  locale: {
    locale: "es",
  },
});

createApp(App).use(vuetify).mount("#app");
