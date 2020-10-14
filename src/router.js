// 引入Vue
import Vue from 'vue';
// 引入Router
import Router from 'vue-router';

// 把路由注册成vue插件
Vue.use(Router);

// 定义路由
const routes = [
  // Home 首页
  {
    path: '/',
    component: () => import('./pages/home'),
    meta: {
      title: 'Home 首页'
    },
  },
  // Button 按钮
  {
    path: '/button',
    component: () => import('./pages/button'),
    meta: {
      title: 'Button 按钮',
    }
  },
  // Cell 单元格
  {
    path: '/cell',
    component: () => import('./pages/cell'),
    meta: {
      title: 'Cell 单元格',
    }
  },
  // Icon 图标
  {
    path: '/icon',
    component: () => import('./pages/icon'),
    meta: {
      title: 'Icon 图标',
    }
  },
  // Image 图片
  {
    path: '/image',
    component: () => import('./pages/image'),
    meta: {
      title: 'Image 图片',
    }
  },
  // Layout 布局
  {
    path: '/layout',
    component: () => import('./pages/layout'),
    meta: {
      title: 'Layout 布局',
    }
  },
  // Popup 弹出层
  {
    path: '/popup',
    component: () => import('./pages/popup'),
    meta: {
      title: 'Popup 弹出层',
    }
  },
  // Style 内置样式
  {
    path: '/style',
    component: () => import('./pages/style'),
    meta: {
      title: 'Style 内置样式',
    }
  },
  // Toast 轻提示
  {
    path: '/toast',
    component: () => import('./pages/toast'),
    meta: {
      title: 'Toast 轻提示',
    }
  },
  // Calendar 日历
  {
    path: '/calendar',
    component: () => import('./pages/calendar'),
    meta: {
      title: 'Calendar 日历',
    }
  },
  // Checkbox 复选框
  {
    path: '/checkbox',
    component: () => import('./pages/checkbox'),
    meta: {
      title: 'Checkbox 复选框',
    }
  },
  // DatetimePicker 时间选择
  {
    path: '/datetime-picker',
    component: () => import('./pages/datetime-picker'),
    meta: {
      title: 'DatetimePicker 时间选择',
    }
  },
  // Field 输入框
  {
    path: '/field',
    component: () => import('./pages/field'),
    meta: {
      title: 'Field 输入框',
    }
  },
  // Form 表单
  {
    path: '/form',
    component: () => import('./pages/form'),
    meta: {
      title: 'Form 表单',
    }
  },
  // NumberKeyboard 数字键盘
  {
    path: '/number-keyboard',
    component: () => import('./pages/number-keyboard'),
    meta: {
      title: 'NumberKeyboard 数字键盘',
    }
  },
  // PasswordInput 密码输入框
  {
    path: '/password-input',
    component: () => import('./pages/password-input'),
    meta: {
      title: 'PasswordInput 密码输入框',
    }
  },
  // Picker 选择器
  {
    path: '/picker',
    component: () => import('./pages/picker'),
    meta: {
      title: 'Picker 选择器',
    }
  },
  // Radio 单选框
  {
    path: '/radio',
    component: () => import('./pages/radio'),
    meta: {
      title: 'Radio 单选框',
    }
  },
  // Rate 评分
  {
    path: '/rate',
    component: () => import('./pages/rate'),
    meta: {
      title: 'Rate 评分',
    }
  },
  // Search 搜索
  {
    path: '/search',
    component: () => import('./pages/search'),
    meta: {
      title: 'Search 搜索',
    }
  },
  // Slider 滑块
  {
    path: '/slider',
    component: () => import('./pages/slider'),
    meta: {
      title: 'Slider 滑块',
    }
  },
  // Stepper 步进器
  {
    path: '/stepper',
    component: () => import('./pages/stepper'),
    meta: {
      title: 'Stepper 步进器',
    }
  },
  // Switch 开关
  {
    path: '/switch',
    component: () => import('./pages/switch'),
    meta: {
      title: 'Switch 开关',
    }
  },
  // Uploader 文件上传
  {
    path: '/uploader',
    component: () => import('./pages/uploader'),
    meta: {
      title: 'Uploader 文件上传',
    }
  },
];

// 导出路由实例
export default new Router({
  mode: 'history', // 模式
  routes, // 路由
});
