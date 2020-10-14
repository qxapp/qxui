<template>
  <div id="app">
    <van-nav-bar
      :title="title"
      :left-arrow="leftArrow"
      @click-left="back"
    />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  // 名称
  name: "App",
  // 数据
  data() {
    return {
      leftArrow: false,
    };
  },
  // 计算属性
  computed: {
    // 标题
    title() {
      const { title } = this.$route.meta || {};
      return title ? title : "";
    },
  },
  // 侦听属性
  watch: {
    $route(val) {
      this.leftArrow = val.path == "/" ? false : true;
    },
  },
  // 方法
  methods: {
    back() {
      if (this.leftArrow) {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style lang="less">
@import "./style/base";
@import "./style/var";

.page {
  box-sizing: border-box;
  padding-bottom: @padding-md;
  min-height: calc(100vh - 46px);
}
.test {
  display: inline;
}
</style>
