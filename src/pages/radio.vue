<template>
  <div class="page page-radio">
    <van-cell-group title="基础用法">
      <van-radio-group v-model="radio">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </van-cell-group>

    <van-cell-group title="水平排列">
      <van-radio-group
        v-model="radioHorizontal"
        direction="horizontal"
      >
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </van-cell-group>

    <van-cell-group title="禁用状态">
      <van-radio-group
        v-model="radioDisabled"
        disabled
      >
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </van-cell-group>

    <van-cell-group title="自定义形状">
      <van-radio-group v-model="radioShape">
        <van-radio
          name="1"
          shape="square"
        >单选框 1</van-radio>
        <van-radio
          name="2"
          shape="square"
        >单选框 2</van-radio>
      </van-radio-group>
    </van-cell-group>

    <van-cell-group title="自定义颜色">
      <van-radio-group v-model="radioColor">
        <van-radio
          name="1"
          checked-color="#07c160"
        >单选框 1</van-radio>
        <van-radio
          name="2"
          checked-color="#07c160"
        >单选框 2</van-radio>
      </van-radio-group>
    </van-cell-group>

    <van-cell-group title="自定义大小">
      <van-radio-group v-model="radioIconSize">
        <van-radio
          name="1"
          :icon-size="24"
        >单选框 1</van-radio>
        <van-radio
          name="2"
          :icon-size="24"
        >单选框 2</van-radio>
      </van-radio-group>
    </van-cell-group>

    <van-cell-group title="自定义图标">
      <van-radio-group v-model="radioIconCustom">
        <van-radio name="1">单选框 1
          <template #icon="{ checked }">
            <img
              :src="checked ? icon.active : icon.inactive"
              height="20"
            />
          </template>
        </van-radio>
        <van-radio name="2">单选框 2
          <template #icon="{ checked }">
            <img
              :src="checked ? icon.active : icon.inactive"
              height="20"
            />
          </template>
        </van-radio>
      </van-radio-group>
    </van-cell-group>

    <van-cell-group title="禁用文本点击">
      <van-radio-group v-model="radioLabel">
        <van-radio
          name="1"
          label-disabled
        >单选框 1</van-radio>
        <van-radio
          name="2"
          label-disabled
        >单选框 2</van-radio>
      </van-radio-group>
    </van-cell-group>

    <van-cell-group
      class="page-radio-cell"
      title="与 Cell 组件一起使用"
    >
      <van-radio-group v-model="radioCell">
        <van-cell
          title="单选框 1"
          clickable
          @click="radioCell = '1'"
        >
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell
          title="单选框 2"
          clickable
          @click="radioCell = '2'"
        >
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-radio-group>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radioHorizontal: '1',
      radioDisabled: '1',
      radioShape: '1',
      radioColor: '1',
      radioIconSize: '1',
      radioIconCustom: '1',
      radioLabel: '1',
      radioCell: '1',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
};
</script>

<style lang="less">
@import '../style/var';

.page-radio {
  .van-cell-group:not(.page-radio-cell) {
    padding: @padding-sm @padding-md 0;
  }
  .van-cell-group:not(.page-radio-cell) .van-radio {
    padding-bottom: @padding-sm;
  }
}
</style>
