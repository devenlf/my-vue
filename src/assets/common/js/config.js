/**
 * Created by huamengyu on 2019/1/29.
 */

let submenuList = [
    {
      order: "2-1",
      text: "金币设置",
      router: "/system/cone",
    },
    {
      order: "2-2",
      text: "订单去重",
      router: "/system/orderSet",
    },
    {
      order: "2-3",
      text: "设置TOKEN",
      router: "/system/tokenSet",
    },
    {
      order: "2-4",
      text: "中间页管理",
      router: "/system/middlePage",
    },
    {
      order: "2-5",
      text: "节假日配置",
      router: "/system/holiday",
    },
    {
      order: "2-6",
      text: "成功页广告投放",
      router: "/system/advertising",
    },
  ];
  
  export default {
    pagination: {
      pages: [10, 20, 50, 100],
      pageLayout: "sizes, prev, pager, next",
      pageSize: 20,
    },
    menuList: [
      {
        order: "2",
        text: "系统设置",
        icon: "el-icon-setting",
        submenu: submenuList,
      },
      {
        order: "3",
        text: "数据分析",
        icon: "el-icon-date",
        submenu: [
          {
            order: "1-1",
            text: "站点列表",
            router: "/dataList/analysis",
          },
          {
            order: "1-2",
            text: "金币抵扣列表",
            router: "/dataList/coinList",
          },
          {
            order: "1-3",
            text: "账户数据报表",
            router: "/dataList/userDataList",
          },
          {
            order: "1-4",
            text: "签收报表",
            router: "/dataList/receiveReport",
          },
          {
            order: "1-5",
            text: "签收率分析",
            router: "/dataList/receiveDate",
          },
          {
            order: "1-6",
            text: "商品签收率分析",
            router: "/dataList/receiveGoods",
          },
          {
            order: "1-7",
            text: "每日报表",
            router: "/dataList/dailyReport",
          },
        ],
      },
      {
        order: "4",
        text: "错误分析",
        icon: "el-icon-date",
        submenu: [
          {
            order: "1-1",
            text: "图表",
            router: "/error/chart",
          },
          {
            order: "1-2",
            text: "Vue错误列表",
            router: "/error/list",
          },
          {
            order: "1-3",
            text: "sendError列表",
            router: "/error/traceList",
          },
        ],
      },
    ],
    siteSearchTypeOptions: [
      {
        value: "site.id",
        label: "站点ID",
      },
      {
        value: "site.name",
        label: "站点名称",
      },
      {
        value: "site.refuseReason",
        label: "拒绝理由",
      },
      {
        value: "site.userId",
        label: "账户ID",
      },
    ],
    siteStatusOptions: [
      {
        value: "100",
        label: "全部",
      },
      {
        value: "0",
        label: "审核通过",
      },
      {
        value: "1",
        label: "待审核",
      },
      {
        value: "2",
        label: "审核拒绝",
      },
    ],
    siteTypeOptions: [
      {
        value: "落地页最下方需体现开户主体公司名称，请修改",
        label: "落地页最下方需体现开户主体公司名称，请修改",
      },
      {
        value: "站点标题不得随意填写，需与投放产品相关，请优化",
        label: "站点标题不得随意填写，需与投放产品相关，请优化",
      },
      {
        value: "落地页内容与账户行业分类不一致，请检查",
        label: "落地页内容与账户行业分类不一致，请检查",
      },
      {
        value: "落地页图片加载失败，请检查",
        label: "落地页图片加载失败，请检查",
      },
      {
        value: "落地页图片/内容尺度太大，请修改",
        label: "落地页图片/内容尺度太大，请修改",
      },
      {
        value: "落地页无转化入口，请确认",
        label: "落地页无转化入口，请确认",
      },
      {
        value: "落地页不适配手机，请调整",
        label: "落地页不适配手机，请调整",
      },
    ],
  };
  