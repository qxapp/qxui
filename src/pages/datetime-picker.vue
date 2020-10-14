<template>
  <div class="page page-datetime-picker">
    <van-cell-group title="选择年月日">
      <van-datetime-picker
        v-model="date"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-cell-group>

    <van-cell-group title="选择年月">
      <van-datetime-picker
        v-model="yearMonth"
        type="year-month"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-cell-group>

    <van-cell-group title="选择月日">
      <van-datetime-picker
        v-model="monthDay"
        type="month-day"
        title="选择月日"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-cell-group>

    <van-cell-group title="选择时间">
      <van-datetime-picker
        v-model="time"
        type="time"
        title="选择时间"
        :min-hour="10"
        :max-hour="20"
      />
    </van-cell-group>

    <van-cell-group title="选择完整时间">
      <van-datetime-picker
        v-model="datetime"
        type="datetime"
        title="选择完整时间"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-cell-group>

    <van-cell-group title="选择年月日小时">
      <van-datetime-picker
        v-model="datehour"
        type="datehour"
        title="选择年月日小时"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-cell-group>

    <van-cell-group title="选项过滤器">
      <van-datetime-picker
        v-model="timeFilter"
        type="time"
        title="选项过滤器"
        :filter="filter"
      />
    </van-cell-group>

    <van-cell-group title="自定义列排序">
      <van-datetime-picker
        v-model="dateCustom"
        type="date"
        title="自定义列排序"
        :min-date="minDate"
        :max-date="maxDate"
        :columns-order="['month', 'day', 'year']"
        :formatter="formatter"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date("2020/10/1"),
      minDate: new Date("2020/1/1"),
      maxDate: new Date("2025/11/1"),
      yearMonth: new Date("2020/10/1"),
      monthDay: new Date("2020/10/1"),
      time: "12:00",
      datetime: new Date("2020/10/1"),
      datehour: new Date("2020/10/1"),
      timeFilter: "12:00",
      dateCustom: new Date("2020/10/1"),
    };
  },
  methods: {
    // 全选
    formatter(type, val) {
      if (type === "year") {
        return val + "年";
      } else if (type === "month") {
        return val + "月";
      } else if (type === "day") {
        return val + "日";
      }
      return val;
    },
    // 过滤器
    filter(type, options) {
      if (type === "minute") {
        return options.filter((option) => option % 5 === 0);
      }
      return options;
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
