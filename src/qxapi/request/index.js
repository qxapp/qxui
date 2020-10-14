// 引入 axios
import axios from 'axios';
// 引入 store
import store from '../../store';
// 引入 showToast showModal
import { showToast, showModal } from '../index';

const service = axios.create({
  // api 链接
  baseURL: 'https://test.qxapp.cn',
  // 超时
  timeout: 1500,
});

// request 拦截器
service.interceptors.request.use(
  // request 前配置
  config => {
    // 判断是否有 token
    if (store.state.token) {
      // 添加 token Header
      config.headers['X-Token'] = store.state.token;
    }
    return config;
  },
  // request 出错
  error => {
    console.log('request error: ' + error);
    return Promise.reject(error);
  },
);

// response 拦截器
service.interceptors.response.use(
  // response 成功
  response => {
    const res = response.data;
    // code 不等于 200 代表出错
    if (res.code !== 200) {
      console.log('code error: ' + res.message);
      showToast({
        title: res.message,
        type: 'error',
        duration: 1500,
      });

      // code 500:
      if (res.code === 500) {
        showModal({
          message: '登录状态出错，请重新登录',
          showCancel: false,
        }).then(res => {
          if (res.confirm) {
            this.$router.push({ path: '/user/login' });
          }
        });
      }

      return Promise.reject(new Error(res.message));
    } else {
      return res.data;
    }
  },
  // response 出错
  error => {
    console.log('response error: ' + error);
    showToast({
      title: error.message,
      type: 'error',
      duration: 1500,
    });
    return Promise.reject(error);
  }
)