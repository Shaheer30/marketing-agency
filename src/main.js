import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import routes from "./routes.js";
import '@fortawesome/fontawesome-free/css/all.min.css'


// Router Configuration
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Global Navigation Guard for Meta Tags
router.afterEach((to) => {
  document.title = to.meta.title || "UAE Marketing Agency";
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", to.meta.description || "");
  }

  // Set canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute(
    "href",
    window.location.origin + to.fullPath.split("?")[0]
  );
});

// App Initialization
const head = createHead();
const app = createApp(App);

app.use(router);
app.use(head);
app.mount("#app");