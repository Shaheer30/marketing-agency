import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";

router.afterEach((to) => {
  let canonical = document.querySelector("#canonical-link");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("id", "canonical-link");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute(
    "href",
    window.location.origin + to.fullPath.split("?")[0]
  );
});

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mount("#app");
