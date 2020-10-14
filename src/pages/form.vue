<template>
  <div class="page page-from">
    <van-form @submit="submit">
      <van-cell-group title="基础用法">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名'}]"
        />
        <van-field
          v-model="password"
          name="password"
          type="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码'}]"
        />
      </van-cell-group>
      <div style="margin:16px">
        <van-button
          type="info"
          native-type="submit"
          block
          round
        >提交</van-button>
      </div>
    </van-form>

    <van-form
      validate-first
      @failed="failed"
      @submit="submit"
    >
      <van-cell-group title="校验规则">
        <van-field
          v-model="valuePattern"
          name="pattern"
          label="文本"
          placeholder="正则校验"
          :rules="[{ pattern, message: '请输入6个数字'}]"
        />
        <van-field
          v-model="valueValidator"
          name="validator"
          label="文本"
          placeholder="函数校验"
          :rules="[{ validator, message: '请输入1开头11个数字'}]"
        />
        <van-field
          v-model="valueAsyncValidator"
          name="asyncValidator"
          label="文本"
          placeholder="异步函数校验"
          :rules="[{ validator: asyncValidator, message: '请输入正6个数字'}]"
        />
      </van-cell-group>
      <div style="margin:16px">
        <van-button
          type="info"
          native-type="submit"
          block
          round
        >提交</van-button>
      </div>
    </van-form>

    <van-form
      validate-first
      @failed="failed"
      @submit="submit"
    >
      <van-cell-group title="表单项类型">
        <van-field
          name="switch"
          label="开关"
        >
          <template #input>
            <van-switch
              v-model="data.switch"
              :size="20"
            />
          </template>
        </van-field>

        <van-field
          name="checkbox"
          label="复选框"
        >
          <template #input>
            <van-checkbox
              v-model="data.checkbox"
              shape="square"
            />
          </template>
        </van-field>

        <van-field
          name="checkboxGroup"
          label="复选框组"
        >
          <template #input>
            <van-checkbox-group
              v-model="data.checkboxGroup"
              direction="horizontal"
            >
              <van-checkbox
                name="1"
                shape="square"
              >复选框 1</van-checkbox>
              <van-checkbox
                name="2"
                shape="square"
              >复选框 2</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>

        <van-field
          name="radio"
          label="单选框"
        >
          <template #input>
            <van-radio-group
              v-model="data.radio"
              direction="horizontal"
            >
              <van-radio name="1">单选框 1</van-radio>
              <van-radio name="2">单选框 2</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
          name="stepper"
          label="步进器"
        >
          <template #input>
            <van-stepper v-model="data.stepper" />
          </template>
        </van-field>

        <van-field
          name="rate"
          label="评分"
        >
          <template #input>
            <van-rate v-model="data.rate" />
          </template>
        </van-field>

        <van-field
          name="slider"
          label="滑块"
        >
          <template #input>
            <van-slider v-model="data.slider" />
          </template>
        </van-field>

        <van-field
          name="uploader"
          label="文件上传"
        >
          <template #input>
            <van-uploader
              v-model="data.uploader"
              :max-count="2"
            />
          </template>
        </van-field>

        <van-field
          name="picker"
          label="选择器"
          :value="data.picker"
          placeholder="点击选择城市"
          readonly
          clickable
          @click="showPicker = true"
        >
          <template #extra>
            <van-popup
              v-model="showPicker"
              position="bottom"
              round
              get-container="body"
            >
              <van-picker
                :columns="columns"
                show-toolbar
                @confirm="pickerConfirm"
                @cancel="showPicker = false"
              />
            </van-popup>
          </template>
        </van-field>

        <van-field
          name="datetimePicker"
          label="时间选择器"
          :value="data.datetimePicker"
          placeholder="点击选择时间"
          readonly
          clickable
          @click="showDatetimePicker = true"
        >
          <template #extra>
            <van-popup
              v-model="showDatetimePicker"
              position="bottom"
              round
              get-container="body"
            >
              <van-datetime-picker
                type="time"
                @confirm="datetimePickerConfirm"
                @cancel="showDatetimePicker = false"
              />
            </van-popup>
          </template>
        </van-field>

        <van-field
          name="area"
          label="地区选择"
          :value="data.area"
          placeholder="点击选择省市区"
          readonly
          clickable
          @click="showArea = true"
        >
          <template #extra>
            <van-popup
              v-model="showArea"
              position="bottom"
              round
              get-container="body"
            >
              <van-area
                :area-list="areas"
                show-toolbar
                @confirm="areaConfirm"
                @cancel="showArea = false"
              />
            </van-popup>
          </template>
        </van-field>

        <van-field
          name="calendar"
          label="日历"
          :value="data.calendar"
          placeholder="点击选择日期"
          readonly
          clickable
          @click="showCalendar = true"
        >
          <template #extra>
            <van-calendar
              v-model="showCalendar"
              round
              get-container="body"
              @confirm="calendarConfirm"
            />
          </template>
        </van-field>

      </van-cell-group>
      <div style="margin:16px">
        <van-button
          type="info"
          native-type="submit"
          block
          round
        >提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import areas from '../data/area';

export default {
  data() {
    return {
      username: '',
      password: '',
      valuePattern: '',
      valueValidator: '',
      valueAsyncValidator: '',
      pattern: /\d{6}/,
      data: {
        switch: false,
        checkbox: false,
        checkboxGroup: [],
        radio: '1',
        stepper: 1,
        rate: 3,
        slider: 50,
        uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
        picker: '',
        datetimePicker: '',
        area: '',
        calendar: '',
      },
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showDatetimePicker: false,
      showArea: false,
      areas: areas,
      showCalendar: false,
    };
  },
  methods: {
    // 提交
    submit(data) {
      console.log('submit', data);
    },
    // 函数校验
    validator(val) {
      // 返回 true 表示校验通过, false 表示校验不通过
      return /1\d{10}/.test(val);
    },
    // 异步函数校验
    asyncValidator(val) {
      return new Promise((resolve) => {
        this.$toast.loading('校验中...');

        setTimeout(() => {
          this.$toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    // 失败
    failed(error) {
      console.log('failed', error);
    },
    // 选择器确定
    pickerConfirm(value) {
      this.data.picker = value;
      this.showPicker = false;
    },
    // 时间选择器确定
    datetimePickerConfirm(value) {
      this.data.datetimePicker = value;
      this.showDatetimePicker = false;
    },
    // 地区选择确定
    areaConfirm(values) {
      this.data.area = values.map((item) => item.name).join('/');
      this.showArea = false;
    },
    // 日历选择确定
    calendarConfirm(date) {
      this.data.calendar = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
  },
};
</script>
