<template>
  <div class="page page-col">
    <van-cell-group title="基础用法">
      <van-row>
        <van-col :span="8">span: 8</van-col>
        <van-col :span="8">span: 8</van-col>
        <van-col :span="8">span: 8</van-col>
      </van-row>
      <van-row>
        <van-col :span="4">span: 4</van-col>
        <van-col
          :span="10"
          :offset="4"
        >span: 10, offset: 4</van-col>
      </van-row>
      <van-row>
        <van-col
          :span="12"
          :offset="12"
        >span: 12, offset: 12</van-col>
      </van-row>
    </van-cell-group>

    <van-cell-group title="在列元素之间增加间距">
      <van-row :gutter="20">
        <van-col :span="8">span: 8</van-col>
        <van-col :span="8">span: 8</van-col>
        <van-col :span="8">span: 8</van-col>
      </van-row>
    </van-cell-group>

    <van-cell-group title="Flex 布局">
      <van-row type="flex">
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
      </van-row>
      <van-row
        type="flex"
        justify="center"
      >
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
      </van-row>
      <van-row
        type="flex"
        justify="end"
      >
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
      </van-row>
      <van-row
        type="flex"
        justify="space-between"
      >
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
      </van-row>
      <van-row
        type="flex"
        justify="space-around"
      >
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
        <van-col :span="6">span: 6</van-col>
      </van-row>
    </van-cell-group>
  </div>
</template>

<style lang="less">
@import "../style/var";

.page-col {
  .van-cell-group {
    padding: 0 @padding-md;
  }

  .van-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
