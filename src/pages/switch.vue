<template>
  <div class="page page-switch">
    <van-cell-group title="基础用法">
      <van-switch v-model="value1" />
    </van-cell-group>

    <van-cell-group title="禁用状态">
      <van-switch
        v-model="value2"
        disabled
      />
    </van-cell-group>

    <van-cell-group title="加载状态">
      <van-switch
        v-model="value3"
        loading
      />
    </van-cell-group>

    <van-cell-group title="自定义大小">
      <van-switch
        v-model="value4"
        size="24px"
      />
    </van-cell-group>

    <van-cell-group title="自定义颜色">
      <van-switch
        v-model="value5"
        active-color="#07c160"
        inactive-color="#ee0a24"
      />
    </van-cell-group>

    <van-cell-group title="异步控制">
      <van-switch
        :value="value6"
        @input="onInput"
      />
    </van-cell-group>

    <van-cell-group
      class="page-switch__group"
      title="搭配单元格使用"
    >
      <van-cell
        title="标题"
        center
      >
        <template #right-icon>
          <van-switch
            v-model="value7"
            size="24px"
          />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: true,
      value7: true,
    };
  },
  methods: {
    // 输入
    onInput(value) {
      this.$dialog
        .confirm({
          title: '标题',
          message: '是否切换开关？',
        })
        .then(() => {
          this.value6 = value;
        });
    },
  },
};
</script>

<style lang="less">
@import url('../style/var');

.page-switch {
  .van-cell-group:not(.page-switch__group) {
    display: flex;
    padding: @padding-sm @padding-md;
  }
}
</style>
