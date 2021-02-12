import { store } from "../store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HomePage = () => import("../views/home/HomePage.vue");
const LoginPage = () => import("../views/login/LoginPage.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      requiresAuth: true,
      title: "ЕДДС",
    },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
      title: "Авторизация",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "LoginPage") {
    if (store.getters.isAuth) {
      next({ name: store.getters.getLastPath });
    } else {
      next();
    }
  } else {
    if (!store.getters.isAuth) {
      next({ name: "LoginPage" });
    } else {
      store.commit("ADD_PATH", to.name);
      next();
    }
  }
});

export default router;
