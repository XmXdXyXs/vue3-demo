import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Column from "./views/Column.vue";
import Create from "./views/Create.vue";
import { useStore } from "vuex";
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
    meta: {
      isLoginNotAccess: true,
    },
  },
  {
    path: "/column/:id?",
    name: "column",
    component: Column,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
    meta: {
      isLoginAccess: true,
    },
  },
  // Your route configurations go here
];
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  // 在导航之前执行逻辑
  // 如果已经是登陆状态 不需要再跳转到登入注册页面
  if (store.state.user.isLogin && to.meta?.isLoginNotAccess) {
    next("/");
  } else if (!store.state.user.isLogin && to.meta?.isLoginAccess) {
    next("/login");
  } else {
    next(); // 调用 next() 进行导航
  }
});

export default router;
