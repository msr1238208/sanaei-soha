import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
// import router from "./main";
import "./assets/main.css";
import "./index.css";

// import { globalCookiesConfig } from "vue3-cookies";
// globalCookiesConfig({
//   expireTimes: "30d",
//   path: "/",
//   domain: "",
//   secure: true,
//   sameSite: "None",
// });

const app = createApp(App);
const store = createPinia();
app.use(store);
const routes = setupLayouts(generatedRoutes);

import VueCountdown from "@chenfengyuan/vue-countdown";
app.component(VueCountdown.name, VueCountdown);

import ToastPlugin from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-bootstrap.css";

app.use(ToastPlugin);

import authLogin from "@/components/auth/authLogin.vue";
import authVerify from "@/components/auth/authVerify.vue";

const router = createRouter({
  routes,
  history: createWebHistory(),
});
// router.beforeEach(async (to) => {
//   if (to.meta.requireAuth && !localStorage.getItem("token")) {
//     router.push("/login");
//   }
// });
app.use(router);
app.mount("#app");

export default app;
