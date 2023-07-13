import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import DetailView from "./components/Detail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: DetailView,
    },
  ],
});

export default router;
