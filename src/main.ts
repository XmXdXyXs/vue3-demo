import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "./App.vue";
import "./tailwind.css";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Column from "./views/Column.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/column/:id?",
    name: "column",
    component: Column,
  },
  // Your route configurations go here
];
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");
