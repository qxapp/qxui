<template>
  <div class="page page-slider">
    <van-cell-group title="基础用法">
      <van-slider
        v-model="value1"
        @change="onChange"
      />
    </van-cell-group>

    <van-cell-group title="双滑块">
      <van-slider
        v-model="value2"
        range
        @change="onChange"
      />
    </van-cell-group>

    <van-cell-group title="指定选择范围">
      <van-slider
        v-model="value3"
        :min="-50"
        :max="50"
        @change="onChange"
      />
    </van-cell-group>

    <van-cell-group title="禁用">
      <van-slider
        v-model="value4"
        disabled
      />
    </van-cell-group>

    <van-cell-group title="指定步长">
      <van-slider
        v-model="value5"
        :step="10"
        @change="onChange"
      />
    </van-cell-group>

    <van-cell-group title="自定义样式">
      <van-slider
        v-model="value6"
        :bar-height="4"
        active-color="#ee0a24"
        @change="onChange"
      />
    </van-cell-group>

    <van-cell-group title="自定义按钮">
      <van-slider
        v-model="value7"
        active-color="#ee0a24"
      >
        <template #button>
          <div class="page-slider__button">{{ value7 }}</div>
        </template>
      </van-slider>
    </van-cell-group>

    <van-cell-group title="垂直方向">
      <div style="height: 150px; padding-left: 30px;">
        <van-slider
          v-model="value8"
          vertical
          @change="onChange"
        />
        <van-slider
          v-model="value9"
          range
          vertical
          style="margin-left: 100px;"
          @change="onChange"
        />
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 50,
      value2: [20, 60],
      value3: 0,
      value4: 50,
      value5: 50,
      value6: 50,
      value7: 50,
      value8: 50,
      value9: [20, 60],
    };
  },
  methods: {
    // 改变
    onChange(value) {
      this.$toast('当前值: ' + value);
    },
  },
};
</script>

<style lang="less">
@import '../style/var';

.page-slider {
  .van-cell-group {
    padding: @padding-lg @padding-md;
  }

  &__button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: @red;
    border-radius: 100px;
  }
}
</style>
