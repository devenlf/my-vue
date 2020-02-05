//api统一入口文件
import site from "./site";
import system from "./system";
import datalist from "./datalist";
import api from "./api";
import middlePage from "./middlePage";
import error from "./error";

const obj = {
  site,
  api,
  system,
  error,
  middlePage,
  datalist,
};
export default{
    install(Vue) {
        Object.keys(obj).forEach(item => {
          Vue.prototype[`$${item}`] = obj[item];
        });
      },
}