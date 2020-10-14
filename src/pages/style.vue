<template>
  <div class="page page-style">
    <van-cell-group title="文字省略">
      <van-cell>
        <div class="van-ellipsis">这是一段最多显示一行的文字，文字超过长度，后面的内容会省略</div>
      </van-cell>
      <van-cell>
        <div class="van-multi-ellipsis--l2">这是一段最多显示两行的文字，文字超过长度，后面的内容会省略。这是一段最多显示两行的文字，文字超过长度，后面的内容会省略。</div>
      </van-cell>
      <van-cell>
        <div class="van-multi-ellipsis--l3">这是一段最多显示三行的文字，文字超过长度，后面的内容会省略。这是一段最多显示三行的文字，文字超过长度，后面的内容会省略。这是一段最多显示三行的文字，文字超过长度，后面的内容会省略。</div>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="1px 边框">
      <van-cell title="上边框">
        <div
          class="van-hairline--top"
          style="height:20px"
        />
      </van-cell>
      <van-cell title="下边框">
        <div
          class="van-hairline--bottom"
          style="height:20px"
        />
      </van-cell>
      <van-cell title="左边框">
        <div
          class="van-hairline--left"
          style="margin-left:1px; height:20px"
        />
      </van-cell>
      <van-cell title="右边框">
        <div
          class="van-hairline--right"
          style="height:20px"
        />
      </van-cell>
      <van-cell title="上下边框">
        <div
          class="van-hairline--top-bottom"
          style="height:20px"
        />
      </van-cell>
      <van-cell title="全边框">
        <div
          class="van-hairline--surround"
          style="margin-left:1px; height:20px"
        />
      </van-cell>
    </van-cell-group>

    <van-cell-group title="动画">
      <van-cell
        title="Fade 淡入"
        is-link
        @click="animate('van-fade')"
      />
      <van-cell
        title="Slide Up 上滑进入"
        is-link
        @click="animate('van-slide-up')"
      />
      <van-cell
        title="Slide Down 下滑进入"
        is-link
        @click="animate('van-slide-down')"
      />
      <van-cell
        title="Slide Left 左滑进入"
        is-link
        @click="animate('van-slide-left')"
      />
      <van-cell
        title="Slide Right 右滑进入"
        is-link
        @click="animate('van-slide-right')"
      />

      <transition :name="transitionName">
        <div
          v-show="show"
          class="page-style__transition"
        />
      </transition>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "",
      show: false,
    };
  },
  methods: {
    // 动画
    animate(transitionName) {
      this.transitionName = transitionName;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 500);
    },
  },
};
</script>

<style lang="less">
@import "../style/var";

.page-style {
  &__transition {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: @blue;
    border-radius: 3px;
  }
}
</style>
