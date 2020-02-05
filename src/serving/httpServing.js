import axios from 'axios';
//引入message模块 用于信息展示
import { Message } from "element-ui";
//创建a标签
const newWin=(url,id)=>{
    const a=document.createElement('a');
    a.setAttribute("href",url);
    a.setAttribute("target","_blank");
    a.setAttribute("id",id)
    //防止反复添加
    if(!document.getElementById(id)){
        document.body.appendChild(a)
    }
    a.click();
}
//http request 拦截器
    axios.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return Promise.reject(err)
      })


      // http response 拦截器
      axios.interceptors.response.use(
        res => {
          //拦截响应，做统一处理 
          if (res.data.code == 103) {
            Message.error(res.data.message);
            const url = process.env.VUE_APP_ADV_URL;
            if (res.config.url.includes("/user/index")) {
              newWin(url, "VUE_APP_ADV_URL");
            }
          }
          // 报错
        if (res.data.code == 102 || res.data.code == 500) {
          Message.error(res.data.message);
        }
        return res;
        },
  //接口错误状态处理，也就是说无响应时的处理
      error => {
        return Promise.reject(error) 
      },
      );

class Http{
    constructor(){
        //配置axios 默认baseurl
        axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
        axios.defaults.withCredentials = true;//需要发送cookie
        axios.defaults.timeout = 100000;
    }
    //get请求
    async eggGet(url, params = {}){
        axios.defaults.withCredentials = false;
        try{
            const { data } = await axios.get(url,{
                params,
            });
            return data;
        }catch(error){
            console.log(error)
        }
    }
    async httpGet(url, params = {}) {
        axios.defaults.withCredentials = true;
        try {
          const { data } = await axios.get(url, {
            params,
          });
          return data;
        } catch (error) {
          console.error(error);
        }
      }
      //post请求
      async httpPost(url, params = {}){
        axios.defaults.withCredentials = true;
        try{
            const { data } = await axios.post(url,params);
            return data;
        }catch(error){
            console.log(error)
        }
    }
    //dl1
    async httpFormData(url, params) {
        let formData = new FormData();
        Object.keys(params).forEach(item => {
          formData.append(item, params[item]);
        });
        const { data } = await axios.post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
      }
}
export default new Http();