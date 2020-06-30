<template>
  <div style="padding-bottom: 10px">
    <a-radio-group v-model="type" @change="onChange">
      <row>
        <a-radio :value="1"></a-radio>
        <div slot="text">
          <span>不指定 允许的通配符[, - * /] 非必填</span>
        </div>
      </row>
      <row>
        <a-radio :value="2"></a-radio>
        <div slot="text">
          <span>每年</span>
        </div>
      </row>
      <row>
        <a-radio :value="3"></a-radio>
        <div slot="text">
          <span>周期从&nbsp;</span>
          <a-input-number :min="2020" :max="9999" v-model="periodStart" @change="onChange" />
          <span>&nbsp;-&nbsp;</span>
          <a-input-number :min="2020" :max="9999" v-model="periodEnd" @change="onChange" />
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
export default class CronYear extends Mixins(CronMixins) {
  periodStart = 2020;
  periodEnd = 2021;

  public onChange() {
    let value = '*';
    switch (this.type) {
      case 1:
        value = '';
        break;
      case 2:
        break;
      case 3:
        value = `${this.periodStart}-${this.periodEnd}`;
        break;
    }

    this.changeYear(value);
  }
}
</script>

<style></style>
