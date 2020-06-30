<template>
  <div style="padding-bottom: 10px">
    <a-radio-group v-model="type" @change="onChange">
      <row>
        <a-radio :value="1"></a-radio>
        <div slot="text">
          <span>每秒 允许的通配符[, - * /]</span>
        </div>
      </row>
      <row>
        <a-radio :value="2"></a-radio>
        <div slot="text">
          <span>周期从&nbsp;</span>
          <a-input-number :min="1" :max="10" v-model="periodStart" @change="onChange" />
          <span>&nbsp;-&nbsp;</span>
          <a-input-number :min="1" :max="10" v-model="periodEnd" @change="onChange" />
          <span>&nbsp;秒</span>
        </div>
      </row>
      <row>
        <a-radio :value="3"></a-radio>
        <div slot="text">
          <span>从&nbsp;</span>
          <a-input-number :min="1" :max="10" v-model="from" @change="onChange" />
          <span>&nbsp;秒开始，每&nbsp;</span>
          <a-input-number :min="1" :max="10" v-model="interval" @change="onChange" />
          <span>&nbsp;秒执行一次</span>
        </div>
      </row>
      <row>
        <a-radio :value="4"></a-radio>
        <div slot="text">
          <span>指定</span>
          <a-select
            v-model="selected"
            mode="multiple"
            style="width: 400px"
            option-label-prop="label"
            @change="onChange"
          >
            <a-select-option value="china" label="China">
              <span role="img" aria-label="China">🇨🇳</span>
              China (中国)
            </a-select-option>
            <a-select-option value="usa" label="USA">
              <span role="img" aria-label="USA">🇺🇸</span>
              USA (美国)
            </a-select-option>
            <a-select-option value="japan" label="Japan">
              <span role="img" aria-label="Japan">🇯🇵</span>
              Japan (日本)
            </a-select-option>
            <a-select-option value="korea" label="Korea">
              <span role="img" aria-label="Korea">🇰🇷</span>
              Korea (韩国)
            </a-select-option>
          </a-select>
        </div>
      </row>
    </a-radio-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

import Row from './Row.vue';
import { CronMixins } from '@/mixins';

@Component({ components: { Row } })
export default class CronSecond extends Mixins(CronMixins) {
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
        value = this.selected.join(',');
        break;
    }

    this.changeSecond(value);
  }
}
</script>

<style></style>
