<template>
  <div class="page page-calendar">
    <van-cell-group title="基础用法">
      <van-cell
        title="选择单个日期"
        :value="date"
        is-link
        @click="show = true"
      />
      <van-cell
        title="选择多个日期"
        :value="dateMulti"
        is-link
        @click="showMulti = true"
      />
      <van-cell
        title="选择日期区间"
        :value="dateRange"
        is-link
        @click="showRange = true"
      />
    </van-cell-group>

    <van-cell-group title="快捷选择">
      <van-cell
        title="选择单个日期"
        :value="dateQuick"
        is-link
        @click="showQuick = true"
      />
      <van-cell
        title="选择日期区间"
        :value="dateQuickRange"
        is-link
        @click="showQuickRange = true"
      />
    </van-cell-group>

    <van-cell-group title="自定义日历">
      <van-cell
        title="自定义颜色"
        :value="dateCustomColor"
        is-link
        @click="showCustomColor = true"
      />
      <van-cell
        title="自定义日期范围"
        :value="dateCustomRange"
        is-link
        @click="showCustomRange = true"
      />
      <van-cell
        title="自定义按钮文字"
        :value="dateCustomConfirm"
        is-link
        @click="showCustomConfirm = true"
      />
      <van-cell
        title="自定义日期文字"
        :value="dateCustomDay"
        is-link
        @click="showCustomDay = true"
      />
      <van-cell
        title="自定义弹出位置"
        :value="dateCustomPosition"
        is-link
        @click="showCustomPosition = true"
      />
      <van-cell
        title="自定义日期区间最大范围"
        :value="dateCustomMax"
        is-link
        @click="showCustomMax = true"
      />
      <van-cell
        title="自定义周起始日"
        :value="dateCustomWeek"
        is-link
        @click="showCustomWeek = true"
      />
    </van-cell-group>

    <van-cell-group title="平铺展示">
      <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        style="height: 500px;"
      />
    </van-cell-group>

    <van-calendar
      v-model="show"
      @confirm="confirm"
    />
    <van-calendar
      v-model="showMulti"
      type="multiple"
      @confirm="confirmMulti"
    />
    <van-calendar
      v-model="showRange"
      type="range"
      @confirm="confirmRange"
    />

    <van-calendar
      v-model="showQuick"
      :show-confirm="false"
      @confirm="confirmQuick"
    />
    <van-calendar
      v-model="showQuickRange"
      type="range"
      :show-confirm="false"
      @confirm="confirmQuickRange"
    />

    <van-calendar
      v-model="showCustomColor"
      type="range"
      color="#07c160"
      @confirm="confirmCustomColor"
    />
    <van-calendar
      v-model="showCustomRange"
      :min-date="new Date('2020/10/01')"
      :max-date="new Date('2020/10/31')"
      @confirm="confirmCustomRange"
    />
    <van-calendar
      v-model="showCustomConfirm"
      type="range"
      confirm-text="完成"
      confirmDisabledText="请选择结束时间"
      @confirm="confirmCustomConfirm"
    />
    <van-calendar
      v-model="showCustomDay"
      type="range"
      :min-date="new Date('2020/05/01')"
      :max-date="new Date('2020/05/31')"
      :formatter="formatter"
      @confirm="confirmCustomDay"
    />
    <van-calendar
      v-model="showCustomPosition"
      position="right"
      :round="false"
      @confirm="confirmCustomPosition"
    />
    <van-calendar
      v-model="showCustomMax"
      type="range"
      :max-range="3"
      @confirm="confirmCustomMax"
    />
    <van-calendar
      v-model="showCustomWeek"
      :first-day-of-week="1"
      @confirm="confirmCustomWeek"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      dateMulti: "",
      dateRange: "",
      dateQuick: "",
      dateQuickRange: "",
      dateCustomColor: "",
      dateCustomRange: "",
      dateCustomConfirm: "",
      dateCustomDay: "",
      dateCustomPosition: "",
      dateCustomMax: "",
      dateCustomWeek: "",
      show: false,
      showMulti: false,
      showRange: false,
      showQuick: false,
      showQuickRange: false,
      showCustomColor: false,
      showCustomRange: false,
      showCustomConfirm: false,
      showCustomDay: false,
      showCustomPosition: false,
      showCustomMax: false,
      showCustomWeek: false,
    };
  },
  methods: {
    // 选择单个日期
    confirm(date) {
      this.date =
        date.getFullYear() + `/${date.getMonth() + 1}/${date.getDate()}`;
      this.show = false;
    },
    // 选择多个日期
    confirmMulti(dates) {
      if (dates.length) {
        this.dateMulti = `选择了 ${dates.length} 个日期`;
      }
      this.showMulti = false;
    },
    // 选择日期区间
    confirmRange(dates) {
      if (dates.length) {
        const [start, end] = dates;
        this.dateRange =
          `${start.getMonth() + 1}/${start.getDate()}` +
          " - " +
          `${end.getMonth() + 1}/${end.getDate()}`;
      }
      this.showRange = false;
    },
    // 快捷选择单个日期
    confirmQuick(date) {
      this.dateQuick =
        date.getFullYear() + `/${date.getMonth() + 1}/${date.getDate()}`;
      this.showQuick = false;
    },
    // 快捷选择日期区间
    confirmQuickRange(dates) {
      if (dates.length) {
        const [start, end] = dates;
        this.dateQuickRange =
          `${start.getMonth() + 1}/${start.getDate()}` +
          " - " +
          `${end.getMonth() + 1}/${end.getDate()}`;
      }
      this.showQuickRange = false;
    },
    // 自定义颜色
    confirmCustomColor(dates) {
      if (dates.length) {
        const [start, end] = dates;
        this.dateCustomColor =
          `${start.getMonth() + 1}/${start.getDate()}` +
          " - " +
          `${end.getMonth() + 1}/${end.getDate()}`;
      }
      this.showCustomColor = false;
    },
    // 自定义日期范围
    confirmCustomRange(date) {
      this.dateCustomRange =
        date.getFullYear() + `/${date.getMonth() + 1}/${date.getDate()}`;
      this.showCustomRange = false;
    },
    // 自定义按钮文字
    confirmCustomConfirm(dates) {
      if (dates.length) {
        const [start, end] = dates;
        this.dateCustomConfirm =
          `${start.getMonth() + 1}/${start.getDate()}` +
          " - " +
          `${end.getMonth() + 1}/${end.getDate()}`;
      }
      this.showCustomConfirm = false;
    },
    // 自定义日期文字
    confirmCustomDay(dates) {
      if (dates.length) {
        const [start, end] = dates;
        this.dateCustomDay =
          `${start.getMonth() + 1}/${start.getDate()}` +
          " - " +
          `${end.getMonth() + 1}/${end.getDate()}`;
      }
      this.showCustomDay = false;
    },
    // 自定义弹出位置
    confirmCustomPosition(date) {
      this.dateCustomPosition =
        date.getFullYear() + `/${date.getMonth() + 1}/${date.getDate()}`;
      this.showCustomPosition = false;
    },
    // 自定义日期区间最大范围
    confirmCustomMax(dates) {
      if (dates.length) {
        const [start, end] = dates;
        this.dateCustomMax =
          `${start.getMonth() + 1}/${start.getDate()}` +
          " - " +
          `${end.getMonth() + 1}/${end.getDate()}`;
      }
      this.showCustomMax = false;
    },
    // 自定义周起始日
    confirmCustomWeek(date) {
      this.dateCustomWeek =
        date.getFullYear() + `/${date.getMonth() + 1}/${date.getDate()}`;
      this.showCustomWeek = false;
    },
    // Day 数据结构
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = "劳动节";
        } else if (date === 4) {
          day.topInfo = "青年节";
        } else if (date === 11) {
          day.text = "今天";
        }
      }

      if (day.type === "start") {
        day.bottomInfo = "入店";
      } else if (day.type === "end") {
        day.bottomInfo = "离店";
      }

      return day;
    },
  },
};
</script>

<style lang="less">
@import "../style/var";
</style>
