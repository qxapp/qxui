<template>
  <div class="page page-uploader">
    <van-cell-group title="基础用法">
      <van-uploader :after-read="afterRead" />
    </van-cell-group>

    <van-cell-group title="文件预览">
      <van-uploader
        v-model="fileList"
        multiple
        accept="*"
      />
    </van-cell-group>

    <van-cell-group title="上传状态">
      <van-uploader
        v-model="fileListStatus"
        :after-read="afterReadFailed"
      />
    </van-cell-group>

    <van-cell-group title="限制上传数量">
      <van-uploader
        v-model="fileListLimit"
        multiple
        :max-count="2"
      />
    </van-cell-group>

    <van-cell-group title="限制上传大小">
      <van-uploader
        v-model="fileListSize"
        multiple
        :max-size="500 * 1024"
        @oversize="onOversize"
      />
    </van-cell-group>

    <van-cell-group title="自定义上传样式">
      <van-uploader>
        <van-button
          type="primary"
          icon="plus"
        >上传文件</van-button>
      </van-uploader>
    </van-cell-group>

    <van-cell-group title="自定义预览样式">
      <van-uploader v-model="fileListPreview">
        <template #preview-cover="{ file }">
          <div class="page-uploader__preview van-ellipsis">{{ file.name }}</div>
        </template>
      </van-uploader>
    </van-cell-group>

    <van-cell-group title="上传前处理">
      <van-uploader
        v-model="fileListBefore"
        :before-read="beforeRead"
      />
    </van-cell-group>

    <van-cell-group title="禁用文件上传">
      <van-uploader
        :after-read="afterRead"
        disabled
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
      ],
      fileListStatus: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败',
        },
      ],
      fileListLimit: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
      fileListSize: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
      fileListPreview: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          file: {
            name: '图片名称',
          },
        },
      ],
      fileListBefore: [],
    };
  },
  methods: {
    // 上传后处理
    afterRead(file, detail) {
      console.log(file, detail);
    },

    // 上传前处理
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        this.$toast('请上传 jpg 格式图片');
        return false;
      }
      return true;
    },

    // 上传失败
    afterReadFailed(file) {
      file.status = 'uploading';
      file.message = '上传中...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
      }, 1000);
    },

    // 文件超过指定大小后提示
    onOversize(file, detail) {
      console.log(file, detail);
      this.$toast('文件大小不能超过 500kb');
    },
  },
};
</script>

<style lang="less">
@import url('../style/var');

.page-uploader {
  .van-cell-group {
    padding: @padding-sm @padding-md @padding-xs;
  }

  &__preview {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
