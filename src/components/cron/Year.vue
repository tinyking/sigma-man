<template>
  <div style="padding-bottom: 10px">
    <a-radio-group v-model="value" @change="onChange">
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
          <a-input-number :min="1" :max="10" />
          <span>&nbsp;-&nbsp;</span>
          <a-input-number :min="1" :max="10" />
        </div>
      </row>
      <row>
        <a-radio :value="4"></a-radio>
        <div slot="text">
          <span>指定</span>
          <a-select
            v-model="value"
            mode="multiple"
            style="width: 400px"
            placeholder="select one country"
            option-label-prop="label"
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import Row from './Row.vue';

@Component({ components: { Row } })
export default class CronYear extends Vue {
  value = 1;
}
</script>

<style></style>
