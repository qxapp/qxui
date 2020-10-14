<template>
  <div class="page page-style">
    <van-cell-group title="基础用法">
      <van-cell
        title="文字提示"
        is-link
        @click="showToast"
      />
      <van-cell
        title="加载提示"
        is-link
        @click="showToastLoading"
      />
      <van-cell
        title="成功提示"
        is-link
        @click="showToastSuccess"
      />
      <van-cell
        title="失败提示"
        is-link
        @click="showToastFail"
      />
    </van-cell-group>

    <van-cell-group title="自定义图标">
      <van-cell
        title="自定义图标"
        is-link
        @click="showToastIcon"
      />
      <van-cell
        title="自定义图片"
        is-link
        @click="showToastImage"
      />
      <van-cell
        title="自定义加载图标"
        is-link
        @click="showToastLoading('spinner')"
      />
    </van-cell-group>

    <van-cell-group title="自定义位置">
      <van-cell
        title="顶部展示"
        is-link
        @click="showToastTop"
      />
      <van-cell
        title="底部展示"
        is-link
        @click="showToastBottom"
      />
    </van-cell-group>

    <van-cell-group title="动态更新提示">
      <van-cell
        title="动态更新提示"
        is-link
        @click="showToastCustom"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    // 文字提示
    showToast() {
      this.$toast("文字提示");
    },
    // 加载提示
    showToastLoading(loadingType) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType,
      });
    },
    // 成功提示
    showToastSuccess() {
      this.$toast.success("成功提示");
    },
    // 失败提示
    showToastFail() {
      this.$toast.fail("失败提示");
    },
    // 自定义图标
    showToastIcon() {
      this.$toast({
        message: "自定义图标",
        icon: "like-o",
      });
    },
    // 自定义图片
    showToastImage() {
      this.$toast({
        message: "自定义图片",
        icon: "https://img.yzcdn.cn/vant/logo.png",
      });
    },
    // 顶部展示
    showToastTop() {
      this.$toast({
        message: "顶部展示",
        position: "top",
      });
    },
    // 底部展示
    showToastBottom() {
      this.$toast({
        message: "底部展示",
        position: "bottom",
      });
    },
    // 动态更新提示
    showToastCustom() {
      // 定义toast
      const toast = this.$toast.loading({
        message: "倒计时 3 秒",
        duration: 0,
        forbidClick: true,
      });

      let second = 3;
      // 定义timer
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = "倒计时 " + second + " 秒";
        } else {
          // 清除timer
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    },
  },
};
</script>

<style lang="less">
@import "../style/var";
</style>
