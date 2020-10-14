<template>
  <div class="page page-cell">
    <van-cell-group title="基础用法">
      <van-cell
        title="单元格"
        value="内容"
      />
      <van-cell
        title="单元格"
        value="内容"
        label="描述信息"
      />
    </van-cell-group>

    <van-cell-group title="单元格大小">
      <van-cell
        title="大单元格"
        value="内容"
        size="large"
      />
      <van-cell
        title="大单元格"
        value="内容"
        label="描述信息"
        size="large"
      />
    </van-cell-group>

    <van-cell-group title="展示图标">
      <van-cell
        icon="location-o"
        title="单元格"
        value="内容"
      />
    </van-cell-group>

    <van-cell-group title="只设置 value">
      <van-cell value="内容" />
    </van-cell-group>

    <van-cell-group title="展示箭头">
      <van-cell
        title="单元格"
        is-link
      />
      <van-cell
        title="单元格"
        value="内容"
        is-link
      />
      <van-cell
        title="单元格"
        value="内容"
        is-link
        arrow-direction="down"
      />
    </van-cell-group>

    <van-cell-group title="页面导航">
      <van-cell
        title="URL 跳转"
        url="https://qxapp.cn"
        is-link
      />
      <van-cell
        title="路由跳转"
        to="button"
        is-link
      />
    </van-cell-group>

    <van-cell-group title="分组标题" />

    <van-cell-group title="分组 1">
      <van-cell
        title="单元格"
        value="内容"
      />
    </van-cell-group>

    <van-cell-group title="分组 2">
      <van-cell
        title="单元格"
        value="内容"
      />
    </van-cell-group>

    <van-cell-group title="使用插槽">
      <van-cell
        value="标签"
        is-link
      >
        <template #title>
          <span class="page-cell__title">单元格</span>
          <van-tag type="danger">标签</van-tag>
        </template>
      </van-cell>
      <van-cell
        icon="shop-o"
        title="单元格"
      >
        <template #right-icon>
          <van-icon
            class="page-cell__search-icon"
            name="search"
          />
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="垂直居中">
      <van-cell
        title="单元格"
        value="内容"
        label="描述信息"
        center
      />
    </van-cell-group>
  </div>
</template>

<style lang="less">
@import "../style/var";

.page-cell {
  &__title {
    margin-right: @padding-base;
    vertical-align: middle;
  }

  &__search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
