import http from '../serving/httpServing';

export default{
    getUserInfo: () => http.httpGet("/user/index"),
}