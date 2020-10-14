<template>
  <div class="page page-rate">
    <van-cell-group title="基础用法">
      <van-rate v-model="value1" />
    </van-cell-group>

    <van-cell-group title="自定义图标">
      <van-rate
        v-model="value2"
        icon="like"
        void-icon="like-o"
      />
    </van-cell-group>

    <van-cell-group title="自定义样式">
      <van-rate
        v-model="value3"
        :size="25"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
      />
    </van-cell-group>

    <van-cell-group title="半星">
      <van-rate
        v-model="value4"
        :size="25"
        void-icon="star"
        void-color="#eee"
        allow-half
      />
    </van-cell-group>

    <van-cell-group title="自定义数量">
      <van-rate
        v-model="value5"
        :count="6"
      />
    </van-cell-group>

    <van-cell-group title="禁用状态">
      <van-rate
        v-model="value6"
        disabled
      />
    </van-cell-group>

    <van-cell-group title="只读状态">
      <van-rate
        v-model="value6"
        readonly
      />
    </van-cell-group>

    <van-cell-group title="监听 change 事件">
      <van-rate
        v-model="value7"
        @change="onChange"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 2.5,
      value5: 3,
      value6: 3,
      value7: 3,
    };
  },
  methods: {
    // 改变
    onChange(value) {
      this.value7 = value;
      this.$toast('当前值: ' + value);
    },
  },
};
</script>

<style lang="less">
@import '../style/var';

.page-rate {
  .van-cell-group {
    padding: @padding-sm @padding-md;
  }
}
</style>
