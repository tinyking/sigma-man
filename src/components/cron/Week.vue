<template>
  <div style="padding-bottom: 10px">
    <a-radio-group v-model="type" @change="onChange">
      <row>
        <a-radio :value="1"></a-radio>
        <div slot="text">
          <span>周 允许的通配符[, - * / L #]</span>
        </div>
      </row>
      <row>
        <a-radio :value="2"></a-radio>
        <div slot="text">
          <span>不指定</span>
        </div>
      </row>
      <row>
        <a-radio :value="3"></a-radio>
        <div slot="text">
          <span>周期 从星期&nbsp;</span>
          <a-input-number :min="1" :max="7" v-model="periodStart" @change="onChange" />
          <span>&nbsp;-&nbsp;</span>
          <a-input-number :min="1" :max="7" v-model="periodEnd" @change="onChange" />
        </div>
      </row>
      <row>
        <a-radio :value="4"></a-radio>
        <div slot="text">
          <span>第&nbsp;</span>
          <a-input-number :min="1" :max="4" v-model="from" @change="onChange" />
          <span>&nbsp;周的星期&nbsp;</span>
          <a-input-number :min="1" :max="7" v-model="interval" @change="onChange" />
        </div>
      </row>
      <row>
        <a-radio :value="5"></a-radio>
        <div slot="text">
          <span>本月最后一个星期&nbsp;</span>
          <a-input-number :min="1" :max="7" v-model="near" @change="onChange" />
        </div>
      </row>
      <row>
        <a-radio :value="6"></a-radio>
        <div slot="text">
          <span>指定</span>
          <a-select v-model="selected" mode="multiple" style="width: 400px" @change="onChange">
            <a-select-option v-for="time in weeks" :key="time" :value="time" :label="time">
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
export default class CronWeek extends Mixins(CronMixins) {
  periodStart = 1;
  periodEnd = 2;

  from = 1;
  interval = 1;

  near = 1;

  selected = [];

  public onChange() {
    let value = '*';
    switch (this.type) {
      case 1:
        break;
      case 2:
        value = '?';
        break;
      case 3:
        value = `${this.periodStart}-${this.periodEnd}`;
        break;
      case 4:
        value = `${this.from}#${this.interval}`;
        break;
      case 5:
        value = `${this.near}L`;
        break;
      case 6:
        this.selected = this.selected.sort();
        value = this.selected.join(',');
        break;
    }

    this.changeWeek(value);
  }
}
</script>

<style></style>
