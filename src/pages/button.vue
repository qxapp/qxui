<template>
  <div class="page page-button">
    <van-cell-group title="按钮类型">
      <div class="page-button__row">
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button>默认按钮</van-button>
      </div>
      <van-button type="danger">危险按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
    </van-cell-group>

    <van-cell-group title="朴素按钮">
      <van-button
        type="primary"
        plain
      >朴素按钮</van-button>
      <van-button
        type="info"
        plain
      >朴素按钮</van-button>
    </van-cell-group>

    <van-cell-group title="细边框">
      <van-button
        type="primary"
        plain
        hairline
      >细边框按钮</van-button>
      <van-button
        type="info"
        plain
        hairline
      >细边框按钮</van-button>
    </van-cell-group>

    <van-cell-group title="禁用状态">
      <van-button
        type="primary"
        disabled
      >禁用状态</van-button>
      <van-button
        type="info"
        disabled
      >禁用状态</van-button>
    </van-cell-group>

    <van-cell-group title="加载状态">
      <van-button
        type="primary"
        loading
      ></van-button>
      <van-button
        type="primary"
        loading
        loading-type="spinner"
      ></van-button>
      <van-button
        type="info"
        loading
        loading-text="加载中..."
      ></van-button>
    </van-cell-group>

    <van-cell-group title="按钮形状">
      <van-button
        type="primary"
        square
      >方形按钮</van-button>
      <van-button
        type="info"
        round
      >圆形按钮</van-button>
    </van-cell-group>

    <van-cell-group title="图形按钮">
      <van-button
        type="primary"
        icon="plus"
      ></van-button>
      <van-button
        type="primary"
        icon="plus"
      >按钮</van-button>
      <van-button
        type="info"
        icon="https://img.yzcdn.cn/vant/user-active.png"
        plain
      >按钮</van-button>
    </van-cell-group>

    <van-cell-group title="按钮尺寸">
      <van-button
        type="primary"
        size="large"
      >大号按钮</van-button>
      <van-button type="primary">普通按钮</van-button>
      <van-button
        type="primary"
        size="small"
      >小型按钮</van-button>
      <van-button
        type="primary"
        size="mini"
      >迷你按钮</van-button>
    </van-cell-group>

    <van-cell-group title="块级元素">
      <van-button
        type="primary"
        block
      >块级元素</van-button>
    </van-cell-group>

    <van-cell-group title="页面导航">
      <van-button
        type="primary"
        url="https://qxapp.cn"
      >URL跳转</van-button>
      <van-button
        type="primary"
        to="/"
      >路由跳转</van-button>
    </van-cell-group>

    <van-cell-group title="自定义颜色">
      <van-button color="#7232dd">单色按钮</van-button>
      <van-button
        color="#7232dd"
        plain
      >单色按钮</van-button>
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</van-button>
    </van-cell-group>
  </div>
</template>

<style lang="less">
@import "../style/var";

.page-button {
  .van-cell-group {
    padding: 0 @padding-md;
    background: none;
  }

  &__row {
    margin-bottom: @padding-md;
  }

  .van-button {
    margin-right: @padding-md;

    &--large {
      margin-bottom: @padding-md;
    }
  }
}
</style>
