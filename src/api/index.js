//api统一入口文件
import api from "./api";
import system from './system'

const obj = {
  api,
  system
};
export default{
    install(Vue) {
        Object.keys(obj).forEach(item => {
          Vue.prototype[`$${item}`] = obj[item];
        });
      },
}