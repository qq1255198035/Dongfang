import axios from "axios";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODM4MzI0MTgsInVzZXJuYW1lIjoiYWRtaW4ifQ.eX2wg3NYYPMwyv-ebcpRXrZtw6JE3hnBftJg_HgLdM4';
// 请求前拦截
axios.interceptors.request.use(
    config => {
        if (token){
            config.headers[ 'X-Access-Token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
        }
        console.log(config.method)
        if(config.method === 'get'){
            config.params = {
                _t: Date.parse(new Date())/1000,
                ...config.params
            }
        }
        return config;
    },
    err => {
        console.log("请求超时");
        return Promise.reject(err);
    }
);

// 返回后拦截
axios.interceptors.response.use(
    data => {
        return data.data;
    },
    err => {
        console.log(err)
        return Promise.reject(err);
    }
);

