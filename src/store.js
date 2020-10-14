// 引入 Vue
import Vue from 'vue';
// 引入 Vuex
import Vuex from 'vuex';

// 把 Vuex 注册成 Vue 插件
Vue.use(Vuex);

const store = new Vuex.Store({
  // 状态
  state: {
    // 密匙
    token: '',
    // 用户
    user: '',
    // 用户菜单
    userMenuList: [],
    // 边栏
    sidebar: false,
  },

  // 改变
  mutations: {
    // 设置 token
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },

  // 方法
  actions: {
    //  登录
    login({ commit }, data) {
      return new Promise((resolve, reject) => {

      });
    },

    // 登出
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {

      });
    },
  },

  // 计算属性
  getters: {
    token: state => state.token,
    user: state => state.user,
    sidebar: state => state.sidebar,
  }
});

export default store;