<template>
  <div class="page page-search">
    <van-cell-group title="基础用法">
      <van-search
        v-model="value1"
        placeholder="请输入搜索关键词"
      />
    </van-cell-group>

    <van-cell-group title="事件监听">
      <van-search
        v-model="value2"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </van-cell-group>

    <van-cell-group title="搜索框内容对齐">
      <van-search
        v-model="value3"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
    </van-cell-group>

    <van-cell-group title="禁用搜索框">
      <van-search
        v-model="value4"
        placeholder="请输入搜索关键词"
        disabled
      />
    </van-cell-group>

    <van-cell-group title="自定义背景色">
      <van-search
        v-model="value5"
        placeholder="请输入搜索关键词"
        shape="round"
        background="#4fc08d"
      />
    </van-cell-group>

    <van-cell-group title="自定义按钮">
      <van-search
        v-model="value6"
        label="地址"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearchCustom">搜索</div>
        </template>
      </van-search>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
    };
  },
  methods: {
    // 搜索
    onSearch(value) {
      this.$toast('搜索: ' + value);
    },
    // 取消
    onCancel() {
      this.$toast('取消');
    },
    // 自定义搜索
    onSearchCustom() {
      this.$toast('搜索: ' + this.value6);
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
