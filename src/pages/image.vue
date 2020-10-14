<template>
  <div class="page page-image">
    <van-cell-group title="基础用法">
      <van-row>
        <van-col :span="24">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100"
            height="100"
          />
        </van-col>
      </van-row>
    </van-cell-group>

    <van-cell-group title="填充模式">
      <van-row :gutter="20">
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="contain"
          />
          <div class="page-image__text">contain</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="cover"
          />
          <div class="page-image__text">cover</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="fill"
          />
          <div class="page-image__text">fill</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="none"
          />
          <div class="page-image__text">none</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="scale-down"
          />
          <div class="page-image__text">scale-down</div>
        </van-col>
      </van-row>
    </van-cell-group>

    <van-cell-group title="圆形图片">
      <van-row :gutter="20">
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="contain"
            round
          />
          <div class="page-image__text">contain</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="cover"
            round
          />
          <div class="page-image__text">cover</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="fill"
            round
          />
          <div class="page-image__text">fill</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="none"
            round
          />
          <div class="page-image__text">none</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            width="100%"
            height="100"
            fit="scale-down"
            round
          />
          <div class="page-image__text">scale-down</div>
        </van-col>
      </van-row>
    </van-cell-group>

    <van-cell-group title="加载中提示">
      <van-row :gutter="20">
        <van-col :span="8">
          <van-image
            width="100%"
            height="100"
            show-loading
          />
          <div class="page-image__text">默认提示</div>
        </van-col>
        <van-col :span="8">
          <van-image
            width="100%"
            height="100"
          >
            <template #loading>
              <van-loading
                type="spinner"
                :size="20"
              />
            </template>
          </van-image>
          <div class="page-image__text">自定义提示</div>
        </van-col>
      </van-row>
    </van-cell-group>

    <van-cell-group title="加载失败提示">
      <van-row :gutter="20">
        <van-col :span="8">
          <van-image
            src="x"
            width="100%"
            height="100"
          />
          <div class="page-image__text">默认提示</div>
        </van-col>
        <van-col :span="8">
          <van-image
            src="x"
            width="100%"
            height="100"
          >
            <template #error>加载失败</template>
          </van-image>
          <div class="page-image__text">自定义提示</div>
        </van-col>
      </van-row>
    </van-cell-group>
  </div>
</template>

<style lang="less">
@import "../style/var";

.page-image {
  .van-row {
    padding: 0 @padding-md;
  }

  .van-col {
    margin: @padding-md 0;
  }

  &__text {
    margin-top: 5px;
    color: #646566;
    font-size: 14px;
    text-align: center;
  }
}
</style>
