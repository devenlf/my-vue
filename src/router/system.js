/*
 * @Author: wenquan.huang
 * @Date: 2019-02-21 21:58:40
 * @Last Modified by: wq599263163@163.com
 * @Last Modified time: 2019-06-15 15:46:55
 */

export default {
    path: "/system",
    name: "system",
    component: () => import("../components/common/main.vue"),
    children: [
      {
        path: "cone",
        name: "cone",
        component: () => import("@/pages/system/cone.vue"),
      },
      {
        path: "orderSet",
        name: "orderSet",
        component: () => import("@/pages/system/orderSet.vue"),
      },
      {
        path: "tokenSet",
        name: "tokenSet",
        component: () => import("@/pages/system/tokenSet.vue"),
      },
      {
        path: "middlePage",
        name: "middlePage",
        component: () => import("@/pages/system/middlePage/"),
      },
      {
        path: "holiday",
        name: "holiday",
        component: () => import("@/pages/system/holiday/"),
      },
      {
        path: "site",
        name: "site",
        component: () => import("@/pages/system/site.vue"),
      },
      {
        path: "advertising",
        name: "advertising",
        component: () => import("@/pages/system/advertising/"),
      },
    ],
  };
  