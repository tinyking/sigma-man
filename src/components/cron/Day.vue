<template>
  <div style="padding-bottom: 10px">
    <a-radio-group v-model="type" @change="onChange">
      <row>
        <a-radio :value="1"></a-radio>
        <div slot="text">
          <span>日 允许的通配符[, - * / L W]</span>
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
          <span>周期从&nbsp;</span>
          <a-input-number :min="1" :max="29" v-model="periodStart" @change="onChange" />
          <span>&nbsp;-&nbsp;</span>
          <a-input-number :min="1" :max="10" v-model="periodEnd" @change="onChange" />
          <span>&nbsp;日</span>
        </div>
      </row>
      <row>
        <a-radio :value="4"></a-radio>
        <div slot="text">
          <span>从&nbsp;</span>
          <a-input-number :min="1" :max="10" v-model="from" @change="onChange" />
          <span>&nbsp;日开始，每&nbsp;</span>
          <a-input-number :min="1" :max="10" v-model="interval" @change="onChange" />
          <span>&nbsp;天执行一次</span>
        </div>
      </row>
      <row>
        <a-radio :value="5"></a-radio>
        <div slot="text">
          <span>每月&nbsp;</span>
          <a-input-number :min="1" :max="10" v-model="near" @change="onChange" />
          <span>&nbsp;号最近的那个工作日&nbsp;</span>
        </div>
      </row>
      <row>
        <a-radio :value="6"></a-radio>
        <div slot="text">
          <span>本月最后一天</span>
        </div>
      </row>
      <row>
        <a-radio :value="7"></a-radio>
        <div slot="text">
          <span>指定</span>
          <a-select v-model="selected" mode="multiple" style="width: 400px" @change="onChange">
            <a-select-option v-for="time in days" :key="time" :value="time" :label="time">
              {{ time }}
            </a-select-option>
          </a-select>
        </div>
      </row>
    </a-radio-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import Row from './Row.vue';
import { CronMixins } from '@/mixins';

@Component({
  components: { Row }
})
export default class CronDay extends Mixins(CronMixins) {
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
        value = `${this.from}/${this.interval}`;
        break;
      case 5:
        value = `${this.near}W`;
        break;
      case 6:
        value = 'L';
        break;
      case 7:
        this.selected = this.selected.sort();
        value = this.selected.join(',');
        break;
    }

    this.changeDay(value);
  }
}
</script>

<style></style>
