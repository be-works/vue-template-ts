import { createApp, h } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";

import "ant-design-vue/dist/antd.css";
import "./assets/main.css";
import { load_components } from "./components/antd.component";

const app = createApp({
  render: () => h(App),
});

app.use(createPinia());
app.use(router);
app.use(Antd);

//

load_components(app);

app.mount("#app");
