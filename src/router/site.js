/*
 * @Author: wenquan.huang
 * @Date: 2019-02-21 21:58:40
 * @Last Modified by: wq599263163@163.com
 * @Last Modified time: 2019-02-26 19:08:43
 */

export default {
    path: "/site",
    name: "site",
    component: () => import("../components/common/main.vue"),
    children: [
      {
        path: "siteList",
        name: "siteList",
        component: () => import("@/pages/site/siteList.vue"),
      },
    ],
  };
  