/*
 * @Author: wenquan.huang
 * @Date: 2019-02-21 21:58:40
 * @Last Modified by: wq599263163@163.com
 * @Last Modified time: 2019-06-12 21:08:47
 */

export default {
    path: "/error",
    name: "error",
    component: () => import("../components/common/main.vue"),
    children: [
      {
        path: "list",
        name: "error-list",
        component: () => import("@/pages/error/error-list.vue"),
      },
      {
        path: "details",
        name: "error-details",
        component: () => import("@/pages/error/error-details.vue"),
      },
      {
        path: "traceList",
        name: "trace-error-list",
        component: () => import("@/pages/error/trace-error-list.vue"),
      },
      {
        path: "chart",
        name: "chart",
        component: () => import("@/pages/error/chart.vue"),
      },
    ],
  };
  