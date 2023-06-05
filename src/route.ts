import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home, name: "Home" },
    {
      path: "/all-codes",
      component: () => import("./pages/AllCodes.vue"),
      name: "AllCodes",
    },
  ],
});

export default router;
