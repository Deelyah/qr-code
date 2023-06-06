import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    {
      path: "/all-codes",
      component: () => import("./pages/AllCodes.vue"),
    },
  ],
});

export default router;
