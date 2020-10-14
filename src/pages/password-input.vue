<template>
  <div class="page">
    <van-cell-group
      title="基础用法"
      style="background:none"
    >
      <van-password-input
        :value="value1"
        info="密码为 6 位数字"
        :focused="keyboard === 'value1'"
        @focus="keyboard = 'value1'"
      />
    </van-cell-group>

    <van-cell-group
      title="自定义长度"
      style="background:none"
    >
      <van-password-input
        :value="value2"
        :length="4"
        gutter="15"
        :focused="keyboard === 'value2'"
        @focus="keyboard = 'value2'"
      />
    </van-cell-group>

    <van-cell-group
      title="明文展示"
      style="background:none"
    >
      <van-password-input
        :value="value3"
        :mask="false"
        :focused="keyboard === 'value3'"
        @focus="keyboard = 'value3'"
      />
    </van-cell-group>

    <van-cell-group
      title="错误提示"
      style="background:none"
    >
      <van-password-input
        :value="value4"
        :error-info="error"
        :focused="keyboard === 'value4'"
        @focus="keyboard = 'value4'"
      />
    </van-cell-group>

    <van-number-keyboard
      :show="!!keyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="keyboard = ''"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '123',
      value2: '123',
      value3: '123',
      value4: '123',
      keyboard: '',
      error: '',
    };
  },
  methods: {
    // 输入
    onInput(value) {
      const { keyboard } = this;
      this[keyboard] = (this[keyboard] + value).slice(0, 6);
      if (this[keyboard].length === 6) {
        this.error = '密码错误';
      } else {
        this.error = '';
      }
    },
    // 删除
    onDelete() {
      const { keyboard } = this;
      this[keyboard] = this[keyboard].slice(0, this[keyboard].length - 1);
    },
  },
};
</script>
