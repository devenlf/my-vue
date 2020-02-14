/*
 * @Author: wenquan.huang
 * @Date: 2019-02-21 21:58:40
 * @Last Modified by: huangwenquan
 * @Last Modified time: 2019-09-24 14:16:18
 */

export default {
    path: "/dataList",
    name: "dataList",
    component: () => import("../components/common/main.vue"),
    children: [
      {
        path: "analysis",
        name: "analysis",
        component: () => import("@/pages/dataList/analysis.vue"),
      },
      {
        path: "coinList",
        name: "coinList",
        component: () => import("@/pages/dataList/coinList.vue"),
      },
      {
        path: "userDataList",
        name: "userDataList",
        component: () => import("@/pages/dataList/userDataList.vue"),
      },
      {
        path: "receiveReport",
        name: "receiveReport",
        component: () => import("@/pages/dataList/receiveReport.vue"),
      },
      {
        path: "receiveDate",
        name: "receiveDate",
        component: () => import("@/pages/dataList/receiveDate.vue"),
      },
      {
        path: "receiveGoods",
        name: "receiveGoods",
        component: () => import("@/pages/dataList/receiveGoods.vue"),
      },
      {
        path: "dailyReport",
        name: "dailyReport",
        component: () => import("@/pages/dataList/dailyReport.vue"),
      },
    ],
  };
  