import Vue from "vue";
import Router from "vue-router";
import site from "./site";
import system from "./system";
import dataList from "./dataList";
import error from "./error";
import { Message } from "element-ui";
import storage from "../serving/storageServing";
Vue.use(Router);
const passRoute = ["siteList"];
const bossId = [
  "1567143",
  "1615439",
  "1513937",
  "1614941",
  "1604958",
  "1632058",
  "1601982",
  "1619210",
  "1642330",
  "1642580",
  "1649731",
  "1640506",
  "1640506",
  "1589380",
  "1552691",
  "1640506",
  "1518609",
  "1641968",
  "1677939",
  "1557331",
  "1707173",
  "1000001",
];
//

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      // redirect: "/site/siteList",
      redirect: "/dataList/analysis",
    },
    site,
    system,
    dataList,
    error,
  ],
});
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
});

export default router;
