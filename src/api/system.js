import http from "../serving/httpServing";

export default {
  // 金币相关
  getCone: params => http.httpGet("/config/get-coin-percent", params),
  setCone: params => http.httpPost("/config/update-coin-percent", params),
  // 订单去重
  getOrderUnique: params => http.httpGet("/config/get-order-unique", params),
  setOrderUnique: params =>
    http.httpPost("/config/update-order-unique", params),
  // 设置token
  setTokenIndo: params =>
    http.httpPost("/config/update-toutiao-grab-token", params),
  // 获取单个全局配置
  getGlobalConfig: params => http.httpGet("/config/get-global-config", params),
  // 更新全局配置
  updateGlobalConfig: params =>
    http.httpPost("/config/update-global-config", params),
  // 配置活动信息
  setHoilday: params => http.httpPost("/config/update-global-config", params),
  forwardApi: params => http.httpPost("/forward/api", params),
  //配置广告信息
  setAdvInfo: params => http.httpPost("/global-order-ads/update", params),
  getAdvInfo: params => http.httpGet("/global-order-ads/list", params),
};
