// axios
import axios from 'axios';
var qs = require('qs');
// let baseURL = location.hostname == "localhost" ? "http://localhost:3000/api" : "https://api.gobabar.com/api";
let baseURL =  location.hostname.includes('local') ? "http://localhost:3000/api" : "https://api.iacheck.com/api";
// const token = window.localStorage.getItem("x-auth-token");
// if(token){
//     var headers = 
//     console.log(headers,"headers");
// }
// console.log(token,"");

const http = axios.create({
  baseURL: baseURL,
  headers: { 'x-auth-token': window.localStorage.getItem('x-auth-token') || '', 'Content-Type': 'application/json' },
  paramsSerializer: function (params) {
    return qs.stringify(params)
  }
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && (error.response.status == "401")) {
      // console.log('401', error.config.url)

      if (error.response.data == 'INEXISTING_ACCOUNT' && !window.location.pathname.startsWith('/account-not-found')) window.open('/account-not-found', '_self');

      // console.log(window.location, "window.location");
      if (!window.location.pathname.startsWith('/login') && !window.location.pathname.startsWith('/admin/login') && !window.location.pathname.startsWith('/register') && !window.location.pathname.startsWith('/account-not-found')) {
        window.localStorage.removeItem('x-auth-token');
        if (error.response.data == 'INEXISTING_ACCOUNT') window.open('/account-not-found', '_self');
        else window.open('/login', '_self');
      }
      // window.localStorage.removeItem('x-auth-token');
      // window.open('/login','_self');
    }
    return Promise.reject(error);
  }
);

export default http;