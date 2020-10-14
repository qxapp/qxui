<template>
  <div class="page page-checkbox">
    <van-cell-group title="基础用法">
      <van-cell>
        <van-checkbox v-model="checked">复选框</van-checkbox>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="禁用状态">
      <van-cell>
        <van-checkbox
          :value="false"
          disabled
        >复选框</van-checkbox>
      </van-cell>
      <van-cell>
        <van-checkbox
          :value="true"
          disabled
        >复选框</van-checkbox>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="自定义形状">
      <van-cell>
        <van-checkbox
          v-model="checkedShape"
          shape="square"
        >复选框</van-checkbox>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="自定义颜色">
      <van-cell>
        <van-checkbox
          v-model="checkedColor"
          checked-color="#07c160"
        >复选框</van-checkbox>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="自定义大小">
      <van-cell>
        <van-checkbox
          v-model="checkedSize"
          icon-size="32"
        >复选框</van-checkbox>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="自定义图标">
      <van-cell>
        <van-checkbox v-model="checkedIcon">复选框
          <template #icon="props">
            <img
              :src="props.checked ? iconActive : icon"
              height="20"
            />
          </template>
        </van-checkbox>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="禁用文本点击">
      <van-cell>
        <van-checkbox
          v-model="checkedLabelDisabled"
          label-disabled
        >复选框</van-checkbox>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="复选框组">
      <van-cell class="page-checkbox__group">
        <van-checkbox-group v-model="checkboxGroup">
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
        </van-checkbox-group>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="水平排列">
      <van-cell>
        <van-checkbox-group
          v-model="checkboxGroupHorizontal"
          direction="horizontal"
        >
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
        </van-checkbox-group>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="限制最大可选数">
      <van-cell class="page-checkbox__group">
        <van-checkbox-group
          v-model="checkboxGroupMax"
          :max="2"
        >
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
          <van-checkbox name="c">复选框 c</van-checkbox>
        </van-checkbox-group>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="全选与反选">
      <van-cell class="page-checkbox__group">
        <van-checkbox-group
          v-model="checkboxGroupAll"
          ref="checkboxGroupAll"
        >
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
          <van-checkbox name="c">复选框 c</van-checkbox>
        </van-checkbox-group>
      </van-cell>
      <van-cell>
        <van-button
          type="primary"
          @click="checkAll"
        >全选</van-button>
        <van-button
          type="info"
          style="margin-left:16px"
          @click="toggleAll"
        >反选</van-button>
      </van-cell>
    </van-cell-group>

    <van-checkbox-group v-model="checkboxGroupCell">
      <van-cell-group title="搭配单元格组件使用">
        <van-cell
          v-for="(item, index) in checkboxGroupCellList"
          :key="item"
          :title="`复选框 ${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <van-checkbox
              :name="item"
              ref="checkboxes"
            />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checkedShape: true,
      checkedColor: true,
      checkedSize: true,
      checkedIcon: true,
      icon: "https://img.yzcdn.cn/vant/user-inactive.png",
      iconActive: "https://img.yzcdn.cn/vant/user-active.png",
      checkedLabelDisabled: true,
      checkboxGroup: ["a", "b"],
      checkboxGroupHorizontal: ["a", "b"],
      checkboxGroupMax: [],
      checkboxGroupAll: [],
      checkboxGroupCell: [],
      checkboxGroupCellList: ["a", "b", "c", "d"],
    };
  },
  methods: {
    // 全选
    checkAll() {
      this.$refs.checkboxGroupAll.toggleAll(true);
    },
    // 反选
    toggleAll() {
      this.$refs.checkboxGroupAll.toggleAll();
    },
    // 选择
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  },
};
</script>

<style lang="less">
@import "../style/var";

.page-checkbox {
  &__group .van-checkbox:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
