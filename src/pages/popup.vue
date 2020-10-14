<template>
  <div class="page page-popup">
    <van-cell-group title="基础用法">
      <van-cell
        is-link
        @click="showBasic = true"
      >展示弹出层</van-cell>

      <van-popup
        v-model="showBasic"
        style="padding: 30px 50px"
      >内容</van-popup>
    </van-cell-group>

    <van-cell-group title="弹出位置">
      <van-cell
        is-link
        @click="showTop = true"
      >顶部弹出</van-cell>
      <van-cell
        is-link
        @click="showBottom = true"
      >底部弹出</van-cell>
      <van-cell
        is-link
        @click="showLeft = true"
      >左侧弹出</van-cell>
      <van-cell
        is-link
        @click="showRight = true"
      >右侧弹出</van-cell>

      <van-popup
        v-model="showTop"
        position="top"
        style="height: 30%"
      />
      <van-popup
        v-model="showBottom"
        position="bottom"
        style="height: 30%"
      />
      <van-popup
        v-model="showLeft"
        position="left"
        style="width:30%; height: 100%"
      />
      <van-popup
        v-model="showRight"
        position="right"
        style="width:30%; height: 100%"
      />
    </van-cell-group>

    <van-cell-group title="关闭图标">
      <van-cell
        is-link
        @click="showCloseIcon = true"
      >关闭图标</van-cell>
      <van-cell
        is-link
        @click="showCustomCloseIcon = true"
      >自定义图标</van-cell>
      <van-cell
        is-link
        @click="showCloseIconPosition = true"
      >图标位置</van-cell>

      <van-popup
        v-model="showCloseIcon"
        position="bottom"
        closeable
        style="height: 30%"
      />
      <van-popup
        v-model="showCustomCloseIcon"
        position="bottom"
        closeable
        close-icon="close"
        style="height: 30%"
      />
      <van-popup
        v-model="showCloseIconPosition"
        position="bottom"
        closeable
        close-icon-position="top-left"
        style="height: 30%"
      />
    </van-cell-group>

    <van-cell-group title="圆角弹窗">
      <van-cell
        is-link
        @click="showRound = true"
      >圆角弹窗</van-cell>

      <van-popup
        v-model="showRound"
        position="bottom"
        round
        style="height: 30%"
      />
    </van-cell-group>

    <van-cell-group title="指定挂载节点">
      <van-cell
        is-link
        @click="showGetContainer = true"
      >指定挂载节点</van-cell>

      <van-popup
        v-model="showGetContainer"
        get-container="body"
        style="padding: 30px 50px;"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showCloseIcon: false,
      showCustomCloseIcon: false,
      showCloseIconPosition: false,
      showRound: false,
      showGetContainer: false,
    };
  },
};
</script>

<style lang="less">
@import "../style/var";
</style>
