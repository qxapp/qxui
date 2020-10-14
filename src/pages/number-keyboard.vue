<template>
  <div class="page page-from">
    <van-cell
      is-link
      @touchstart.native.stop="keyboard = 'default'"
    >弹出默认键盘</van-cell>
    <van-cell
      is-link
      @touchstart.native.stop="keyboard = 'custom'"
    >弹出带右侧栏的键盘</van-cell>
    <van-cell
      is-link
      @touchstart.native.stop="keyboard = 'extraKey'"
    >弹出身份证号键盘</van-cell>
    <van-cell
      is-link
      @touchstart.native.stop="keyboard = 'title'"
    >弹出带标题的键盘</van-cell>
    <van-cell
      is-link
      @touchstart.native.stop="keyboard = 'multiExtraKey'"
    >弹出配置多个按键的键盘</van-cell>
    <van-field
      :value="value"
      label="双向绑定"
      placeholder="点此输入"
      @touchstart.native.stop="keyboard = 'bindValue'"
    />

    <van-number-keyboard
      :show="keyboard === 'default'"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'custom'"
      close-button-text="完成"
      theme="custom"
      extra-key="."
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'extraKey'"
      close-button-text="完成"
      extra-key="X"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'title'"
      close-button-text="完成"
      title="键盘标题"
      extra-key="."
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'multiExtraKey'"
      close-button-text="完成"
      theme="custom"
      :extra-key="['00', '.']"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      v-model="value"
      :show="keyboard === 'bindValue'"
      :maxlength="6"
      @blur="keyboard = ''"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      keyboard: '',
    };
  },
  methods: {
    // 输入
    onInput(value) {
      this.$toast('输入: ' + value);
    },
    // 删除
    onDelete() {
      this.$toast('删除');
    },
  },
};
</script>
