/*
 * @Author: your name
 * @Date: 2020-10-14 23:59:08
 * @LastEditTime: 2020-10-15 00:40:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qxdemod:\vue\qxui\src\main.js
 */
// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App';
// 引入Vant
import Vant from 'vant';
// 引入vant样式
import 'vant/lib/index.css';
// 引入router
import router from './router';

// 把Vant注册成vue插件
// test
Vue.use(Vant);

// 阻止显示生产模式的消息
Vue.config.productionTip = false;

// 创建和挂载根实例
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
