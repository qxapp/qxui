<template>
  <div class="page">
    <van-cell-group title="基础用法">
      <van-picker
        title="标题"
        :columns="columns"
        show-toolbar
        @change="onChange"
      />
    </van-cell-group>

    <van-cell-group title="默认选中项">
      <van-picker
        title="标题"
        :columns="columns"
        :default-index="2"
        show-toolbar
        @change="onChange"
      />
    </van-cell-group>

    <van-cell-group title="多列选择">
      <van-picker
        title="标题"
        :columns="columnsDate"
        show-toolbar
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-cell-group>

    <van-cell-group title="级联选择">
      <van-picker
        title="标题"
        :columns="columnsCascde"
        show-toolbar
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-cell-group>

    <van-cell-group title="禁用选项">
      <van-picker
        title="标题"
        :columns="columnsDisabled"
        show-toolbar
      />
    </van-cell-group>

    <van-cell-group title="动态设置选项">
      <van-picker
        title="标题"
        :columns="columnsDynamic"
        show-toolbar
        @change="onChangeDynamic"
      />
    </van-cell-group>

    <van-cell-group title="加载状态">
      <van-picker
        title="标题"
        :columns="columnsDynamic"
        show-toolbar
        loading
      />
    </van-cell-group>

    <van-cell-group title="搭配弹出层使用">
      <van-field
        label="城市"
        :value="value"
        placeholder="选择城市"
        readonly
        clickable
        @click="showPicker = true"
      />
      <van-popup
        v-model="showPicker"
        position="bottom"
        round
      >
        <van-picker
          title="标题"
          :columns="columns"
          show-toolbar
          @confirm="onConfirmPicker"
          @cancel="showPicker = false"
        />
      </van-popup>
    </van-cell-group>
  </div>
</template>

<script>
const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};

export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      columnsDate: [
        {
          values: ['周一', '周二', '周三', '周四', '周五'],
          defaultIndex: 2,
        },
        {
          values: ['上午', '下午', '晚上'],
          defaultIndex: 1,
        },
      ],
      columnsCascde: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }],
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }],
            },
          ],
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }],
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }],
            },
          ],
        },
      ],
      columnsDisabled: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' },
      ],
      columnsDynamic: [
        { values: Object.keys(cities) },
        { values: cities['浙江'] },
      ],
      value: '',
      showPicker: false,
    };
  },
  methods: {
    // 改变
    onChange(picker, value, index) {
      this.$toast(`当前值: ${value}, 当前索引值: ${index}`);
    },
    // 确定
    onConfirm(value, index) {
      this.$toast(`当前值: ${value}, 当前索引值: ${index}`);
    },
    // 取消
    onCancel() {
      this.$toast('取消');
    },
    // 动态改变
    onChangeDynamic(picker, values) {
      picker.setColumnValues(1, cities[values[0]]);
    },
    // 选择器确定
    onConfirmPicker(value) {
      this.showPicker = false;
      this.value = value;
    },
  },
};
</script>
