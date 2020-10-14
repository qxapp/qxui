<template>
  <div class="page page-field">
    <van-cell-group title="基础用法">
      <van-field
        v-model="text"
        label="文本"
        placeholder="请输入文本"
      />
    </van-cell-group>

    <van-cell-group title="自定义类型">
      <van-field
        v-model="tel"
        type="tel"
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="digit"
        type="digit"
        label="整数"
        placeholder="请输入整数"
      />
      <van-field
        v-model="number"
        type="number"
        label="数字"
        placeholder="请输入数字（支持小数）"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>

    <van-cell-group title="禁用输入框">
      <van-field
        label="文本"
        value="输入框只读"
        readonly
      />
      <van-field
        label="文本"
        value="输入框禁用"
        disabled
      />
    </van-cell-group>

    <van-cell-group title="显示图标">
      <van-field
        v-model="valueIcon"
        label="文本"
        placeholder="显示图标"
        left-icon="smile-o"
        right-icon="warning-o"
      />
      <van-field
        v-model="valueClearable"
        label="文本"
        placeholder="显示清除图标"
        left-icon="music-o"
        clearable
      />
    </van-cell-group>

    <van-cell-group title="错误提示">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        error
        required
      />
      <van-field
        v-model="mobile"
        label="手机号"
        placeholder="请输入手机号"
        required
        error-message="手机号格式错误"
      />
    </van-cell-group>

    <van-cell-group title="插入按钮">
      <van-field
        v-model="code"
        label="短信验证码"
        placeholder="请输入短信验证码"
        center
        clearable
      >
        <template #button>
          <van-button
            type="primary"
            size="small"
          >发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>

    <van-cell-group title="格式化输入内容">
      <van-field
        v-model="valueInput"
        label="文本"
        placeholder="在输入时执行格式化"
        :formatter="formatter"
      />
      <van-field
        v-model="valueBlur"
        label="文本"
        placeholder="在失焦时执行格式化"
        :formatter="formatter"
        format-trigger="onBlur"
      />
    </van-cell-group>

    <van-cell-group title="高度自适应">
      <van-field
        v-model="valueAutosize"
        type="textarea"
        label="留言"
        placeholder="请输入留言"
        rows="1"
        autosize
      />
    </van-cell-group>

    <van-cell-group title="显示字数统计">
      <van-field
        v-model="valueLimit"
        type="textarea"
        label="留言"
        placeholder="请输入留言"
        :rows="2"
        autosize
        :maxlength="50"
        show-word-limit
      />
    </van-cell-group>

    <van-cell-group title="输入框内容对齐">
      <van-field
        v-model="valueAlign"
        label="文本"
        placeholder="输入框内容右对齐"
        input-align="right"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      tel: '',
      digit: '',
      number: '',
      password: '',
      valueIcon: '',
      valueClearable: '',
      username: '',
      mobile: '',
      code: '',
      valueInput: '',
      valueBlur: '',
      valueAutosize: '',
      valueLimit: '',
      valueAlign: '',
    };
  },
  methods: {
    // 格式化
    formatter(value) {
      // 过滤输入的数字
      return value.replace(/\d/g, '');
    },
  },
};
</script>

<style lang="less">
@import '../style/var';
</style>
