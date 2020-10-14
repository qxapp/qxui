<template>
  <div class="page page-stepper">
    <van-cell
      title="基础用法"
      center
    >
      <van-stepper v-model="value1" />
    </van-cell>

    <van-cell
      title="步长设置"
      center
    >
      <van-stepper
        v-model="value2"
        :step="2"
      />
    </van-cell>

    <van-cell
      title="限制输入范围"
      center
    >
      <van-stepper
        v-model="value3"
        :min="5"
        :max="8"
      />
    </van-cell>

    <van-cell
      title="限制输入整数"
      center
    >
      <van-stepper
        v-model="value4"
        integer
      />
    </van-cell>

    <van-cell
      title="禁用状态"
      center
    >
      <van-stepper
        v-model="value5"
        disabled
      />
    </van-cell>

    <van-cell
      title="禁用输入框"
      center
    >
      <van-stepper
        v-model="value6"
        disable-input
      />
    </van-cell>

    <van-cell
      title="固定小数位数"
      center
    >
      <van-stepper
        v-model="value7"
        :decimal-length="1"
        :step="0.2"
      />
    </van-cell>

    <van-cell
      title="自定义大小"
      center
    >
      <van-stepper
        v-model="value8"
        button-size="32px"
        input-width="40px"
      />
    </van-cell>

    <van-cell
      title="异步变更"
      center
    >
      <van-stepper
        v-model="value9"
        async-change
        @change="onChange"
      />
    </van-cell>

    <van-cell
      title="圆角风格"
      center
    >
      <van-stepper
        v-model="value10"
        theme="round"
        button-size="22px"
        disable-input
      />
    </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 1,
      value3: 1,
      value4: 1,
      value5: 1,
      value6: 1,
      value7: 1,
      value8: 1,
      value9: 1,
      value10: 1,
    };
  },
  methods: {
    // 改变
    onChange(value) {
      this.$toast.loading({ forbidClick: true });

      setTimeout(() => {
        this.value9 = value;
        this.$toast.clear();
      }, 500);
    },
  },
};
</script>
