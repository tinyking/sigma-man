<template>
  <div style="padding-bottom: 10px">
    <a-radio-group v-model="type" @change="onChange">
      <row>
        <a-radio :value="1"></a-radio>
        <div slot="text">
          <span>小时 允许的通配符[, - * /]</span>
        </div>
      </row>
      <row>
        <a-radio :value="2"></a-radio>
        <div slot="text">
          <span>周期从&nbsp;</span>
          <a-input-number :min="0" :max="23" v-model="periodStart" @change="onChange" />
          <span>&nbsp;-&nbsp;</span>
          <a-input-number :min="2" :max="23" v-model="periodEnd" @change="onChange" />
          <span>&nbsp;小时</span>
        </div>
      </row>
      <row>
        <a-radio :value="3"></a-radio>
        <div slot="text">
          <span>从&nbsp;</span>
          <a-input-number :min="0" :max="23" v-model="from" @change="onChange" />
          <span>&nbsp;小时开始，每&nbsp;</span>
          <a-input-number :min="0" :max="23" v-model="interval" @change="onChange" />
          <span>&nbsp;小时执行一次</span>
        </div>
      </row>
      <row>
        <a-radio :value="4"></a-radio>
        <div slot="text">
          <span>指定</span>
          <a-select v-model="selected" mode="multiple" style="width: 400px" @change="onChange">
            <a-select-option v-for="time in hours" :key="time" :value="time" :label="time">
              {{ time }}
            </a-select-option>
          </a-select>
        </div>
      </row>
    </a-radio-group>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import Row from './Row.vue';
import { CronMixins } from '@/mixins';

@Component({ components: { Row } })
export default class CronHour extends Mixins(CronMixins) {
  periodStart = 1;
  periodEnd = 2;

  from = 1;
  interval = 1;

  selected = [];

  public onChange() {
    let value = '*';
    switch (this.type) {
      case 1:
        break;
      case 2:
        value = `${this.periodStart}-${this.periodEnd}`;
        break;
      case 3:
        value = `${this.from}/${this.interval}`;
        break;
      case 4:
        this.selected = this.selected.sort();
        value = this.selected.join(',');
        break;
    }

    this.changeHour(value);
  }
}
</script>
