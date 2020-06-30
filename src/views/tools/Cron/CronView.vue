<template>
  <a-card title="Cron Tool">
    <a-tabs>
      <a-tab-pane key="1" tab="秒">
        <cron-second />
      </a-tab-pane>
      <a-tab-pane key="2" tab="分钟">
        <cron-minute />
      </a-tab-pane>
      <a-tab-pane key="3" tab="小时">
        <cron-hour />
      </a-tab-pane>
      <a-tab-pane key="4" tab="日">
        <cron-day />
      </a-tab-pane>
      <a-tab-pane key="5" tab="月">
        <cron-month />
      </a-tab-pane>
      <a-tab-pane key="6" tab="周">
        <cron-week />
      </a-tab-pane>
      <a-tab-pane key="7" tab="年">
        <cron-year />
      </a-tab-pane>
    </a-tabs>

    <a-divider />

    <div>
      <a-form layout="inline">
        <a-form-item label="Cron Expression">
          <a-input style="width:500px" :value="fullCron" readonly>
            <a-icon slot="addonAfter" type="copy" style="cursor: pointer;" />
          </a-input>
        </a-form-item>
      </a-form>
    </div>
  </a-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import CronSecond from '@/components/cron/Second.vue';
import CronMinute from '@/components/cron/Minute.vue';
import CronHour from '@/components/cron/Hour.vue';
import CronDay from '@/components/cron/Day.vue';
import CronMonth from '@/components/cron/Month.vue';
import CronWeek from '@/components/cron/Week.vue';
import CronYear from '@/components/cron/Year.vue';

@Component({
  components: {
    CronSecond,
    CronMinute,
    CronHour,
    CronDay,
    CronMonth,
    CronWeek,
    CronYear
  }
})
export default class CronView extends Vue {
  @Action('initCron', { namespace: 'cron' }) private initCron!: Function;

  @Getter('fullCron', { namespace: 'cron' }) public fullCron!: string;
  created() {
    this.initCron();
  }
}
</script>
