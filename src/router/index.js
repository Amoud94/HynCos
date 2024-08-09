import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const qs = require("qs");
const routes = [
  {
    path:'/admin/login',
    component: () => import('../layouts/Admin.vue'),
    children: []
  },


  //-----------------Client---------------------------
  {
    path: "",
    component: () => import("../layouts/Fullscreen.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/client/home"),
      },
    ],
  },

];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  parseQuery(query) {
    return qs.parse(query);
  },
  stringifyQuery(query) {
    let result = qs.stringify(query);
    return result ? "?" + result : "";
  },
});


export default router;


